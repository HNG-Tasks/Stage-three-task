import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import woods from '../assets/woods.jpg';
import hike from '../assets/hike.jpg';
import sea from '../assets/sea.jpg';
import mountain from '../assets/mountain.jpg';
import walk from '../assets/walk.jpg';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  height: 700px;
`;

const SliderContent = styled.div`
  display: flex;
  transition: transform 2s ease-in-out;
  transform: translateX(${(props) => props.translate}px);
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [woods, hike, sea, mountain, walk];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <SliderContainer>
      <SliderContent translate={-currentImage * 300}>
        {images.map((imageUrl, index) => (
          <SliderImage
            key={index}
            src={imageUrl}
            alt={`Hero ${index + 1}`}
          />
        ))}
        {images.map((imageUrl, index) => (
          <SliderImage
            key={index + images.length}
            src={imageUrl}
            alt={`Hero ${index + 1}`}
          />
        ))}
        <Overlay />
      </SliderContent>
    </SliderContainer>
  );
};

export default ImageSlider;




