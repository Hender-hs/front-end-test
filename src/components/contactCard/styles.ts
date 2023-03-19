import styled from "styled-components";

import { Link as _L } from "react-router-dom";

export const Link = styled(_L) `
  text-decoration: none;
  color: #000;
  font-family: inter;
  curso: pointer;
  padding-bottom: 5px;
`;

export const Div = styled.div `
  width: 300px;
  height: 80px;
  border: 1px solid #0a0a0a;
  display: flex;
  padding: 5px;
  @media (min-width: 768px) {
	width: 700px;
	padding: 25px;
  }
`;

export const Img = styled.img `
  width: 80px;
  border-radius: 100px;
  border: 1px solid #0a0a0a;
`;

export const H3 = styled.h3 `
  font-size: .8rem;
`;


export const H4 = styled.h4 `
  font-size: .7rem;
`;


export const H5 = styled.h5 `
  font-size: .6rem;
`;


export const Info = styled.div `
  padding-left: 15px;
  padding-top: 3px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
`;


