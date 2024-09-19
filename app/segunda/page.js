// app/segunda/page.js
"use client";

import styled from "styled-components";
import Background from "../../components/Background";
import FloatingWindow from "../../components/FloatingWindow";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Tela2Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative; /* Para garantir que os elementos internos sejam posicionados corretamente */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0; /* Garantir que esteja acima do vídeo */
`;

const SegundaPage = () => {
  const [textoTela2, setTextoTela2] = useState(
    "Seu texto personalizado aqui...",
  );
  const router = useRouter();

  return (
    <>
      <Background />
      <Tela2Container>
        <FloatingWindow>{textoTela2}</FloatingWindow>
      </Tela2Container>
    </>
  );
};

export default SegundaPage;
