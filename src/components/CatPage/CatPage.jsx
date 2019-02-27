import React, { Component } from 'react';
import styled from 'styled-components';
import CatDescription from './CatDescription';
import { connect } from 'react-redux';
import CatGallery from './CatGallery';

const CatPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class CatPage extends Component {
  render() {
    return (
      <CatPageContainer>
        <CatDescription data={this.props.selectedCatData} />
        <CatGallery breed={this.props.selectedCatData.breeds[0].id} />
      </CatPageContainer>
    );
  }
}

const mapStateToProps = state => ({
  selectedCatData: state.selectedCatData
});

export default connect(mapStateToProps)(CatPage);
