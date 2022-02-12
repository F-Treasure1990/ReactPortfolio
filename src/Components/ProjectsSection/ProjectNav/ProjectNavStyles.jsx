import styled from "styled-components";
import { Box, Text, FlexCenter } from "styles/GlobalStyles.jsx";

export const ProjectNavContainer = styled(Box)`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px auto;

  padding: 0 clamp(0.75rem, 0.4rem + 1.76vw, 1.5rem);
  width: clamp(18.75rem, 12.87rem + 29.41vw, 31.25rem);
  ${({ theme }) => theme?.mediaQ.customDown(662)} {
    grid-row: 2/3;
  }
  & svg {
    ${({ theme }) => theme?.mediaQ.customDown(450)} {
      display: none;
    }
  }
`;

export const LeftSideContainer = styled.div`
  ${FlexCenter}
  cursor: pointer;
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RightSideContainer = styled.div`
  ${FlexCenter}
  cursor: pointer;
  & > svg {
    transform: rotate(180deg);
  }
`;

export const Label = styled(Text)`
  margin: 0 8px;
  text-transform: uppercase;
  font-size: clamp(0.75rem, 0.64rem + 0.53vw, 0.88rem);
  ${FlexCenter}
  text-align: center;
  user-select: none;
`;

export const Dot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 10px;
  background-color: ${({ theme, active }) =>
    active ? theme?.palette?.accent : theme?.palette?.secondary};
  margin: 0px clamp(0.25rem, 0.13rem + 0.59vw, 0.5rem);
  transform: scale(${({ active }) => active && "1.3"});
  transition: transform ease 0.4s;
`;
