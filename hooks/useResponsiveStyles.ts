import { useResponsive } from "./useResponsive";

export function useResponsiveStyles() {
  const { isMobile, isTablet } = useResponsive();

  return {
    heroPadding: isMobile ? "40px 20px 48px" : isTablet ? "56px 40px 56px" : "72px 56px 64px",
    contentPadding: isMobile ? "32px 16px 60px" : isTablet ? "48px 40px 80px" : "56px 56px 110px",
    containerGap: isMobile ? 12 : isTablet ? 16 : 20,

    // Hero text sizes
    heroTitle: isMobile ? 36 : isTablet ? 48 : 58,
    heroSubtitle: isMobile ? 24 : isTablet ? 30 : 38,
    heroAmarkSize: isMobile ? 40 : isTablet ? 48 : 56,

    // Section text sizes
    sectionTitle: isMobile ? 22 : isTablet ? 24 : 27,
    phaseNumber: isMobile ? 36 : isTablet ? 42 : 52,

    // Card padding
    cardPadding: isMobile ? "24px 18px" : isTablet ? "28px 28px" : "32px 36px",

    // Grid columns
    gridCols2: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr",
  };
}
