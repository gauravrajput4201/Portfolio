"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const parallaxElements =
      document.querySelectorAll<HTMLElement>(".parallax");
    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.scrollY;

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.dataset.speed || "0.5");
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
