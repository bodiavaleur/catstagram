import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: 50%;
  width: 25vw;
  max-width: 300px;
  background: none;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  outline: none;

  ::placeholder {
    color: #e8e8e8;
  }
`;

const Search = () => {
  return <Input placeholder="Search" />;
};

export default Search;
