import styled from "styled-components";
import { FlexCenter } from "styles/GlobalStyles";

export const AvatarRing = styled.div`
  /* height: 170px; */
  height: clamp(8.75rem, 7.87rem + 4.41vw, 10.63rem);
  width: clamp(8.75rem, 7.87rem + 4.41vw, 10.63rem);
  padding: 8px;
  min-height: 159px;
  min-width: 159px;
  /* aspect-ratio: 1/1; */
  /* width: 170px; */
  border-radius: 50%;
  border: 3px solid;
  border-color: ${({ theme }) => theme?.palette?.accent};
  background: ${({ theme }) => theme?.palette?.main};
  margin: calc(clamp(4rem, 3.75rem + 4vw, 6.25rem) * -1) 24px 0px 24px;
  ${FlexCenter}
  transition: border-color ease 0.3s;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    height: 156px;
    width: 156px;
  }
`;
