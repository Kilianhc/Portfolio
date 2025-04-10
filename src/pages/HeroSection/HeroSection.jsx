import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import useVisibility from "../../Hooks/useVisibility";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const [ref, isVisible] = useVisibility(0.3);
  const canvasRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const letters = "01";
    const fontSize = 25;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.009)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "blue";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      ref={ref}
      id="hero"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "blue",
        textAlign: "center",
        backgroundColor: "black",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <Box sx={{ zIndex: 2 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontFamily: "monospace",
            textShadow: "0 0 10px white",
            color:"white",
            animation: isVisible ? "fadeIn 5s ease-out" : "none",
          }}
        >
          Kilian Hernández
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "monospace",
            textShadow: "0 0 5px white",
            color:"white",
            animation: isVisible ? "fadeIn 5s ease-out" : "none",
          }}
        >
          {t("hero.subtitle")}
        </Typography>
      </Box>

      {/* Optional: fadeIn keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;
