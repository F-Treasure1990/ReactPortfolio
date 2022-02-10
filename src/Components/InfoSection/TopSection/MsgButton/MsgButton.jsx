import styled from "styled-components";
import { Button } from "/styles/GlobalStyles";

export const MsgButton = styled(Button)`
  position: absolute;
  padding: 1.2% 2.4%;
  border-radius: clamp(0.38rem, 0.08rem + 0.67vw, 0.5rem);
  min-height: 44px;
  transition: all ease 0.5s;

  & > p {
    font-size: clamp(0.75rem, 0.17rem + 1.33vw, 1rem);
  }
  & > .InfosectionMsgIcon {
    display: none;
  }

  ${({ theme }) => theme?.mediaQ.customDown(400)} {
    display: none;
  }
`;
