import styled from "styled-components";

const StyledPreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 439px;
  max-width: 289px;
  border-radius: 1.8rem;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  color: #ffffff;
  background-color: #ff0000;
  background: linear-gradient(180deg, #ff0000 0%, rgba(128, 0, 0, 0.3) 100%);
  border-radius: 1.8rem;
  max-height: 234px;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

const CardTitle = styled.h1`
  font-size: 1.3rem;
  line-height: 1.3rem;
  padding: 0;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 0.8rem;
  line-height: 1.3rem;
  margin: 0;
`;

const CardFooter = styled.div`
  width: 100%;

  flex: 1;
  display: flex;
  justify-content: center;

  & > a {
    margin: 0;
    color: #ffffff;
    font-size: 1.3rem;
    line-height: 1.3rem;
    text-decoration: none;
    align-self: flex-end;
  }
`;

export {
  StyledPreviewCard,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
};
