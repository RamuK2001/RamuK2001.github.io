import { useEffect, useRef } from "react";

// Animated data packets, 3 charts at bottom right, 3 charts (area, scatter, horizontal bar) at top left, all equally sized with axes (no diagonal lines)
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
    // All charts: 110x110 px (responsive minimum, increased size)
    const chartSize = Math.max(90, Math.min(130, width * 0.18, height * 0.18));
    const chartPadding = 24;
    const navBarHeight = 64; // px, adjust if your navbar is taller/shorter

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

    // --- Pie Chart (bottom right) ---
    const pieColors = [
      "rgba(168,85,247,0.7)",
      "rgba(236,72,153,0.6)",
      "rgba(59,130,246,0.6)",
      "rgba(251,191,36,0.5)",
      "rgba(34,197,94,0.5)",
    ];
    const pieRadius = chartSize * 0.38;

    // --- Line Graph (bottom right) ---
    const lineColors = [
      "rgba(59,130,246,0.7)",
      "rgba(236,72,153,0.6)",
    ];

    // --- Area Chart (top left) ---
    const areaColors = [
      "rgba(168,85,247,0.22)",
      "rgba(236,72,153,0.18)",
    ];

    // --- Scatter Plot (top left, below area chart) ---
    const dotColors = [
      "rgba(34,197,94,0.45)",
      "rgba(244,63,94,0.38)",
      "rgba(168,85,247,0.38)",
    ];

    // --- Horizontal Bar Chart (top left, right of area chart) ---
    const hBarColors = [
      "rgba(251,191,36,0.32)",
      "rgba(59,130,246,0.32)",
      "rgba(236,72,153,0.32)",
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
      // Bottom right: bar, scatter (above), line (left)
      // Top left: area, pie (below area), horizontal bar (right of area)
      const barX = width - chartSize - chartPadding;
      const barY = height - chartSize - chartPadding;
      // Original pie chart position (bottom right, above bar)
      const pieXBottom = barX + chartSize / 2;
      const pieYBottom = barY - chartSize / 2 - chartPadding;
      const lineX = barX - chartSize - chartPadding;
      const lineY = barY;

      // Top left charts (fixed below navbar)
      const topStartX = chartPadding;
      const topStartY = navBarHeight + chartPadding;
      const chartGapY = chartSize + chartPadding * 0.7;
      const chartGapX = chartSize + chartPadding * 0.7;
      // Original scatter plot position (top left, below area)
      const dotXTop = topStartX;
      const dotYTop = topStartY + chartGapY;

      // --- Area Chart (top left, with axes, no diagonal) ---
      const areaX = topStartX;
      const areaY = topStartY;
      ctx.save();
      // Axes (no diagonal)
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(areaX, areaY + chartSize);
      ctx.lineTo(areaX, areaY);
      ctx.moveTo(areaX, areaY + chartSize);
      ctx.lineTo(areaX + chartSize, areaY + chartSize);
      ctx.stroke();
      ctx.restore();
      // Area
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(areaX, areaY + chartSize);
      for (let i = 0; i <= 10; i++) {
        const px = areaX + (i / 10) * chartSize;
        const py =
          areaY +
          chartSize / 2 +
          Math.sin(t / 1100 + i * 0.7) * (chartSize / 3.2) -
          Math.abs(Math.cos(t / 1300 + i)) * 8;
        ctx.lineTo(px, py);
      }
      ctx.lineTo(areaX + chartSize, areaY + chartSize);
      ctx.closePath();
      ctx.globalAlpha = 0.32;
      ctx.fillStyle = areaColors[0];
      ctx.shadowColor = areaColors[0];
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();

      // --- Pie Chart (bottom right, above bar graph) ---
      let startAnglePie = t / 3000 % (2 * Math.PI);
      let totalPie = 0;
      const pieDataTop = [1.2 + Math.sin(t / 1200), 0.8 + Math.cos(t / 900), 1.1 + Math.sin(t / 1700), 0.7 + Math.cos(t / 1400), 0.9 + Math.sin(t / 2100)];
      for (let i = 0; i < pieDataTop.length; i++) totalPie += Math.abs(pieDataTop[i]);
      for (let i = 0; i < pieDataTop.length; i++) {
        const value = Math.abs(pieDataTop[i]);
        const angle = (value / totalPie) * Math.PI * 2;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(dotXTop, dotYTop);
        ctx.arc(dotXTop, dotYTop, pieRadius, startAnglePie, startAnglePie + angle);
        ctx.closePath();
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = pieColors[i % pieColors.length];
        ctx.shadowColor = pieColors[i % pieColors.length];
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        startAnglePie += angle;
      }
      // Pie chart outline
      ctx.save();
      ctx.beginPath();
      ctx.arc(dotXTop, dotYTop, pieRadius, 0, Math.PI * 2);
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // --- Scatter Plot (bottom right, above bar graph, with axes, no diagonal) ---
      // Now at pieXBottom, pieYBottom
      // Axes (no diagonal)
      ctx.save();
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pieXBottom, pieYBottom + chartSize);
      ctx.lineTo(pieXBottom, pieYBottom);
      ctx.moveTo(pieXBottom, pieYBottom + chartSize);
      ctx.lineTo(pieXBottom + chartSize, pieYBottom + chartSize);
      ctx.stroke();
      ctx.restore();
      // Dots
      for (let i = 0; i < 12; i++) {
        const px = pieXBottom + (Math.abs(Math.sin(t / 900 + i * 1.2)) * 0.8 + 0.1) * chartSize;
        const py = pieYBottom + (Math.abs(Math.cos(t / 1100 + i * 1.3)) * 0.8 + 0.1) * chartSize;
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, 4 + Math.abs(Math.sin(t / 700 + i)) * 2, 0, Math.PI * 2);
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = dotColors[i % dotColors.length];
        ctx.shadowColor = dotColors[i % dotColors.length];
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      // --- Scatter Plot (bottom right, above bar graph, with axes, no diagonal) ---
      // Now at scatterX, scatterY
      // Axes (no diagonal)
      ctx.save();
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(scatterX, scatterY + chartSize);
      ctx.lineTo(scatterX, scatterY);
      ctx.moveTo(scatterX, scatterY + chartSize);
      ctx.lineTo(scatterX + chartSize, scatterY + chartSize);
      ctx.stroke();
      ctx.restore();
      // Dots
      for (let i = 0; i < 12; i++) {
        const px = scatterX + (Math.abs(Math.sin(t / 900 + i * 1.2)) * 0.8 + 0.1) * chartSize;
        const py = scatterY + (Math.abs(Math.cos(t / 1100 + i * 1.3)) * 0.8 + 0.1) * chartSize;
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, 4 + Math.abs(Math.sin(t / 700 + i)) * 2, 0, Math.PI * 2);
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = dotColors[i % dotColors.length];
        ctx.shadowColor = dotColors[i % dotColors.length];
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      // --- Horizontal Bar Chart (top left, right of area chart, with axes, no diagonal) ---
      const hBarX = topStartX + chartGapX;
      const hBarY = topStartY;
      // Axes (no diagonal)
      ctx.save();
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(hBarX, hBarY);
      ctx.lineTo(hBarX, hBarY + chartSize);
      ctx.moveTo(hBarX, hBarY + chartSize);
      ctx.lineTo(hBarX + chartSize, hBarY + chartSize);
      ctx.stroke();
      ctx.restore();
      // Bars
      const hBarCount = 5;
      const hBarH = chartSize / (hBarCount * 1.5);
      const hBarSpacing = hBarH * 0.5;
      for (let i = 0; i < hBarCount; i++) {
        const phase = t / 1100 + i;
        const w =
          chartSize * 0.3 +
          Math.abs(Math.sin(phase + i * 0.7)) * (chartSize * 0.6);
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(
          hBarX + 2,
          hBarY + i * (hBarH + hBarSpacing) + hBarH * 0.2,
          w,
          hBarH,
          4
        );
        ctx.globalAlpha = 0.38;
        ctx.fillStyle = hBarColors[i % hBarColors.length];
        ctx.shadowColor = hBarColors[i % hBarColors.length];
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }

      // --- Bar Graph (with axes, bottom right, no diagonal) ---
      const barAreaW = chartSize;
      const barAreaH = chartSize;
      const barW = barAreaW / (barCount * 1.5);
      const barSpacing = barW * 0.5;
      // Axes (no diagonal)
      ctx.save();
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(barX, barY + barAreaH);
      ctx.lineTo(barX, barY);
      ctx.moveTo(barX, barY + barAreaH);
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

      // --- Pie Chart (above bar graph, bottom right) ---
      let startAngle = t / 3000 % (2 * Math.PI);
      let total = 0;
      const pieData = [1.2 + Math.sin(t / 1200), 0.8 + Math.cos(t / 900), 1.1 + Math.sin(t / 1700), 0.7 + Math.cos(t / 1400), 0.9 + Math.sin(t / 2100)];
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

      // --- Line Graph (left of bar graph, with axes, bottom right, no diagonal) ---
      const graphW = chartSize;
      const graphH = chartSize;
      // Axes (no diagonal)
      ctx.save();
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(lineX, lineY + graphH);
      ctx.lineTo(lineX, lineY);
      ctx.moveTo(lineX, lineY + graphH);
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