import styled, { css } from "styled-components";
import { Text } from "styles/GlobalStyles";

const FlexbaisTextCenter = css`
  flex-basis: 100%;
  text-align: center;
`;
export const Name = styled(Text)`
  font-size: clamp(1.75rem, 1.16rem + 2.94vw, 3rem);
  transition: all ease;
  ${FlexbaisTextCenter}
`;

export const City = styled(Text)`
  font-size: clamp(0.88rem, 0.7rem + 0.88vw, 1.25rem);
  transition: all ease;
  font-weight: 300;
  margin-top: 10px;
  ${FlexbaisTextCenter}
  & > span {
    color: white;
  }
  /* ${({ theme }) => theme?.mediaQ.customDown(450)} {
    font-weight: 300;
  } */
`;

export const EmploymentStatus = styled(Text)`
  margin-top: 4px;
  ${FlexbaisTextCenter}
  font-size: clamp(0.88rem, 0.7rem + 0.88vw, 1.25rem);
  font-weight: 300;
  > * {
    transition: all ease 0.3s;
  }

  & span:nth-child(1) {
    color: ${({ theme }) => theme?.palette?.highlight};
  }
  & span:nth-child(2) {
    color: ${({ theme }) => theme?.palette?.accent};
  }
  & span:nth-child(3) {
    color: #f1fa8c;
  }
`;

export const Freelancer = styled(Text)`
  font-size: clamp(0.88rem, 0.7rem + 0.88vw, 1.25rem);
  margin-top: 4px;
  font-weight: 300;
  ${FlexbaisTextCenter}
  & > span {
    color: white;
  }
`;

export const Divide = styled.div`
  height: 1px;
  width: 90%;
  background-color: ${({ theme }) => theme?.palette?.secondary};
  margin-top: clamp(2.13rem, 1.6rem + 2.63vw, 2.75rem);
  margin-bottom: clamp(0.88rem, 0.35rem + 2.63vw, 1.5rem);
`;
