"use client"

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { useScreenSize } from "@/components/hooks/use-screen-size";
import { PixelTrail } from "@/components/ui/pixel-trail";

const navigation = [
  // { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const screenSize = useScreenSize();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-white duration-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-0">
          <PixelTrail
            pixelSize={screenSize.lessThan(`md`) ? 48 : 80}
            fadeDuration={0}
            delay={1200}
            pixelClassName="rounded-full bg-[#ffa04f]"
          />
        </div>
        
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={200}
        />
        
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="z-10 text-4xl text-transparent duration-2000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
            Aaron Landy
          </h1>

          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="my-16 text-center animate-fade-in text-white">
            <h2 className="text-lg px-4">
              Founder of {" "}
              <Link
                target="_blank"
                href="https://closingwtf.com  "
                className="underline duration-500 hover:text-zinc-300 cursor-pointer"
              >
                Closing.WTF
              </Link>, ex-Uber, ex-founder x2.
              <br/>
              Passionate about building practical AI tools. Full stack cracked engineer.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
