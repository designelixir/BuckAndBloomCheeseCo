"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./components.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const navRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const sunburst = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !navRef.current || !logoRef.current || !innerRef.current) return;

    // Layout: full-screen fixed nav, centered logo, hidden inner wrapper just below viewport
    gsap.set(navRef.current, { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", overflow: "hidden" });
    gsap.set(logoRef.current, { position: "absolute", top: "50%", left: "50%", xPercent: -50, yPercent: -50, zIndex: 2 });
    gsap.set(innerRef.current, { position: "fixed", left: 0, width: "100vw", top: "110vh", opacity: 0, zIndex: 1 });

    // Timeline
    const tl = gsap.timeline({ delay: 3 });

    // 1) Logo slides from center to 50px from top, staying horizontally centered
    tl.to(logoRef.current, { top: '-5vh', yPercent: 0, scale: 0.6, duration: 1.2, ease: "power3.inOut" });

    // 2) While logo is moving, reveal nav-inner-wrapper and lift from 110vh -> 100vh
    tl.to(innerRef.current, { top: "-2.5vw", opacity: 1, duration: 0.9, ease: "power2.out" }, "<0.1");

    // 3) On scroll: shrink from full-screen at bottom to a 200px bar at the top
    const scrollTween = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "+=40%",
        scrub: true,
        invalidateOnRefresh: true
      }
    });

// shrink nav-inner-wrapper height
scrollTween.to(innerRef.current, { height: 120, top: '50px', ease: "none" }, 0);
scrollTween.to(navRef.current, { height: 200, ease: "none" }, 0);
scrollTween.to(sunburst.current, { height: 200, ease: "none" }, 0);

// expand spacer width
scrollTween.to(".nav-logo-spacer", { width: '200px', opacity: 0, ease: "none" }, 0);


    


    // Optional: keep things tidy on hot-reload
    return () => {
      tl.kill();
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <nav ref={navRef} className="site-nav flex-center-center flex-column">
      <div ref={sunburst} className="sunburst-wrapper flex-center-center full-width"><div className="sunburst scaledown-sunburst"></div></div>
      <div ref={logoRef} className="flex-center-center logo-wrapper"><Image className="nav-logo" src="/Buck&Bloom-TileLogo.png" alt="Buck and Bloom Logo" width={300} height={300} priority /></div>

      <div ref={innerRef} className="nav-inner-wrapper flex-end-center">
        <div className="nav-inner flex-center-spaceevenly">
          <a className="nav-link">About</a>
          <Image src="flora.svg" alt="floral detail" height={25} width={25}></Image>
          <a className="nav-link">Visit Us</a>
          <Image src="flora.svg" alt="floral detail" className="nav-logo-spacer" height={25} width={25}></Image>
          <a className="nav-link">Markets</a>
          <Image src="flora.svg" alt="floral detail" height={25} width={25}></Image>
          <a className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}
