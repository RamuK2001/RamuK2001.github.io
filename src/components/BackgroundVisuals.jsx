import { useEffect, useRef } from "react";

// Example: Animated gradient blobs (customize colors to match your theme)
export default function BackgroundVisuals() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Responsive resize
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", resize);
    resize();

    // Blob properties
    const blobs = [
      { x: 200, y: 200, r: 180, dx: 0.3, dy: 0.2, color: "rgba(168,85,247,0.18)" }, // purple
      { x: 600, y: 400, r: 120, dx: -0.2, dy: 0.25, color: "rgba(236,72,153,0.15)" }, // pink
      { x: 400, y: 700, r: 150, dx: 0.15, dy: -0.18, color: "rgba(59,130,246,0.12)" }, // blue
    ];

    function animate() {
      ctx.clearRect(0, 0, width, height);
      blobs.forEach((b) => {
        // Move blobs
        b.x += b.dx;
        b.y += b.dy;
        // Bounce
        if (b.x - b.r < 0 || b.x + b.r > width) b.dx *= -1;
        if (b.y - b.r < 0 || b.y + b.r > height) b.dy *= -1;
        // Draw
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
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
        opacity: 0.65,
      }}
      aria-hidden="true"
    />
  );
}