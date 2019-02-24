import React, { Component } from 'react';
import BreedPages from './BreedPages';
import BreedsList from './BreedsList';
import { getBreedsList } from '../../utils';
import { getBreedsImg } from '../../utils';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export default class BreedsContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breedsData: [],
      images: []
    };

    this.fetchBreedsData = this.fetchBreedsData.bind(this);
  }

  async fetchBreedsData(page) {
    this.setState({ breedsData: [], images: [] });
    await getBreedsList(page, data => this.setState({ breedsData: data }));
    this.state.breedsData.forEach(breed =>
      getBreedsImg(breed.id, img =>
        this.setState({ images: this.state.images.concat(img) })
      )
    );
  }

  componentDidMount() {
    this.fetchBreedsData(1);
  }

  render() {
    return (
      <FlexContainer>
        <BreedsList data={this.state.breedsData} images={this.state.images} />
        <BreedPages onPageClick={this.fetchBreedsData} />
      </FlexContainer>
    );
  }
}
