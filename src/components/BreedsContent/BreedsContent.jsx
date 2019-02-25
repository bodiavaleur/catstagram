import React, { Component } from 'react';
import BreedPages from './BreedPages';
import BreedsList from './BreedsList';
import { getBreedsList } from '../../utils';
import { getBreedsImg } from '../../utils';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  loadBreedsList,
  loadBreedsImages,
  clearBreedsImages,
  selectCat
} from '../../redux/actionCreators';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

class BreedsContent extends Component {
  constructor(props) {
    super(props);

    this.fetchBreeds = this.fetchBreeds.bind(this);
    this.selectCard = this.selectCard.bind(this);
  }

  async fetchBreeds(page) {
    this.props.dispatch(loadBreedsList([]));
    this.props.dispatch(clearBreedsImages());

    await getBreedsList(page, data =>
      this.props.dispatch(loadBreedsList(data))
    );
    await this.props.breedsData.forEach(breed =>
      getBreedsImg(breed.id, img => {
        this.props.dispatch(loadBreedsImages(img));
      })
    );
  }

  selectCard(breed) {
    this.props.dispatch(selectCat(breed));
  }

  componentDidMount() {
    this.fetchBreeds(1);
  }

  render() {
    return (
      <FlexContainer>
        <BreedsList
          data={this.props.breedsData}
          images={this.props.breedsImages}
          onCardClick={this.select}
        />
        <BreedPages onPageClick={this.fetchBreeds} />
      </FlexContainer>
    );
  }
}

const mapStateToProps = state => ({
  breedsData: state.breedsData,
  breedsImages: state.breedsImages,
  selectedCatData: state.selectedCatData
});

export default connect(mapStateToProps)(BreedsContent);
