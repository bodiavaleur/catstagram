import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoBlock = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5vw;
`;

const LogoImage = styled.img`
  width: 32px;
  max-width: 48px;
  margin-right: 1vw;
`;

const LogoText = styled.h1`
  font-size: 32px;
  font-family: Caveat;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Logo = () => {
  return (
    <StyledLink to="/">
      <LogoBlock>
        <LogoImage src="./img/logo.svg" alt="logo" />
        <LogoText>Catstagram</LogoText>
      </LogoBlock>
    </StyledLink>
  );
};

export default Logo;
