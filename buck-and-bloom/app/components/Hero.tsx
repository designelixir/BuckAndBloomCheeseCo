"use client";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Nav from "./Nav";

export default function Hero() {
    


    return(
        <div className="hero">
            <div className="sunburst-wrapper flex-center-center full-width">
                    <div className="sunburst scaledown-sunburst"></div>
                    <div className="flex-center-center logo-banner-container logo-enter">
                    <Image width={500} height={220} src="/BuckBloom-Tagline.svg" alt="Buck and Bloom Logo"></Image>
                </div>
            </div>
        <div className="flex-center-center flex-column hero-container">
            
            
            <div className="mountains flex-center-center mtns-enter">
                <Nav></Nav>
            </div>
            
            
        </div>
        </div>
    )
}
