import React from 'react'
import styled from 'styled-components'
import { Text } from 'styles/GlobalStyles'

const CopyrightStyles = styled.div`
  font-size: clamp(0.63rem, 0.52rem + 0.53vw, 0.75rem);
  font-weight: 300;
  opacity: 0.5;
  padding: 6px 12px;
  background-color: ${({ theme }) => theme?.palette?.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 24px;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin-bottom: 150px;
    padding: 0px 12px;
  }
  > p {
    ${({ theme }) => theme?.mediaQ.customDown(450)} {
      margin-right: 16px;
    }
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 100px;

    > img {
      height: 16px;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
`
const CopyRight = () => {
  return (
    <CopyrightStyles>
      <Text color='text'>
        © 2020-present Fenton Treasure. All Rights Reserved.
      </Text>
      <div>
        <img src='/SocialMedia/instagram.svg' alt='instagram' />
        <img src='/SocialMedia/linkedin.svg' alt='linkedin' />
        <img src='/SocialMedia/github.svg' alt='github' />
      </div>
    </CopyrightStyles>
  )
}

export default CopyRight
