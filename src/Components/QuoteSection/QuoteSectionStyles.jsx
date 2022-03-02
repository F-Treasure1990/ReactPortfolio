import styled from 'styled-components'
import { FlexCenter } from 'styles/GlobalStyles'

export const QuoteContainer = styled.section`
  border-radius: 12px;
  margin: 40px 0;
  user-select: none;
  background-image: url('/landingBackground.svg');
  cursor: pointer;
  ${FlexCenter}
  flex-direction: column;
  height: 200px;
  max-height: 200px;
  /* transition: margin ease 0.3s; */
  ${({ theme }) => theme?.mediaQ.customDown(600)} {
    margin: 12px 0;
  }
`

export const Quote = styled.div`
  display: block;
  letter-spacing: 1px;
  text-align: center;
  margin: 0 12px;

  > .author {
    font-size: clamp(0.88rem, 0.83rem + 0.24vw, 1rem);
    color: ${({ theme }) => theme?.palette?.text};
    font-weight: 300;
    margin-top: 10px;
  }

  > .quote {
    color: ${({ theme }) => theme?.palette?.textFocused};
    font-weight: 300;
    font-size: clamp(1rem, 0.85rem + 0.73vw, 1.38rem);
    line-height: 30px;
    min-height: 60px;
  }
`
