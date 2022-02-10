import { motion } from "framer-motion";
import styled, { css } from "styled-components";
motion:;
export const HomepageContainer = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: space-between;
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: ${({ solid, theme }) => (solid ? theme?.palette?.secondary : theme?.palette?.accent)};
  background-color: ${({ solid, theme }) => (solid ? theme?.palette?.accent : "transparent")};
  border: ${({ solid, theme }) =>
    solid ? "2px solid transparent" : `2px solid ${theme?.palette?.accent}`};
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  ${FlexCenter}
  column-gap: 12px;
`;

export const Box = styled.div`
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  border-radius: ${({ rad }) => rad ?? 6}px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.16);
  background-color: ${({ theme }) => theme?.palette?.main};
  border-radius: 6px;
`;

export const Text = styled.p`
  color: ${({ theme, color }) => theme?.palette?.[color] ?? "red"};
  transition: color ease 0.3s;
  /* font-size: ${({ theme, font }) => theme?.typography?.[font]?.fontSize ?? "16"}px; */
  /* font-weight: ${({ theme, font }) => theme?.typography?.[font]?.fontWeight ?? "400"}; */
`;
export const TextPara = styled.p`
  color: ${({ theme, color }) => theme?.palette?.[color] ?? "red"};
  font-size: ${({ theme, font }) => theme?.typography?.[font]?.fontSize ?? "16"}px;
  font-weight: ${({ theme, font }) => theme?.typography?.[font]?.fontWeight ?? "400"};
`;

export const Section_Title = styled(Text)`
  /* font-size: clamp(1.5rem, 1.29rem + 1.05vw, 1.75rem); */
  font-size: clamp(1.5rem, 1.18rem + 1.58vw, 1.88rem);
  flex-basis: 100%;
  margin-bottom: 4px;
  text-transform: capitalize;
  transition: all ease 0.3s;
  text-align: center;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin-left: 12px;
  }
`;

export const Archive_Title = styled(Section_Title)`
  transition: all ease 0.3s;
  font-size: 20px;
  text-transform: capitalize;
  margin-bottom: 4px;
  text-align: start;
`;

export const Section_SubTitle = styled(Text)`
  transition: all ease 0.3s;
  font-size: clamp(0.88rem, 0.77rem + 0.53vw, 1rem);
  font-weight: 300;
  text-transform: capitalize;
  text-align: center;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin: 0px 12px;
  }
`;

export const Archive_SubTitle = styled(Section_Title)`
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 300;
  text-align: start;
`;
export const Section_Divider = styled.div`
  min-height: 1px;
  background-color: ${({ theme }) => theme?.palette?.main};
  flex-basis: 100%;
  margin-top: clamp(0.75rem, 0.12rem + 3.16vw, 1.5rem);
  margin-bottom: clamp(1.5rem, 0.66rem + 4.21vw, 2.5rem);
  transition: all ease 0.3s;

  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    flex-basis: 90%;
    margin-left: 12px;
    margin-right: 12px;
  }
`;
export const Section_SubDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme?.palette?.main};
  width: 80%;
  margin: 0 auto;
  margin-top: clamp(1.88rem, 1.35rem + 2.63vw, 2.5rem);
  margin-bottom: clamp(1.25rem, 0.72rem + 2.63vw, 1.88rem);

  transition: all ease 0.3s;
`;

export const GithubLinkContainer = styled.a`
  position: absolute;
  background-color: ${({ theme }) => theme?.palette?.secondary};
  padding: 12px 16px;
  top: 12px;
  right: 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover > svg {
    fill: ${({ theme }) => theme?.palette?.textFocused};
  }

  & > svg {
    transition: all 0.3s ease;
    fill: ${({ theme }) => theme?.palette?.text};
  }
`;
