"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";

export function AuthUI() {
  const { user, loading, signIn, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  if (loading) return null;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await signIn(email);
      setEmail("");
      setShowForm(false);
      alert("Check your email for the login link!");
    } catch (error) {
      alert("Error signing in: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (user) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13 }}>
        <span style={{ color: "#666" }}>{user.email}</span>
        <button
          onClick={() => signOut()}
          style={{
            padding: "6px 14px",
            fontSize: 13,
            background: "#f0f0f0",
            border: "1px solid #ddd",
            borderRadius: 6,
            cursor: "pointer",
            color: "#333",
            fontWeight: 500,
          }}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          style={{
            padding: "6px 14px",
            fontSize: 13,
            background: "oklch(0.55 0.12 165)",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            color: "#fff",
            fontWeight: 500,
          }}
        >
          Sign in to sync
        </button>
      ) : (
        <form onSubmit={handleSignIn} style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "6px 10px",
              fontSize: 13,
              border: "1px solid #ddd",
              borderRadius: 6,
              flex: 1,
            }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: "6px 14px",
              fontSize: 13,
              background: isSubmitting ? "#ccc" : "oklch(0.55 0.12 165)",
              border: "none",
              borderRadius: 6,
              cursor: isSubmitting ? "not-allowed" : "pointer",
              color: "#fff",
              fontWeight: 500,
            }}
          >
            {isSubmitting ? "..." : "Sign in"}
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            style={{
              padding: "6px 10px",
              fontSize: 13,
              background: "transparent",
              border: "1px solid #ddd",
              borderRadius: 6,
              cursor: "pointer",
              color: "#666",
            }}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
