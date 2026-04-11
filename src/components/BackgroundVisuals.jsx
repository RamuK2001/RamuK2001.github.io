import { useEffect, useRef } from "react";

// Animated "data packets" moving across the background, emphasizing data engineering
export default function BackgroundVisuals() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", resize);
    resize();

    // Generate data packets (rectangles/lines) with random start/end points and colors
    const packetColors = [
      "rgba(168,85,247,0.25)", // purple
      "rgba(236,72,153,0.18)", // pink
      "rgba(59,130,246,0.18)", // blue
      "rgba(34,197,94,0.15)",  // green
    ];

    function createPacket() {
      const vertical = Math.random() > 0.5;
      const length = 60 + Math.random() * 80;
      const speed = 0.7 + Math.random() * 1.2;
      const color = packetColors[Math.floor(Math.random() * packetColors.length)];
      if (vertical) {
        // Vertical packet (top to bottom)
        return {
          x: Math.random() * width,
          y: -length,
          dx: 0,
          dy: speed,
          length,
          vertical,
          color,
          width: 4 + Math.random() * 3,
        };
      } else {
        // Horizontal packet (left to right)
        return {
          x: -length,
          y: Math.random() * height,
          dx: speed,
          dy: 0,
          length,
          vertical,
          color,
          width: 4 + Math.random() * 3,
        };
      }
    }

    let packets = [];
    for (let i = 0; i < 22; i++) {
      packets.push(createPacket());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw gradient overlay for subtle effect
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "rgba(168,85,247,0.08)");
      grad.addColorStop(0.5, "rgba(236,72,153,0.07)");
      grad.addColorStop(1, "rgba(59,130,246,0.08)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      packets.forEach((p, i) => {
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.width;
        ctx.beginPath();
        if (p.vertical) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.length);
        } else {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.length, p.y);
        }
        ctx.stroke();
        ctx.restore();

        p.x += p.dx;
        p.y += p.dy;

        // Reset packet if out of bounds
        if (
          (p.vertical && p.y > height + p.length) ||
          (!p.vertical && p.x > width + p.length)
        ) {
          packets[i] = createPacket();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.7,
      }}
      aria-hidden="true"
    />
  );
}