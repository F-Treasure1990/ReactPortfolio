import styled from "styled-components";

export const ProjectsContainer = styled.section`
  margin-top: 50px;
  transition: all ease 0.3s;
  height: fill-content;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin: clamp(0rem, -1.85rem + 9.23vw, 0.75rem);
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectsCardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: clamp(1rem, 0.88rem + 0.59vw, 1.25rem);

  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    grid-template-columns: repeat(auto-fit, minmax(298px, 1fr));
    justify-content: center;
  }
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin: 0 12px;
  }
`;
