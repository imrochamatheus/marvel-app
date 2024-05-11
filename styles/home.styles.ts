import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  background-color: #000000;
`;

const HomeSection = styled.section`
  flex: 1;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #000000;

  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export { StyledMain, HomeSection };
