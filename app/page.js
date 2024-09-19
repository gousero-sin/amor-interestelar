// app/page.js
"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";
import Background from "../components/Background";
import Button from "../components/Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative; /* Para garantir que os elementos internos sejam posicionados corretamente */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0; /* Garantir que esteja acima do vídeo */
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 4rem;
  margin-bottom: 50px;
  text-align: center;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  animation: fadeInDown 1s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const HomePage = () => {
  const router = useRouter();

  const handleContinuar = () => {
    router.push("/segunda");
  };

  return (
    <>
      <Background />
      <Container>
        <Title>AMOR INTERESTELAR</Title>
        <Button onClick={handleContinuar}>Continuar</Button>
      </Container>
    </>
  );
};

export default HomePage;
