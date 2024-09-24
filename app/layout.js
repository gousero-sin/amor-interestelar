// app/layout.js
"use client";

import { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Preloader from "@/components/Preloader";

const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html, #__next {
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
    background-color: #00000; /* Cor de fundo bege claro */
  }
`;

const Audio = styled.audio`
  display: none; /* Ocultar controles de áudio */
`;

const Controls = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ControlButton = styled.button`
  padding: 10px 20px;
  background-color: rgba(245, 245, 220, 0.8);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #333333;
  font-size: 1rem;
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: rgba(245, 245, 220, 1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function RootLayout({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Inicialmente pausado

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((e) => {
          console.error("Erro ao reproduzir a música:", e);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <html lang="pt-BR">
      <body style={{ backgroundColor: "#000000", margin: 0, padding: 0 }}>
        <head>
          <title>Amor Interestelar</title>
        </head>
        <body>
          <GlobalStyle />
          {children}
          <Preloader />
          <Audio ref={audioRef} src="/musica.mp3" loop />
          <Controls>
            <ControlButton onClick={togglePlay}>
              {isPlaying ? "Pausar Música" : "Reproduzir Música"}
            </ControlButton>
          </Controls>
        </body>
      </body>
    </html>
  );
}
