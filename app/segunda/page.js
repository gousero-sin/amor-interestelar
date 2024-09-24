// app/segunda/page.js
"use client";

import { useEffect } from "react";
import styled from "styled-components";
import Background from "../../components/Background";
import FloatingWindow from "../../components/FloatingWindow";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        // Navega para a terceira página
        router.push("/terceira");
      }
    };

    // Adiciona o listener quando o componente é montado
    window.addEventListener("keydown", handleKeyDown);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  const markdownContent = `
  # Oi Benka!

  Essa lembrancinha simples é só pra lembrar de uma data que não é simples,
  uma data que pra você é **muito importante**. Já é o **4º aniversário** que eu presencio,
  e quero presenciar **muitos mais**!!!

  Eu te amo demais e te acho uma pessoa **incrível**, **estudiosa**, **companheira**,
  **fiel**, **linda** — _mais linda ainda_ — **muito linda mesmo** e **amorosa**.

  Queria poder te dar mais do que isso, nessa data que é **muito mais que especial**,
  mas nós sabemos que não será possível _kkkk_.

  Então, **meus parabéns** minha benkeza perfeita!
  Você merece o **mundo**, e o que eu puder, eu vou te dar!!!

  O nosso amor é:
  **INTERESTELAR**
  `;

  return (
    <>
      <Background />
      <Tela2Container>
        <FloatingWindow>{markdownContent}</FloatingWindow>
      </Tela2Container>
    </>
  );
};

export default SegundaPage;
