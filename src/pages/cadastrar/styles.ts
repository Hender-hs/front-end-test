import styled from "styled-components";

export const PageBody = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0;

  @media (min-width: 768px) {
	padding: 60px 0;
  }
`;

export const Form = styled.form `
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
	width: 500px;
  }
`;

export const Div = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 10px;
`;

export const Label = styled.label `
`;

export const Input = styled.input `
  width: 100%;
  height: 80%;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 1.0rem;
  background: #f3f3f3;
  padding-left: 15px;
  font-family: Inter;
  font-weight: 200;
`;

export const Select = styled.select `
  background: #f3f3f3;
  width: 50%;
  height: 20px;
  border: none;
  outline: none;
`;

export const Option = styled.option `
  background: #f3f3f3;
  border: none;
  outline: none;
`;

export const Button = styled.button `
  border: none;
  width: 100px;
  height: 30px;
  margin: 0 auto;
  border-radius: 10px;
  cursor: pointer;
`;

