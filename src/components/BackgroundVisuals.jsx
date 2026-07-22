import { useEffect, useRef } from "react";

const chartPadding = 24;
const navBarHeight = 64;

const packetColors = [
  "rgba(168,85,247,0.18)",
  "rgba(236,72,153,0.13)",
  "rgba(59,130,246,0.13)",
  "rgba(34,197,94,0.10)",
];

const barColors = [
  "rgba(168,85,247,0.45)",
  "rgba(236,72,153,0.38)",
  "rgba(59,130,246,0.38)",
  "rgba(34,197,94,0.32)",
  "rgba(251,191,36,0.32)",
  "rgba(244,63,94,0.32)",
  "rgba(20,184,166,0.32)",
];

const pieColors = [
  "rgba(168,85,247,0.7)",
  "rgba(236,72,153,0.6)",
  "rgba(59,130,246,0.6)",
  "rgba(251,191,36,0.5)",
  "rgba(34,197,94,0.5)",
];

const lineColors = ["rgba(59,130,246,0.7)", "rgba(236,72,153,0.6)"];
const dotColors = [
  "rgba(34,197,94,0.45)",
  "rgba(244,63,94,0.38)",
  "rgba(168,85,247,0.38)",
];
const hBarColors = [
  "rgba(251,191,36,0.32)",
  "rgba(59,130,246,0.32)",
  "rgba(236,72,153,0.32)",
];

