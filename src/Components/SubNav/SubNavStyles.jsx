import styled from "styled-components";
import { Box, FlexCenter } from "../../styles/GlobalStyles";

export const SubNavContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px clamp(0.5rem, 0.08rem + 2.11vw, 1rem);
  margin-bottom: 50px;
  height: 74px;
  width: auto;
  background-color: transparent;

  ${({ theme }) => theme?.mediaQ.customDown(600)} {
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

export const SubNavColorPickerContainer = styled.div`
  flex-basis: 228px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme?.mediaQ.customDown(600)} {
    order: 3;
    flex-basis: 28px;
    width: 100%;
  }
`;

export const SubNavDP = styled.div`
  height: clamp(6.25rem, 5.2rem + 5.26vw, 7.5rem);
  /* min-width: clamp(6.25rem, 5.2rem + 5.26vw, 7.5rem); */
  padding: 6px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme?.palette?.accent};
  background: ${({ theme }) => theme?.palette?.secondary};
  margin: 0 20px;
  /* transition: all ease 0.3s; */
  ${({ theme }) => theme?.mediaQ.customDown(600)} {
    order: 1;
    margin-top: -30px;
  }
`;

export const SubNavSocialMediaContainer = styled.div`
  flex-basis: 228px;
  display: flex;
  justify-content: space-around;
  height: max-content;
  ${({ theme }) => theme?.mediaQ.customDown(600)} {
    order: 2;
    flex-basis: 42px;
    width: 100%;
    justify-content: center;
    margin: 24px 0;
  }
  > a {
    ${({ theme }) => theme?.mediaQ.customDown(600)} {
      :nth-child(2) {
        margin: 0 12px;
      }
    }
  }
`;

export const SubNavSocialMediaOption = styled.div`
  width: 50px;
  height: 42px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color ease 0.3s, border ease 0.2s;
  ${FlexCenter}
  :nth-child(2) {
    margin: 0 6px;
  }
  &:hover {
    border: 2px solid ${({ theme }) => theme?.palette?.accent};
    /* background-color: ${({ theme }) => theme?.palette?.main}; */
  }
  & > img {
    max-width: 20px;
  }
  ${({ theme }) => theme?.mediaQ.customDown(600)} {
    :nth-child(2) {
      margin: 0 24px;
    }
  }
`;
