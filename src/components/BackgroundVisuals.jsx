import { useEffect, useRef } from "react";

// "Hardcore" data engineering visualization: animated nodes, connections, and flowing data pulses
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

    // Generate nodes (representing data sources, sinks, and processors)
    const nodeCount = width < 600 ? 8 : 16;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width * 0.9 + width * 0.05,
        y: Math.random() * height * 0.7 + height * 0.15,
        r: 16 + Math.random() * 10,
        color: [
          "rgba(168,85,247,0.85)", // purple
          "rgba(236,72,153,0.85)", // pink
          "rgba(59,130,246,0.85)", // blue
          "rgba(34,197,94,0.85)",  // green
        ][Math.floor(Math.random() * 4)],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Generate connections (edges) between nodes
    const edges = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (Math.random() < 0.23) {
          edges.push({
            from: i,
            to: j,
            color: "rgba(168,85,247,0.18)",
            pulseOffset: Math.random() * 1000,
          });
        }
      }
    }

    // Data pulses moving along edges
    function drawPulse(x1, y1, x2, y2, t, color) {
      const pulseCount = 2;
      for (let i = 0; i < pulseCount; i++) {
        const progress = ((t / 1200 + i / pulseCount) % 1);
        const px = x1 + (x2 - x1) * progress;
        const py = y1 + (y2 - y1) * progress;
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, 6 + 4 * Math.sin(t / 400 + i), 0, Math.PI * 2);
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }
    }

    function animate(t) {
      ctx.clearRect(0, 0, width, height);

      // Subtle gradient background
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "rgba(168,85,247,0.09)");
      grad.addColorStop(0.5, "rgba(236,72,153,0.07)");
      grad.addColorStop(1, "rgba(59,130,246,0.09)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw edges (connections)
      edges.forEach((edge) => {
        const n1 = nodes[edge.from];
        const n2 = nodes[edge.to];
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle = "rgba(168,85,247,0.18)";
        ctx.lineWidth = 3;
        ctx.shadowColor = "rgba(168,85,247,0.18)";
        ctx.shadowBlur = 8;
        ctx.globalAlpha = 0.7;
        ctx.stroke();
        ctx.restore();

        // Draw animated data pulses
        drawPulse(n1.x, n1.y, n2.x, n2.y, t + edge.pulseOffset, n1.color);
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(
          node.x,
          node.y,
          node.r + Math.sin(t / 600 + node.pulse) * 2,
          0,
          Math.PI * 2
        );
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.restore();

        // Draw node "core"
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 0.45, 0, Math.PI * 2);
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = "#fff";
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

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