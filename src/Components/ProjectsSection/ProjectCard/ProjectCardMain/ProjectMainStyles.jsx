import styled from "styled-components";
import { Text } from "styles/GlobalStyles";

export const ProjectCardMainContainer = styled.section`
  padding: clamp(0.75rem, 0.12rem + 3.16vw, 1.5rem);
  border-top: 2px solid ${({ theme }) => theme?.palette?.accent};
  display: flex;
  flex-direction: column;
`;

export const ProjectCardTitle = styled(Text)`
  text-transform: capitalize;

  font-size: clamp(1rem, 0.79rem + 1.05vw, 1.25rem);
  letter-spacing: 0.8px;
  line-height: 26px;
  max-height: 320px;
`;

export const ProjectCardSubTitle = styled(Text)`
  text-transform: capitalize;
  font-size: 14px;
  letter-spacing: 0.8px;
  margin: 4px 0;
  font-weight: 300;
  color: ${({ theme }) => theme?.palette?.accent};
  transition: colo ease 0.3s;
`;

export const ProjectDescriptionContainer = styled.div`
  letter-spacing: 0.5px;
  font-weight: 300;
  margin-top: 12px;
  font-size: clamp(0.75rem, 0.64rem + 0.53vw, 0.88rem);
  overflow: hidden;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    display: none;
  }
`;
