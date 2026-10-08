"use client";

import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  speed?: number; // seconds per loop
  reverse?: boolean;
  className?: string;
};

/**
 * Pure-CSS marquee. Duplicates content three times for seamless loop.
 * Pauses on hover via CSS (defined inline below for portability).
 */
export function Marquee({ children, speed = 50, reverse = false, className }: MarqueeProps) {
  return (
    <div className={`marquee ${className ?? ""}`}>
      <div
        className="marquee__track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden>
          {children}
        </div>
        <div className="marquee__group" aria-hidden>
          {children}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
          mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 5%,
            #000 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 5%,
            #000 95%,
            transparent 100%
          );
        }
        .marquee__track {
          display: flex;
          width: max-content;
          animation-name: marqueeScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
        .marquee__group {
          display: flex;
          flex-shrink: 0;
        }
        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
    </div>
  );
}
