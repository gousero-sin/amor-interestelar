// components/Background.js
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0; /* Garantir que esteja atrás de todos os outros elementos */
`;

const VideoBackground = styled.video.attrs({
  "aria-hidden": "true", // Acessibilidade: esconder do leitor de tela
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Background = () => (
  <BackgroundContainer>
    <VideoBackground
      src="/background.mp4"
      type="video/mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  </BackgroundContainer>
);

export default Background;
