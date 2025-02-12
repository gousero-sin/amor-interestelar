// app/terceira/page.js
"use client";

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/navigation"; // Importar o useRouter
import ParticlesBackground from "../../components/ParticlesBackground"; // Ajuste o caminho conforme necessário

// Animação para a mensagem (somente fadeIn)
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Estilização do Container principal
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000; /* Fundo preto */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

// Estilização da Mensagem
const Message = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out forwards;
  opacity: 0;
  z-index: 1;
`;

const TerceiraPage = () => {
  const [showParticles, setShowParticles] = useState(false);
  const router = useRouter(); // Inicializa o roteador

  useEffect(() => {
    // Define um temporizador para exibir as partículas após 1 segundo
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 1000); // 1 segundo

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        // Navega para a quarta página
        router.push("/quarta");
      }
    };

    // Adiciona o listener quando o componente é montado
    window.addEventListener("keydown", handleKeyDown);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <Container>
      <Message>Feliz Aniversário</Message>
      {showParticles && <ParticlesBackground />}
    </Container>
  );
};

export default TerceiraPage;
