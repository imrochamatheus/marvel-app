import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  z-index: 2;
  padding: 1rem;
  position: relative;
  box-sizing: border-box;
  background-color: #000000;
  filter: drop-shadow(0px 3px 3px rgba(255, 0, 0, 0.53));

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const HeaderNav = styled.ul<{ isopen?: string }>`
  flex: 1;
  gap: 1rem;
  display: flex;
  justify-content: space-evenly;

  list-style: none;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: ${(props) => (props.isopen ? "flex" : "none")};
    flex-direction: column;

    left: 0;
    top: 100%;
    margin: 0;
    width: 100%;
    padding: 1rem;
    position: absolute;
    background-color: #000000;
  }
`;

const HeaderAvatar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  color: #ffffff;
  cursor: pointer;
  font-size: 1.8rem;
`;

const HamburguerMenuButton = styled.div`
  cursor: pointer;
  display: none;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    margin: 3px 0;
    background-color: #ffffff;
  }
`;

const NavItem = styled.li<{ opacity: number }>`
  opacity: ${(props) => props.opacity};
  cursor: pointer;
  font-size: 1.8rem;
  text-decoration: none;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export { NavItem, HeaderNav, HeaderAvatar, StyledHeader, HamburguerMenuButton };
