import React from 'react';
import styled from 'styled-components';
import { getBreedsImg } from '../../utils';

const Gallery = styled.section`
  display: flex;
  width: 50vw;
  flex-flow: row wrap;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    width: 90vw;
  }
`;

const Image = styled.img`
  height: 15vw;
  width: 15vw;
  margin: 5px;

  @media only screen and (max-width: 1024px) {
    width: 25vw;
    height: 25vw;
  }
`;

const CatGallery = props => {
  return (
    <Gallery>
      {/* Test */}
      <Image src="https://via.placeholder.com/150" />
      <Image src="https://via.placeholder.com/150" />
      <Image src="https://via.placeholder.com/150" />
      <Image src="https://via.placeholder.com/150" />
      <Image src="https://via.placeholder.com/150" />
      <Image src="https://via.placeholder.com/150" />
      <Image src="https://via.placeholder.com/150" />
      <Image src="https://via.placeholder.com/150" />
      <Image src="https://via.placeholder.com/150" />
    </Gallery>
  );
};

export default CatGallery;