export default function BackgroundVisuals() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let chartSize = 110;
    let isCompact = width < 768;
    let prefersReducedMotion = reducedMotionQuery.matches;
    let isPageVisible = !document.hidden;
    let scrollY = window.scrollY || 0;
    let scrollProgress = 0;
    let easedScrollY = scrollY;
    let gradient = null;
    let lastFrameTime = 0;
    let packets = [];

    const getTargetFps = () => (isCompact ? 24 : 36);
    const getPacketCount = () => (isCompact ? 12 : 22);
    const getGlow = (desktopValue) => (isCompact ? 0 : desktopValue);

    function createPacket() {
      const vertical = Math.random() > 0.5;
      const length = 34 + Math.random() * (isCompact ? 42 : 58);
      const speed = (0.6 + Math.random() * 1.2) * (isCompact ? 0.75 : 1);
      const color = packetColors[Math.floor(Math.random() * packetColors.length)];

      return vertical
        ? {
            x: Math.random() * width,
            y: -length,
            dx: 0,
            dy: speed,
            length,
            vertical,
            color,
            width: 2.5 + Math.random() * 1.5,
          }
        : {
            x: -length,
            y: Math.random() * height,
            dx: speed,
            dy: 0,
            length,
            vertical,
            color,
            width: 2.5 + Math.random() * 1.5,
          };
    }

    function syncPackets() {
      const targetCount = getPacketCount();

      if (packets.length > targetCount) {
        packets = packets.slice(0, targetCount);
        return;
      }

      while (packets.length < targetCount) {
        packets.push(createPacket());
      }
    }

    function updateLayoutMetrics() {
      chartSize = Math.max(
        isCompact ? 80 : 95,
        Math.min(isCompact ? 108 : 130, width * 0.18, height * 0.18)
      );
      syncPackets();
    }

    function updateGradient() {
      gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(168,85,247,0.07)");
      gradient.addColorStop(0.5, "rgba(236,72,153,0.05)");
      gradient.addColorStop(1, "rgba(59,130,246,0.07)");
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      isCompact = width < 768;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, isCompact ? 1 : 1.5);
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      updateLayoutMetrics();
      updateGradient();
      drawFrame(performance.now());
    }

    function updateScrollMetrics() {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      scrollY = window.scrollY || doc.scrollTop || 0;
      scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
    }

    function drawScrollDataRail(t) {
      const railTop = navBarHeight + chartPadding;
      const railHeight = Math.max(160, height - railTop - chartPadding);
      const railInset = isCompact ? 18 : 32;
      const railXs = isCompact ? [width - railInset] : [railInset, width - railInset];
      const scrollMotion = prefersReducedMotion ? scrollY : easedScrollY;
      const packetsPerLane = isCompact ? 4 : 6;

      for (let lane = 0; lane < railXs.length; lane++) {
        const baseX = railXs[lane];
        const laneDirection = lane % 2 === 0 ? 1 : -1;
        const laneColor =
          lane % 2 === 0 ? "rgba(59,130,246,0.24)" : "rgba(236,72,153,0.2)";

        ctx.beginPath();
        ctx.setLineDash([5, 18]);
        ctx.lineDashOffset = prefersReducedMotion
          ? 0
          : -(t * 0.025 + scrollMotion * 0.18 * laneDirection);
        ctx.moveTo(baseX, railTop);
        ctx.lineTo(baseX, railTop + railHeight);
        ctx.globalAlpha = isCompact ? 0.1 : 0.15;
        ctx.strokeStyle = laneColor;
        ctx.lineWidth = 1.25;
        ctx.stroke();
        ctx.setLineDash([]);

        for (let i = 0; i < packetsPerLane; i++) {
          const y =
            railTop +
            ((i * (railHeight / Math.max(1, packetsPerLane - 1)) +
              scrollMotion * (0.05 + lane * 0.025) +
              (prefersReducedMotion ? 0 : t * 0.018)) %
              railHeight);
          const x = baseX + Math.sin(t / 1200 + i * 0.9 + lane) * (isCompact ? 3 : 6);
          const packetSize = 4 + Math.sin(t / 900 + i) * 1.1;

          ctx.beginPath();
          ctx.roundRect(
            x - packetSize / 2,
            y - packetSize / 2,
            packetSize,
            packetSize,
            1.5
          );
          ctx.globalAlpha = isCompact ? 0.24 : 0.34;
          ctx.fillStyle =
            i % 3 === 0
              ? "rgba(168,85,247,0.5)"
              : i % 3 === 1
              ? "rgba(59,130,246,0.46)"
              : "rgba(20,184,166,0.38)";
          ctx.shadowColor = ctx.fillStyle;
          ctx.shadowBlur = getGlow(4);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      const progressX = isCompact ? width - railInset : railInset;
      const progressY = railTop + railHeight * scrollProgress;
      ctx.beginPath();
      ctx.roundRect(progressX - 7, progressY - 2, 14, 4, 2);
      ctx.globalAlpha = 0.38;
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.shadowColor = "rgba(168,85,247,0.4)";
      ctx.shadowBlur = getGlow(5);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function drawAxes(x, y, size) {
      ctx.beginPath();
      ctx.globalAlpha = 0.42;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.moveTo(x, y + size);
      ctx.lineTo(x, y);
      ctx.moveTo(x, y + size);
      ctx.lineTo(x + size, y + size);
      ctx.stroke();
    }

    function drawFrame(t) {
      easedScrollY = prefersReducedMotion
        ? scrollY
        : easedScrollY + (scrollY - easedScrollY) * 0.08;

      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      drawScrollDataRail(t);

      for (let i = 0; i < packets.length; i++) {
        const p = packets[i];
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
        ctx.globalAlpha = 0.75;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = getGlow(5);
        ctx.stroke();
        ctx.shadowBlur = 0;

        if (!prefersReducedMotion) {
          p.x += p.dx;
          p.y += p.dy;
        }

        if (
          (p.vertical && p.y > height + p.length) ||
          (!p.vertical && p.x > width + p.length)
        ) {
          packets[i] = createPacket();
        }
      }

      const scrollDriftX = prefersReducedMotion
        ? 0
        : Math.sin(easedScrollY * 0.003) * (isCompact ? 4 : 12);
      const scrollDriftY = prefersReducedMotion
        ? 0
        : Math.cos(easedScrollY * 0.0025) * (isCompact ? 3 : 9);
      const topScrollDriftX = prefersReducedMotion
        ? 0
        : Math.sin(easedScrollY * 0.0024) * (isCompact ? 3 : 10);
      const topScrollDriftY = prefersReducedMotion
        ? 0
        : Math.cos(easedScrollY * 0.002) * (isCompact ? 3 : 8);

      const barX = width - chartSize - chartPadding - scrollDriftX;
      const barY = height - chartSize - chartPadding + scrollDriftY;
      const lineX = barX - chartSize - chartPadding;
      const lineY = barY;
      const topStartX = chartPadding + topScrollDriftX;
      const topStartY = navBarHeight + chartPadding + topScrollDriftY;
      const chartGapY = chartSize + chartPadding * 0.7;
      const chartGapX = chartSize + chartPadding * 0.7;

      const areaX = topStartX;
      const areaY = topStartY;
      drawAxes(areaX, areaY, chartSize);

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
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = "rgba(168,85,247,0.22)";
      ctx.shadowColor = "rgba(168,85,247,0.22)";
      ctx.shadowBlur = getGlow(5);
      ctx.fill();
      ctx.shadowBlur = 0;

      const dotX = barX;
      const dotY = barY - chartSize - chartPadding;
      drawAxes(dotX, dotY, chartSize);

      for (let i = 0; i < (isCompact ? 8 : 12); i++) {
        const px = dotX + (Math.abs(Math.sin(t / 900 + i * 1.2)) * 0.8 + 0.1) * chartSize;
        const py = dotY + (Math.abs(Math.cos(t / 1100 + i * 1.3)) * 0.8 + 0.1) * chartSize;
        ctx.beginPath();
        ctx.arc(px, py, 4 + Math.abs(Math.sin(t / 700 + i)) * 1.6, 0, Math.PI * 2);
        ctx.globalAlpha = 0.65;
        ctx.fillStyle = dotColors[i % dotColors.length];
        ctx.shadowColor = dotColors[i % dotColors.length];
        ctx.shadowBlur = getGlow(4);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      const hBarX = topStartX + chartGapX;
      const hBarY = topStartY;
      drawAxes(hBarX, hBarY, chartSize);

      const hBarCount = 5;
      const hBarH = chartSize / (hBarCount * 1.5);
      const hBarSpacing = hBarH * 0.5;
      for (let i = 0; i < hBarCount; i++) {
        const w =
          chartSize * 0.3 +
          Math.abs(Math.sin(t / 1100 + i * 1.7)) * (chartSize * 0.6);
        ctx.beginPath();
        ctx.roundRect(
          hBarX + 2,
          hBarY + i * (hBarH + hBarSpacing) + hBarH * 0.2,
          w,
          hBarH,
          4
        );
        ctx.globalAlpha = 0.36;
        ctx.fillStyle = hBarColors[i % hBarColors.length];
        ctx.shadowColor = hBarColors[i % hBarColors.length];
        ctx.shadowBlur = getGlow(5);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      const barAreaW = chartSize;
      const barAreaH = chartSize;
      const barW = barAreaW / (7 * 1.5);
      const barSpacing = barW * 0.5;
      const barBaseHeight = chartSize * 0.35;
      const barMaxHeight = chartSize * 0.8;
      drawAxes(barX, barY, chartSize);

      for (let i = 0; i < 7; i++) {
        const h =
          barBaseHeight +
          Math.abs(Math.sin(t / 900 + i * 1.7)) * (barMaxHeight - barBaseHeight);
        ctx.beginPath();
        ctx.roundRect(
          barX + i * (barW + barSpacing) + barW * 0.2,
          barY + barAreaH - h,
          barW,
          h,
          4
        );
        ctx.globalAlpha = 0.36;
        ctx.fillStyle = barColors[i % barColors.length];
        ctx.shadowColor = barColors[i % barColors.length];
        ctx.shadowBlur = getGlow(5);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      let startAngle = (t / 3000) % (2 * Math.PI);
      const pieX = topStartX + chartSize / 2;
      const pieY = topStartY + chartGapY + chartSize / 2;
      const pieRadius = chartSize * 0.38;
      const pieData = [
        1.2 + Math.sin(t / 1200),
        0.8 + Math.cos(t / 900),
        1.1 + Math.sin(t / 1700),
        0.7 + Math.cos(t / 1400),
        0.9 + Math.sin(t / 2100),
      ];
      const pieTotal = pieData.reduce((sum, value) => sum + Math.abs(value), 0);

      for (let i = 0; i < pieData.length; i++) {
        const value = Math.abs(pieData[i]);
        const angle = (value / pieTotal) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(pieX, pieY);
        ctx.arc(pieX, pieY, pieRadius, startAngle, startAngle + angle);
        ctx.closePath();
        ctx.globalAlpha = 0.66;
        ctx.fillStyle = pieColors[i % pieColors.length];
        ctx.shadowColor = pieColors[i % pieColors.length];
        ctx.shadowBlur = getGlow(5);
        ctx.fill();
        ctx.shadowBlur = 0;
        startAngle += angle;
      }

      ctx.beginPath();
      ctx.arc(pieX, pieY, pieRadius, 0, Math.PI * 2);
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();

      drawAxes(lineX, lineY, chartSize);
      for (let l = 0; l < 2; l++) {
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const px = lineX + (i / 9) * chartSize;
          const py =
            lineY +
            chartSize / 2 +
            Math.sin(t / (900 + l * 400) + i + l * 1.2) * (chartSize / 2.2) +
            (l === 1 ? 8 : 0);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.globalAlpha = 0.66;
        ctx.strokeStyle = lineColors[l];
        ctx.lineWidth = 2.5;
        ctx.shadowColor = lineColors[l];
        ctx.shadowBlur = getGlow(5);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      ctx.beginPath();
      ctx.rect(lineX, lineY, chartSize, chartSize);
      ctx.globalAlpha = 0.13;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    function requestLoop() {
      if (!animationFrameId && !prefersReducedMotion && isPageVisible) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    function animate(t) {
      animationFrameId = 0;

      if (!isPageVisible || prefersReducedMotion) {
        return;
      }

      const frameInterval = 1000 / getTargetFps();
      if (t - lastFrameTime >= frameInterval) {
        lastFrameTime = t;
        drawFrame(t);
      }

      requestLoop();
    }

    function updateReducedMotion() {
      prefersReducedMotion = reducedMotionQuery.matches;

      if (prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
        drawFrame(performance.now());
        return;
      }

      requestLoop();
    }

    function updateVisibility() {
      isPageVisible = !document.hidden;

      if (!isPageVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
        return;
      }

      updateScrollMetrics();
      drawFrame(performance.now());
      requestLoop();
    }

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateScrollMetrics, { passive: true });
    document.addEventListener("visibilitychange", updateVisibility);

    if (reducedMotionQuery.addEventListener) {
      reducedMotionQuery.addEventListener("change", updateReducedMotion);
    } else {
      reducedMotionQuery.addListener(updateReducedMotion);
    }

    updateScrollMetrics();
    resize();
    requestLoop();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScrollMetrics);
      document.removeEventListener("visibilitychange", updateVisibility);

      if (reducedMotionQuery.removeEventListener) {
        reducedMotionQuery.removeEventListener("change", updateReducedMotion);
      } else {
        reducedMotionQuery.removeListener(updateReducedMotion);
      }

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full pointer-events-none"
      style={{
        opacity: 0.7,
      }}
      aria-hidden="true"
    />
  );
}
