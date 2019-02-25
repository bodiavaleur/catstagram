import React, { Component } from 'react';
import styled from 'styled-components';
import CatDescription from './CatDescription';
import { connect } from 'react-redux';

const CatPageContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

class CatPage extends Component {
  render() {
    return (
      <CatPageContainer>
        <CatDescription data={this.props.selectedCatData} />
      </CatPageContainer>
    );
  }
}

const mapStateToProps = state => ({
  selectedCatData: state.selectedCatData
});

export default connect(mapStateToProps)(CatPage);
