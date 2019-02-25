import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Card = styled.div`
  height: 65vh;
  width: 30vw;
  position: relative;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  margin: 1vw;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  box-shadow: 4px 10px 20px #aaa;
  cursor: pointer;
`;

const CardText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.7;
  color: white;
  font-size: 3.5vw;
  font-family: Amatic SC, Arial, Helvetica, sans-serif;
`;

const CardContainer = styled.div`
  display: flex;
`;

const BreedsList = props => {
  console.log(
    'props.data, props.images :',
    props.data,
    props.images,
    props.selectedCatData
  );

  

  const renderCard = () =>
    props.data.map((breed, idx) => {
      return (
        <Spring
          config={{ tension: 120, friction: 14 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {style => (
            <Link to="/catpage">
              <Card
                bg={props.images[idx].url}
                style={style}
                onClick={() => selectCard(props.images[idx].breeds[0])}>
                <CardText>{props.images[idx].breeds[0].name}</CardText>
              </Card>
            </Link>
          )}
        </Spring>
      );
    });
  return (
    <CardContainer>
      {props.data.length > 0 && props.images.length === props.data.length
        ? renderCard()
        : null}
    </CardContainer>
  );
};

export default BreedsList
