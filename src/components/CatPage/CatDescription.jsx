import React from 'react';
import styled from 'styled-components';

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
`;

const Name = styled.h2`
  font-size: 2em;
  font-family: Amatic SC, Arial, Helvetica, sans-serif;
`;

const Description = styled.p`
  color: black;
  font-size: 1em;
  font-family: Quicksand, Arial, Helvetica, sans-serif;
  height: 80%;
  overflow: scroll;
`;

const Details = styled.div`
  display: flex;
  margin-left: 4vw;
  flex-direction: column;
  width: 30%;
  height: 50%;
  position: relative;
`;

const Hr = styled.hr`
  width: 50%;
  border: 0.5px solid #e8e8e8;
  margin: 2vh 0;
`;

const CatDescripton = props => {
  return (
    <Container>
      <Avatar />
      <Details>
        <Name>Cat</Name>
        <Hr />
        <Description>
          The Abyssinian is easy to care for, and a joy to have in your home.
          They’re affectionate cats and love both people and other animals.
        </Description>
      </Details>
    </Container>
  );
};

export default CatDescripton;
