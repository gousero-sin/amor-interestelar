// app/quarta/page.js
"use client";

import styled from "styled-components";
import PhotoSequence from "../../components/PhotoSequence";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #000;
  overflow: hidden;
`;

const QuartaPage = () => {
  const images = [
    "/images/image_1.jpg",
    "/images/image_2.jpg",
    "/images/image_3.jpg",
    "/images/image_4.jpg",
    "/images/image_5.jpg",
    "/images/image_6.jpg",
    "/images/image_7.jpg",
    "/images/image_8.jpg",
    "/images/image_9.jpg",
    "/images/image_10.jpg",
  ];

  return (
    <PageContainer>
      <PhotoSequence images={images} />
    </PageContainer>
  );
};

export default QuartaPage;
