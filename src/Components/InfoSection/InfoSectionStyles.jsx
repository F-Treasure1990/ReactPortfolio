import styled from "styled-components";
import { Box } from "styles/GlobalStyles.jsx";

export const Container = styled(Box)`
  margin-top: 60px;
  margin-bottom: 20px;
  padding: clamp(0.75rem, -1rem + 4vw, 1.5rem);
  position: relative;
  width: auto;
  min-height: 584px;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

export const TopSectionContainer = styled.section`
  display: flex;
  min-width: 100%;
  height: max-content;
  justify-content: space-between;
  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-basis: 228px;
  ${({ theme }) => theme?.mediaQ.customDown(700)} {
    display: none;
  }
`;

export const MiddleSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;
`;

export const BottomSectionContainer = styled.section`
  font-size: clamp(0.88rem, 0.77rem + 0.53vw, 1rem);
  padding: 0 clamp(0.5rem, -0.97rem + 7.37vw, 2.25rem);
  height: auto;
`;
