// components/PhotoSequence.js
"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";

// Estilização para cada foto
const Photo = styled.img`
  position: absolute;
  width: 300px; /* Ajuste o tamanho conforme necessário */
  height: auto;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  z-index: ${(props) => props.zIndex};
  transform: rotate(${(props) => props.rotation}deg);
`;

const PhotoSequence = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [photoPositions, setPhotoPositions] = useState([]);

  useEffect(() => {
    // Verifica se estamos no ambiente do navegador
    if (typeof window !== "undefined") {
      const positions = images.map(() => {
        const top = Math.floor(Math.random() * (window.innerHeight - 300));
        const left = Math.floor(Math.random() * (window.innerWidth - 300));
        const rotation = Math.floor(Math.random() * 30) - 15;
        return { top, left, rotation };
      });
      setPhotoPositions(positions);
    }
  }, [images]);

  useEffect(() => {
    // Exibir as fotos uma a uma a cada 4 segundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < images.length - 1) {
          return prevIndex + 1;
        } else {
          // Se chegou ao final, pode reiniciar ou parar o intervalo
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 2500); // 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.slice(0, currentIndex + 1).map((src, index) => (
        <Photo
          key={index}
          src={src}
          alt={`Foto ${index + 1}`}
          top={photoPositions[index]?.top || 0}
          left={photoPositions[index]?.left || 0}
          rotation={photoPositions[index]?.rotation || 0}
          isVisible={index <= currentIndex}
          zIndex={index}
        />
      ))}
    </>
  );
};

export default PhotoSequence;
