"use client";

import { useEffect } from "react";
import { useTheme } from "@/lib/hooks";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Nav } from "@/components/ui/Nav";

/**
 * All client-side chrome — theme, smooth scroll, custom cursor, progress bar,
 * top navigation. Wraps the page content.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const { theme, toggle } = useTheme();

  // Sync theme to <html data-theme>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <CustomCursor />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav theme={theme} toggleTheme={toggle} />
      <div className="grain-overlay" aria-hidden />
      {children}
    </SmoothScrollProvider>
  );
}
