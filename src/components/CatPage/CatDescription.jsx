import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';

const Container = styled.section`
  grid-area: 1 / 1 / 5 span / 12 span;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
`;

const Avatar = styled.div`
  height: 150px;
  width: 150px;
  border: 1px solid #e8e8e8;
  border-radius: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
`;

const Name = styled.h2`
  font-size: 2em;
  font-family: Amatic SC, Arial, Helvetica, sans-serif;
`;

const Description = styled.p`
  color: black;
  font-size: 1em;
  font-family: Quicksand, Arial, Helvetica, sans-serif;
`;

const Details = styled.div`
  display: flex;
  margin-left: 4vw;
  flex-direction: column;
  width: 50%;
  height: 50%;
  position: relative;
`;

const Hr = styled.hr`
  width: 50%;
  border: 0.5px solid #e8e8e8;
  margin: 2vh 0;
`;

const CatDescripton = props => {
  console.log('props.data', props.data);
  const data = props.data.breeds[0];
  const image = props.data.url;

  return (
    <Spring delay={100} from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {style => (
        <Container style={style}>
          <Avatar bg={image} />
          <Details>
            <Name>{data.name}</Name>
            <Hr />
            <Description>{data.description}</Description>
          </Details>
        </Container>
      )}
    </Spring>
  );
};

export default CatDescripton;
