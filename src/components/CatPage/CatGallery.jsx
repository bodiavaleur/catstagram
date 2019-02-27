import React, { Component } from 'react';
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

export default class CatGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentWillMount() {
    getBreedsImg(this.props.breed, img => this.setState({ images: img }), 100);
  }

  render() {
    const images = this.state.images;
    console.log('images :', images);
    return (
      <Gallery>
        {images.length > 0 ? images.map(url => <Image src={url.url} />) : null}
      </Gallery>
    );
  }
}
