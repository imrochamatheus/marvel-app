import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  color: #ffffff;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LogoFragment = styled.div`
  color: white;
  position: relative;
  border-bottom: none;

  & span {
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 0.2rem;
    background-color: #ff0000;
    transform: translate(-0.5rem, -1rem);
  }

  @media (max-width: 768px) {
    &::before {
      transform: translate(-0.5rem, -0.7rem);
    }
  }

  @media (max-width: 576px) {
    &::before {
      transform: translate(-0.4rem, -0.7rem);
    }
  }
`;

export { StyledLogo, LogoFragment };
