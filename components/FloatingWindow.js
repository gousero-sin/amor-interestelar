// components/FloatingWindow.js
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Importando o plugin

const Window = styled.div`
  background-color: rgba(191, 99, 65, 0.8); /* Cor de fundo com opacidade */
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

  /* Estilos adicionais para markdown */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  ul,
  ol {
    color: white;
    font-size: 1.2rem;
    margin-left: 20px;
    margin-bottom: 1rem;
  }

  a {
    color: #ffd700; /* Dourado para links */
    text-decoration: underline;
  }

  strong {
    color: #ffd700; /* Cor para o negrito */
    font-weight: bold;
  }

  em {
    color: #ffa500; /* Cor para o itálico */
    font-style: italic;
  }

  blockquote {
    border-left: 4px solid #ffd700;
    padding-left: 16px;
    color: #e0e0e0;
    font-style: italic;
    margin-bottom: 1rem;
  }

  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 4px;
    border-radius: 4px;
    color: #ff4500;
  }
`;

const FloatingWindow = ({ children }) => (
  <Window>
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
  </Window>
);

export default FloatingWindow;
