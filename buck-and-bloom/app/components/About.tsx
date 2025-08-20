"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./components.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!aboutRef.current || !stackRef.current) return;

    const scenes = Array.from(stackRef.current.querySelectorAll<HTMLElement>(".scene"));
    if (scenes.length === 0) return;

    // stack scenes and hide all except first
    gsap.set(stackRef.current, { position: "relative" });
    gsap.set(scenes, { position: "absolute", inset: 0, autoAlpha: 0 });
    gsap.set(scenes[0], { autoAlpha: 1 });

    // crossfade timeline: 500px scroll per transition
    const tl = gsap.timeline({ defaults: { ease: "none", duration: 1 } });
    for (let i = 0; i < scenes.length - 1; i++) {
      tl.to(scenes[i], { autoAlpha: 0 }, i);               // fade current out
      tl.fromTo(scenes[i + 1], { autoAlpha: 0 }, { autoAlpha: 1 }, i); // fade next in
    }

    const st = ScrollTrigger.create({
      animation: tl,
      trigger: aboutRef.current,
      start: "top 200px",
      end: `+=${700 * (scenes.length - 1)}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    });

    return () => { st.kill(); tl.kill(); ScrollTrigger.getAll().forEach(s => s.kill()); };
  }, []);

  return (
    <div ref={aboutRef} className="about about-pin">
      <h1 className="centered-text about-title">About Us</h1>
      <div ref={stackRef} className="scenes-stack">
        <div className="scene">
            <div className="content flex-center-center">
                <div className="greg about-animate cutout basic-bg"></div>
                <div className="rhonda about-animate cutout basic-bg"></div>
                <div className="amanda about-animate cutout basic-bg"></div>
                <div className="staff about-animate cutout basic-bg"></div>
                <div className="staff-2 about-animate cutout basic-bg"></div>
                <div className="highway about-animate cutout basic-bg"></div>
                <div className="basic-padding about-animate centered-text textured-bg-tan about-text-1">
                    <h3>Buck and Bloom Cheese Company is a small but mighty team of cheesemakers offering artisan goat cheeses to our home state of Colorado. At our creamery in Buena Vista, we create a variety of cheeses: several flavorful fresh chevres, goat milk feta, bloomy rind cheeses, and aged goat cheeses that ripen in our underground cheese cave. We have a cheese-pleaser for each and everyone.</h3>
                </div>
            </div>
        </div>
        <div className="scene">
            <div className="content flex-center-start flex-column">
                <div className="goat-1 about-animate cutout basic-bg"></div>
                <div className="goat-2 about-animate cutout basic-bg"></div>
                <div className="basic-padding about-animate centered-text textured-bg-tan about-text-1">
                    <h3>Our goat milk is sourced from farms in Trinidad and Westcliffe, Colorado, from trusted farmers who give incredible care to their herds. We are proud to craft cheese from some of the best quality goat milk in the state, made fresh as soon as the milk arrives at our doors. </h3>
                </div>
            </div>
        </div>
        <div className="scene">
            <div className="content flex-start-center">
                <div className="greg-2 about-animate cutout basic-bg"></div>
                
                <div className="cheeses about-animate cutout basic-bg"></div>
                <div className="jade about-animate cutout basic-bg"></div>
                <div className="basic-padding about-animate centered-text textured-bg-tan about-text-1">
                    <h3>Carrying on the goat cheese legacy of Buena Vista, we are thrilled to be making cheese in an impressive facility that used to be known as Jumpin&apos; Good Goat Dairy. After several years of lying dormant, we fired up all the equipment this Spring and have been pasteurizing, culturing, cutting curd, and making wheels ever since. We love that we can continue to produce goat cheese in the Rocky Mountains.</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
