import { useEffect, useRef } from "react";

// Animated data packets across the screen and a subtle, transparent bar graph at bottom right
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

    // --- Data Packets (across the screen) ---
    function createPacket() {
      const vertical = Math.random() > 0.5;
      const length = 40 + Math.random() * 60;
      const speed = 0.7 + Math.random() * 1.5;
      const color = [
        "rgba(168,85,247,0.18)",
        "rgba(236,72,153,0.13)",
        "rgba(59,130,246,0.13)",
        "rgba(34,197,94,0.10)",
      ][Math.floor(Math.random() * 4)];
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
          width: 3 + Math.random() * 2,
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
          width: 3 + Math.random() * 2,
        };
      }
    }
    let packets = [];
    for (let i = 0; i < 28; i++) {
      packets.push(createPacket());
    }

    // --- Bar Graph (bottom right) ---
    const barCount = 7;
    const barColors = [
      "rgba(168,85,247,0.45)",
      "rgba(236,72,153,0.38)",
      "rgba(59,130,246,0.38)",
      "rgba(34,197,94,0.32)",
      "rgba(251,191,36,0.32)",
      "rgba(244,63,94,0.32)",
      "rgba(20,184,166,0.32)",
    ];
    let barBaseHeight = 60;
    let barMaxHeight = 120;

    function animate(t) {
      ctx.clearRect(0, 0, width, height);

      // Subtle gradient background
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "rgba(168,85,247,0.07)");
      grad.addColorStop(0.5, "rgba(236,72,153,0.05)");
      grad.addColorStop(1, "rgba(59,130,246,0.07)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // --- Data Packets (across the screen) ---
      for (let i = 0; i < packets.length; i++) {
        const p = packets[i];
        ctx.save();
        ctx.beginPath();
        if (p.vertical) {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.length);
        } else {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.length, p.y);
        }
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.width;
        ctx.globalAlpha = 0.8;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
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
      }

      // --- Bar Graph (bottom right, more transparent) ---
      const barAreaW = Math.min(260, width * 0.45);
      const barAreaH = Math.min(120, height * 0.18);
      const barW = barAreaW / (barCount * 1.5);
      const barSpacing = barW * 0.5;
      const baseX = width - barAreaW - 32;
      const baseY = height - barAreaH - 24;

      for (let i = 0; i < barCount; i++) {
        const phase = t / 900 + i;
        const h =
          barBaseHeight +
          Math.abs(Math.sin(phase + i * 0.7)) * (barMaxHeight - barBaseHeight);
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(
          baseX + i * (barW + barSpacing),
          baseY + barAreaH - h,
          barW,
          h,
          6
        );
        ctx.globalAlpha = 0.38; // More transparent
        ctx.fillStyle = barColors[i % barColors.length];
        ctx.shadowColor = barColors[i % barColors.length];
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    }
    animate(0);

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