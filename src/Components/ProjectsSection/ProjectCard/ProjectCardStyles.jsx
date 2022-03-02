import styled from 'styled-components'
import { Box } from 'styles/GlobalStyles'

export const ProjectCardContainer = styled(Box)`
  overflow: hidden;
  height: auto;
  cursor: pointer;
  position: relative;
  &:hover .Project_CardImg {
    transform: scale(1.05);
  }
  ${({ theme }) => theme?.mediaQ.customDown(662)} {
    min-height: 400px;
  }
  ${({ theme }) => theme?.mediaQ.customDown(662)} {
    min-height: 410px;
  }
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    min-height: 299px;
  }
`
