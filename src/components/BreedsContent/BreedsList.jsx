import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';

const Card = styled.div`
  height: 65vh;
  width: 30vw;
  position: relative;
  border: 3px solid white;
  border-radius: 20px;
  margin: 1vw;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  box-shadow: 4px 10px 20px #aaa;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    width: 90vw;
    height: 30vh;
  }
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
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5vh;
`;

const BreedsList = props => {
  const renderCard = () =>
    props.data.map((breed, idx) => {
      return (
        <Spring
          key={idx}
          config={{ tension: 120, friction: 14 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {style => (
            <Link to="/catpage">
              <Card
                bg={props.images[idx].url}
                style={style}
                onClick={() => props.onCardClick(props.images[idx])}>
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

export default BreedsList;
