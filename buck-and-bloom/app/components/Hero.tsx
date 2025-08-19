"use client";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Hero() {

    return(
        <div className="flex-center-center flex-column hero-container">
            {/* <h1 className="centered-text">Welcome!<br></br>We're is a small but mighty team of cheesemakers offering artisan goat cheeses to our home state of Colorado.</h1> */}
            
            <div className="mountains">
                <div className="flex-center-center logo-container">
                    <Image width={500} height={220} src="/BuckBloom-Tagline.svg" alt="Buck and Bloom Logo"></Image>
                </div>
            </div>
            
            
        </div>
    )
}
