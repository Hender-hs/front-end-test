import styled from "styled-components";

export const DivBar = styled.div `
  border-radius: 50px;
  border: 1px solid #000;
  padding: 5px 20px;
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: 768px) {
	width: 60%;
	margin-top: 25px;
	margin-bottom: 55px;
  }
`;

export const Input = styled.input `
  border: none;
  padding: 10px;
  outline: none;
  width: 90%;
`;
