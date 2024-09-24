// components/Preloader.js
"use client";

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000; /* Fundo preto */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Mantém o preloader acima de todos os outros elementos */
  animation: ${(props) =>
    props.isVisible ? "none" : `${fadeOut} 0.5s forwards`};
`;

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Remove o preloader quando a página estiver completamente carregada
    const handleLoad = () => {
      setTimeout(() => setIsVisible(false), 500); // Aguarda 500ms para a transição
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return isVisible ? <PreloaderContainer isVisible={isVisible} /> : null;
};

export default Preloader;
