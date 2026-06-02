"use client";

import { useEffect, useRef } from "react";

// star properties
interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  opacitySpeed: number;
}

export function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // gen stars
    const stars: Star[] = [];
    const numStars = 200; // for density

    for (let i = 0; i < numStars; i++) {
      // 3 layers of parallax based on size
      const sizeLayer = Math.random();
      let radius, speed;
      
      if (sizeLayer > 0.9) {
        // large, near stars (fastest)
        radius = Math.random() * 1.5 + 1;
        speed = Math.random() * 0.3 + 0.2;
      } else if (sizeLayer > 0.6) {
        // medium stars
        radius = Math.random() * 1 + 0.5;
        speed = Math.random() * 0.15 + 0.05;
      } else {
        // small, distant stars (slowest)
        radius = Math.random() * 0.5 + 0.1;
        speed = Math.random() * 0.05 + 0.01;
      }

      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        speed,
        opacity: Math.random(),
        opacitySpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    // animation loop here
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // update position (parallax)
        star.y += star.speed;
        
        // loop back to top
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // update opacity (for twinkling them)
        star.opacity += star.opacitySpeed;
        if (star.opacity >= 1) {
          star.opacity = 1;
          star.opacitySpeed *= -1; 
        } else if (star.opacity <= 0.1) {
          star.opacity = 0.1;
          star.opacitySpeed *= -1; 
        }

        // draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] bg-[#050505] opacity-80"
      style={{ pointerEvents: "none" }}
    />
  );
}
