import styled from "styled-components";

export const NotDiv = styled.div `
  position: absolute;
  bottom: 0;
  width: calc(100vw - 30px);
  background: ${(props: any) => props.type};
  height: 15px;
  color: white;
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: .8rem;

  @media (min-width: 768px) {
	font-size: .7rem;
  }
`;
