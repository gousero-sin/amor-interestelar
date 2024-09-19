// components/FloatingWindow.js
import styled from "styled-components";
import ReactMarkdown from "react-markdown"; // Importando react-markdown

const Window = styled.div`
  background-color: #bf6341; /* Cor de fundo */
  border-radius: 20px;
  padding: 30px;
  max-width: 60%;
  width: 100%;
  max-height: 60%;
  overflow-y: auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease-in-out;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    max-width: 80%;
    max-height: 70%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 80%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FloatingWindow = ({ markdownText }) => (
  <Window>
    {/* Renderizando o Markdown como HTML */}
    <ReactMarkdown>{markdownText}</ReactMarkdown>
  </Window>
);

export default FloatingWindow;
