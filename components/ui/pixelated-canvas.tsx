"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface PixelatedCanvasProps {
  src: string;
  width?: number;
  height?: number;
  cellSize?: number;
  dotScale?: number;
  shape?: "circle" | "square";
  backgroundColor?: string;
  grayscale?: boolean;
  className?: string;
  responsive?: boolean;
  dropoutStrength?: number;
  interactive?: boolean;
  distortionStrength?: number;
  distortionRadius?: number;
  distortionMode?: "repel" | "attract" | "swirl";
  followSpeed?: number;
  sampleAverage?: boolean;
  tintColor?: string;
  tintStrength?: number;
  maxFps?: number;
  objectFit?: "cover" | "contain" | "fill" | "none";
  jitterStrength?: number;
  jitterSpeed?: number;
  fadeOnLeave?: boolean;
  fadeSpeed?: number;
}

export function PixelatedCanvas({
  src,
  width = 400,
  height = 500,
  cellSize = 3,
  dotScale = 0.9,
  shape = "square",
  backgroundColor = "#000000",
  grayscale = false,
  className,
  responsive = false,
  dropoutStrength = 0.4,
  interactive = true,
  distortionStrength = 3,
  distortionRadius = 80,
  distortionMode = "swirl",
  followSpeed = 0.2,
  sampleAverage = true,
  tintColor = "#FFFFFF",
  tintStrength = 0.2,
  maxFps = 60,
  objectFit = "cover",
  jitterStrength = 4,
  jitterSpeed = 4,
  fadeOnLeave = true,
  fadeSpeed = 0.1,
}: PixelatedCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const targetMouse = useRef({ x: -1000, y: -1000 });
  const animationFrameId = useRef<number | undefined>(undefined);
  const lastFrameTime = useRef(0);

  useEffect(() => {
    const img = new Image();
    // Only set crossOrigin for external URLs, not for local paths
    if (src.startsWith("http://") || src.startsWith("https://")) {
      img.crossOrigin = "anonymous";
    }
    img.onload = () => setImage(img);
    img.onerror = () => {
      console.error("Failed to load image:", src);
    };
    img.src = src;
  }, [src]);

  useEffect(() => {
    if (!image || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const cols = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);

    const draw = (timestamp: number) => {
      const elapsed = timestamp - lastFrameTime.current;
      const frameInterval = 1000 / maxFps;

      if (elapsed < frameInterval) {
        animationFrameId.current = requestAnimationFrame(draw);
        return;
      }

      lastFrameTime.current = timestamp;

      // Smooth follow
      mousePos.current.x += (targetMouse.current.x - mousePos.current.x) * followSpeed;
      mousePos.current.y += (targetMouse.current.y - mousePos.current.y) * followSpeed;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      // Draw image to sample from
      ctx.save();
      ctx.globalAlpha = 0;

      // Object fit logic
      let sx = 0,
        sy = 0,
        sw = image.width,
        sh = image.height;
      let dx = 0,
        dy = 0,
        dw = width,
        dh = height;

      if (objectFit === "cover") {
        const scale = Math.max(width / image.width, height / image.height);
        sw = width / scale;
        sh = height / scale;
        sx = (image.width - sw) / 2;
        sy = (image.height - sh) / 2;
      } else if (objectFit === "contain") {
        const scale = Math.min(width / image.width, height / image.height);
        dw = image.width * scale;
        dh = image.height * scale;
        dx = (width - dw) / 2;
        dy = (height - dh) / 2;
      }

      ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
      ctx.restore();

      const imageData = ctx.getImageData(0, 0, width * dpr, height * dpr);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellSize;
          const y = row * cellSize;

          let r = 0,
            g = 0,
            b = 0,
            count = 0;

          if (sampleAverage) {
            for (let py = 0; py < cellSize; py++) {
              for (let px = 0; px < cellSize; px++) {
                const idx = ((y + py) * width * dpr + (x + px)) * 4 * dpr;
                r += imageData.data[idx];
                g += imageData.data[idx + 1];
                b += imageData.data[idx + 2];
                count++;
              }
            }
            r /= count;
            g /= count;
            b /= count;
          } else {
            const centerX = x + cellSize / 2;
            const centerY = y + cellSize / 2;
            const idx = (Math.floor(centerY) * width * dpr + Math.floor(centerX)) * 4 * dpr;
            r = imageData.data[idx];
            g = imageData.data[idx + 1];
            b = imageData.data[idx + 2];
          }

          // Grayscale
          if (grayscale) {
            const gray = 0.299 * r + 0.587 * g + 0.114 * b;
            r = g = b = gray;
          }

          // Tint
          if (tintStrength > 0) {
            const tintRgb = hexToRgb(tintColor);
            r = r * (1 - tintStrength) + tintRgb.r * tintStrength;
            g = g * (1 - tintStrength) + tintRgb.g * tintStrength;
            b = b * (1 - tintStrength) + tintRgb.b * tintStrength;
          }

          // Dropout
          const brightness = (r + g + b) / 3;
          if (Math.random() < dropoutStrength && brightness < 128) continue;

          let offsetX = 0;
          let offsetY = 0;

          if (interactive) {
            const dx = x + cellSize / 2 - mousePos.current.x;
            const dy = y + cellSize / 2 - mousePos.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < distortionRadius) {
              const force = 1 - distance / distortionRadius;
              const jitter = Math.sin(timestamp * jitterSpeed * 0.001 + col + row) * jitterStrength;

              if (distortionMode === "repel") {
                offsetX = (dx / distance) * force * distortionStrength + jitter;
                offsetY = (dy / distance) * force * distortionStrength + jitter;
              } else if (distortionMode === "attract") {
                offsetX = -(dx / distance) * force * distortionStrength + jitter;
                offsetY = -(dy / distance) * force * distortionStrength + jitter;
              } else if (distortionMode === "swirl") {
                const angle = Math.atan2(dy, dx);
                const swirl = force * distortionStrength;
                offsetX = Math.cos(angle + swirl) * force * 10 + jitter;
                offsetY = Math.sin(angle + swirl) * force * 10 + jitter;
              }
            }
          }

          const dotX = x + cellSize / 2 + offsetX;
          const dotY = y + cellSize / 2 + offsetY;
          const dotSize = cellSize * dotScale;

          ctx.fillStyle = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

          if (shape === "circle") {
            ctx.beginPath();
            ctx.arc(dotX, dotY, dotSize / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillRect(dotX - dotSize / 2, dotY - dotSize / 2, dotSize, dotSize);
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(draw);
    };

    animationFrameId.current = requestAnimationFrame(draw);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.current = {
        x: ((e.clientX - rect.left) / rect.width) * width,
        y: ((e.clientY - rect.top) / rect.height) * height,
      };
    };

    const handleMouseLeave = () => {
      if (fadeOnLeave) {
        const fadeOut = () => {
          targetMouse.current.x += (width / 2 - targetMouse.current.x) * fadeSpeed;
          targetMouse.current.y += (height / 2 - targetMouse.current.y) * fadeSpeed;
          const distance = Math.sqrt(
            Math.pow(targetMouse.current.x - width / 2, 2) + Math.pow(targetMouse.current.y - height / 2, 2)
          );
          if (distance > 1) requestAnimationFrame(fadeOut);
        };
        fadeOut();
      }
    };

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [
    image,
    width,
    height,
    cellSize,
    dotScale,
    shape,
    backgroundColor,
    grayscale,
    dropoutStrength,
    interactive,
    distortionStrength,
    distortionRadius,
    distortionMode,
    followSpeed,
    sampleAverage,
    tintColor,
    tintStrength,
    maxFps,
    objectFit,
    jitterStrength,
    jitterSpeed,
    fadeOnLeave,
    fadeSpeed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={cn("", className)}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}
