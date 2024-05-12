import styled from "styled-components";

const DropdownContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-self: flex-start;

  cursor: pointer;
  color: red;
  padding: 1rem;
  position: relative;
  border-radius: 0.6rem;
  border: 1px solid red;
`;

const Label = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  cursor: pointer;
`;

const OptionsContainer = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: inherit;
`;

const Option = styled.li`
  padding: 0.5rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { DropdownContainer, Label, OptionsContainer, Option };
