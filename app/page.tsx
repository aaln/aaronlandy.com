"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";
import { useScreenSize } from "@/components/hooks/use-screen-size";
import { PixelTrail } from "@/components/ui/pixel-trail";

const navigation = [
  // { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const screenSize = useScreenSize();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
      {/* Animated gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* Dynamic gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl animate-pulse"
        style={{
          background: "radial-gradient(circle, #ffa04f 0%, transparent 70%)",
          animation: "pulse 8s ease-in-out infinite, float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #4f9fff 0%, transparent 70%)",
          animation: "pulse 10s ease-in-out infinite reverse, float 15s ease-in-out infinite reverse",
        }}
      />

      {/* Mouse-following spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 160, 79, 0.15), transparent 80%)`,
        }}
      />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Top navigation with glass effect */}
      <nav className={`fixed top-8 z-50 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-8 py-3 shadow-2xl">
          <ul className="flex items-center justify-center gap-8">
            {navigation.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-zinc-300 transition-all duration-300 hover:text-white"
                style={{
                  animation: `fade-in 0.8s ease-out ${idx * 0.1}s both`,
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      {/* Decorative lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px overflow-hidden">
        <div className={`h-full bg-gradient-to-r from-transparent via-orange-400/30 to-transparent transition-all duration-2000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} />
      </div>
      <div className="absolute bottom-1/3 left-0 right-0 h-px overflow-hidden">
        <div className={`h-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transition-all duration-2000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} />
      </div>

      {/* Interactive pixel trail */}
      <div className="absolute inset-0 z-20">
        <PixelTrail
          pixelSize={screenSize.lessThan(`md`) ? 48 : 80}
          fadeDuration={800}
          delay={0}
          pixelClassName="rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 shadow-lg shadow-orange-500/50"
        />
      </div>

      {/* Enhanced particles */}
      <Particles
        className="absolute inset-0 z-10"
        quantity={300}
        staticity={30}
        ease={60}
      />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4">
        {/* Name with advanced effects */}
        <div className="relative mb-8">
          <h1
            className={`relative z-10 text-5xl sm:text-7xl md:text-9xl font-display font-bold text-center transition-all duration-2000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{
              background: "linear-gradient(to right, #ffffff 20%, #ffa04f 40%, #ff6b35 60%, #ffa04f 80%, #ffffff 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 8s linear infinite",
              textShadow: "0 0 80px rgba(255, 160, 79, 0.5)",
            }}
          >
            Aaron Landy
          </h1>

          {/* Animated underline */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-all duration-1500 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              style={{
                animation: "shimmer 3s linear infinite",
              }}
            />
          </div>
        </div>

        {/* Description with stagger animation */}
        <div className={`max-w-2xl text-center space-y-4 mt-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="relative text-lg sm:text-xl text-zinc-300 leading-relaxed px-6 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg shadow-2xl">
              Founder of{" "}
              <Link
                target="_blank"
                href="https://closingwtf.com"
                className="relative inline-block group/link font-semibold text-white transition-all duration-300"
              >
                <span className="relative z-10 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Closing.WTF
                </span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute inset-0 bg-orange-500/10 rounded scale-0 group-hover/link:scale-110 transition-transform duration-300" />
              </Link>
              , ex-Uber, ex-founder x2.
            </p>
          </div>

          <div className={`group relative inline-block transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="relative text-base sm:text-lg text-zinc-400 px-6 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg shadow-2xl">
              Passionate about building practical AI tools. Full stack cracked engineer.
            </p>
          </div>
        </div>

        {/* Floating badges */}
        <div className={`flex flex-wrap gap-3 mt-8 justify-center transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {["AI", "Full Stack", "React", "Node.js", "TypeScript"].map((tech, idx) => (
            <div
              key={tech}
              className="group relative px-4 py-2 text-xs font-medium text-zinc-400 backdrop-blur-sm bg-white/5 border border-white/10 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:text-white hover:border-orange-400/50 hover:bg-white/10"
              style={{
                animation: `float 3s ease-in-out ${idx * 0.2}s infinite`,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:to-blue-500/20 transition-all duration-300" />
              <span className="relative z-10">{tech}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
              <div
                className="w-1 h-2 bg-white/60 rounded-full mx-auto"
                style={{
                  animation: "scroll 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
