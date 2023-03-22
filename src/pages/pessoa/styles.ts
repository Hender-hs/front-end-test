import styled from "styled-components";

export const DivMain = styled.div `
  margin: 15px auto;
  padding: 20px;
  background: rgb(251 251 251);
  width: 65%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
	width: 35%;
	padding: 80px 0;
  }
`;

export const Img = styled.img `
  width: 80px;
  border-radius: 100px;
  border: 1px solid #0a0a0a;
`;

export const H3 = styled.h3 `
  font-size: 1.4rem;
`;


export const H4 = styled.h4 `
  font-size: .8rem;
`;


export const H5 = styled.h5 `
  font-size: .6rem;
`;


export const Info = styled.div `
  padding-top: 3px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  text-align: center;
`;

export const ButtonSection = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
	flex-direction: row;
	gap: 40px;
  }
`;

export const ButtonDel = styled.button `
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  background: rgb(245 0 0);
`;

export const ButtonAdd = styled(ButtonDel) `
  background: rgb(48, 147, 77);
`;

export const ButtonEdit = styled.button `
  border: none;
  border-radius: 5px;
  font-size: .5rem;
  padding: 3px;
  cursor: pointer;
  color: #fff;
  background: rgb(48 64 255);
`;


export const Form = styled.form `
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding-top: 20px;
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
`;

