import { useEffect, useRef } from "react";

// Animated data packets, bar graph, pie chart, and line graph, all aligned and sized equally with axes (except pie)
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

    // --- Chart Area Sizing ---
    // All charts: 80x80 px (responsive minimum)
    const chartSize = Math.max(70, Math.min(90, width * 0.13, height * 0.13));
    const chartPadding = 18;

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
    let barBaseHeight = chartSize * 0.35;
    let barMaxHeight = chartSize * 0.8;

    // --- Pie Chart (above bar graph) ---
    const pieColors = [
      "rgba(168,85,247,0.7)",
      "rgba(236,72,153,0.6)",
      "rgba(59,130,246,0.6)",
      "rgba(251,191,36,0.5)",
      "rgba(34,197,94,0.5)",
    ];
    const pieRadius = chartSize * 0.38;

    // --- Line Graph (left of bar graph) ---
    const lineColors = [
      "rgba(59,130,246,0.7)",
      "rgba(236,72,153,0.6)",
    ];

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

      // --- Chart Placement ---
      // Bar: bottom right, Pie: above bar, Line: left of bar
      const barX = width - chartSize - chartPadding;
      const barY = height - chartSize - chartPadding;
      const pieX = barX + chartSize / 2;
      const pieY = barY - chartSize / 2 - chartPadding;
      const lineX = barX - chartSize - chartPadding;
      const lineY = barY;

      // --- Bar Graph (with axes) ---
      const barAreaW = chartSize;
      const barAreaH = chartSize;
      const barW = barAreaW / (barCount * 1.5);
      const barSpacing = barW * 0.5;
      // Axes
      ctx.save();
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(barX, barY + barAreaH);
      ctx.lineTo(barX, barY);
      ctx.lineTo(barX + barAreaW, barY + barAreaH);
      ctx.stroke();
      ctx.restore();
      // Bars
      for (let i = 0; i < barCount; i++) {
        const phase = t / 900 + i;
        const h =
          barBaseHeight +
          Math.abs(Math.sin(phase + i * 0.7)) * (barMaxHeight - barBaseHeight);
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(
          barX + i * (barW + barSpacing) + barW * 0.2,
          barY + barAreaH - h,
          barW,
          h,
          4
        );
        ctx.globalAlpha = 0.38;
        ctx.fillStyle = barColors[i % barColors.length];
        ctx.shadowColor = barColors[i % barColors.length];
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      // --- Pie Chart (above bar graph) ---
      let startAngle = t / 3000 % (2 * Math.PI);
      let total = 0;
      const pieData = [
        1.2 + Math.sin(t / 1200),
        0.8 + Math.cos(t / 900),
        1.1 + Math.sin(t / 1700),
        0.7 + Math.cos(t / 1400),
        0.9 + Math.sin(t / 2100),
      ];
      for (let i = 0; i < pieData.length; i++) total += Math.abs(pieData[i]);
      for (let i = 0; i < pieData.length; i++) {
        const value = Math.abs(pieData[i]);
        const angle = (value / total) * Math.PI * 2;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pieX, pieY);
        ctx.arc(pieX, pieY, pieRadius, startAngle, startAngle + angle);
        ctx.closePath();
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = pieColors[i % pieColors.length];
        ctx.shadowColor = pieColors[i % pieColors.length];
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        startAngle += angle;
      }
      // Pie chart outline
      ctx.save();
      ctx.beginPath();
      ctx.arc(pieX, pieY, pieRadius, 0, Math.PI * 2);
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // --- Line Graph (left of bar graph, with axes) ---
      const graphW = chartSize;
      const graphH = chartSize;
      // Axes
      ctx.save();
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(lineX, lineY + graphH);
      ctx.lineTo(lineX, lineY);
      ctx.lineTo(lineX + graphW, lineY + graphH);
      ctx.stroke();
      ctx.restore();
      // Generate two lines with moving points
      for (let l = 0; l < 2; l++) {
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const px = lineX + (i / 9) * graphW;
          const py =
            lineY +
            graphH / 2 +
            Math.sin(t / (900 + l * 400) + i + l * 1.2) * (graphH / 2.2) +
            (l === 1 ? 8 : 0);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.globalAlpha = 0.7;
        ctx.strokeStyle = lineColors[l];
        ctx.lineWidth = 2.5;
        ctx.shadowColor = lineColors[l];
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      }
      // Graph outline
      ctx.save();
      ctx.beginPath();
      ctx.rect(lineX, lineY, graphW, graphH);
      ctx.globalAlpha = 0.13;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

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