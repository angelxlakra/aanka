import { useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

const TABLE_NAME = "roadmap_progress";
const LOCAL_STORAGE_KEY = "aanka-roadmap-v2";

export function useRoadmapSync(
  done: Record<string, boolean>,
  setDone: (done: Record<string, boolean>) => void,
  loaded: boolean
) {

  // Save to Supabase when done changes
  const saveToSupabase = useCallback(async () => {
    try {
      const user = await supabase.auth.getUser();
      if (!user.data?.user?.id) return;

      await supabase.from(TABLE_NAME).upsert(
        {
          user_id: user.data.user.id,
          progress: done,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );
    } catch (error) {
      console.error("Failed to save progress to Supabase:", error);
    }
  }, [done]);

  // Load from Supabase on mount
  useEffect(() => {
    const loadFromSupabase = async () => {
      try {
        const user = await supabase.auth.getUser();
        if (!user.data?.user?.id) {
          // Load from localStorage if not logged in
          const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (raw) {
            setDone(JSON.parse(raw));
          }
          return;
        }

        const { data, error } = await supabase
          .from(TABLE_NAME)
          .select("progress")
          .eq("user_id", user.data.user.id)
          .single();

        if (error && error.code !== "PGRST116") {
          // PGRST116 = no rows found
          console.error("Failed to load progress from Supabase:", error);
          return;
        }

        if (data?.progress) {
          setDone(data.progress);
        } else {
          // Fallback to localStorage
          const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (raw) {
            setDone(JSON.parse(raw));
          }
        }
      } catch (error) {
        console.error("Error loading progress:", error);
      }
    };

    if (loaded) {
      loadFromSupabase();
    }
  }, [loaded, setDone]);

  // Save to localStorage always (for offline)
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(done));
      // Save to Supabase in background
      const timer = setTimeout(saveToSupabase, 500);
      return () => clearTimeout(timer);
    }
  }, [done, loaded, saveToSupabase]);
}
