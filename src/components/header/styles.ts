import styled from "styled-components";
import { Link as _L } from "react-router-dom";

export const Div = styled.div `
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3px 20px;
  gap: 10px;

  @media (min-width: 768px) {
	gap: 15px;
  }

  .selected {
	border-bottom: 2px solid #787878;
	curso: pointer;
  }
`;

export const Link = styled(_L) `
  text-decoration: none;
  color: #000;
  font-family: inter;
  curso: pointer;
  padding-bottom: 5px;
  font-size: .8rem;

  @media (min-width: 768px) {
	font-size: .6rem;
  }
`;

export const Button = styled.button `
  text-decoration: none;
  border: none;
  curso: pointer !important;
  background-color: transparent;
`;
