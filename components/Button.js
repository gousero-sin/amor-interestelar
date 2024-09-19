// components/Button.js
import styled from "styled-components";
import { useRouter } from "next/navigation";

// Definindo os estilos do botão
const StyledButton = styled.button`
  position: relative;
  padding: 25px 70px;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;

  width: 200px;
  overflow: hidden;
  border-radius: 40px; /* Bordas arredondadas */
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 17px;
    font-family: Arial, sans-serif;
    letter-spacing: 8px;
    z-index: 1;
    text-align: center;
  }

  .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 200px;
    height: 200px;
    background: #ff4500;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  .liquid::after,
  .liquid::before {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #000;
  }

  .liquid::before {
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
    animation: animate 5s linear infinite;
  }

  .liquid::after {
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: animate 10s linear infinite;
  }

  &:hover .liquid {
    top: -120px;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;

const Button = () => {
  const router = useRouter();

  // Função que navega para a página "segunda"
  const handleClick = () => {
    router.push("/segunda");
  };

  return (
    <StyledButton onClick={handleClick}>
      <span>Continuar</span>
      <div className="liquid"></div>
    </StyledButton>
  );
};

export default Button;
