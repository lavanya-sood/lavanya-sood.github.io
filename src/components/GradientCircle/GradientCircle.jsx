import React, { useState, useEffect } from "react";
import "./GradientCircle.css";

function GradientCircle() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSmoothPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
    }, 16); // Update at ~60 FPS

    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div className="gradient-container">
      <div
        className="gradient-circle"
        style={{
          top: smoothPosition.y,
          left: smoothPosition.x,
        }}
      ></div>
    </div>
  );
}

export default GradientCircle;
