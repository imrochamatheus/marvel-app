import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  background-color: #000000;
  background-image: linear-gradient(
      89deg,
      #000000 40%,
      rgba(33, 33, 33, 0.54) 90%,
      rgba(128, 128, 128, 0) 100%
    ),
    url("/images/banner.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
`;

const HomeSection = styled.section`
  flex: 1;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1366px;
  position: relative;
  box-sizing: border-box;

  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  box-sizing: border-box;
`;

export { StyledMain, HomeSection, CardsContainer };
