import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 1rem;
  background-color: #000000;
  filter: drop-shadow(0px 3px 3px rgba(255, 0, 0, 0.53));

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderNav = styled.ul`
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: space-evenly;

  list-style: none;

  & li a {
    color: #ffffff;
    font-size: 1.8rem;
    text-decoration: none;
  }
`;

const HeaderAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffffff;
  font-size: 1.8rem;
  cursor: pointer;
`;

const NavItem = styled.li<{ active: boolean }>`
  color: ${({ active }) => (active ? "#ff0000" : "#ffffff")};
  font-size: 1.8rem;
  text-decoration: none;
  cursor: pointer;
`;

export { NavItem, HeaderNav, HeaderAvatar, StyledHeader };
