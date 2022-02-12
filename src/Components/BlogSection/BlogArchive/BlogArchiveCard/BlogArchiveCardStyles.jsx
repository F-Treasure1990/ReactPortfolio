import styled from "styled-components";
import { Box, Text } from "styles/GlobalStyles";

export const BlogArchiveCardContainer = styled(Box)`
  padding: 16px;
  cursor: pointer;
  transition: all ease-out 0.3s;
  border: solid 2px ${({ theme }) => theme?.palette?.secondary};
  position: relative;

  &:hover {
    border: solid 2px ${({ theme }) => theme?.palette?.accent};
  }

  & > svg {
    margin-bottom: 12px;
  }
`;

export const BlogArchiveCardTitle = styled(Text)`
  font-size: clamp(0.88rem, 0.77rem + 0.53vw, 1rem);
  line-height: 1.4;
  text-transform: capitalize;
`;

export const BlogArchiveCardDate = styled(Text)`
  font-size: clamp(0.63rem, 0.52rem + 0.53vw, 0.75rem);
  text-transform: capitalize;
  font-weight: 300;
  margin: 4px 0 8px 0;
`;

export const BlogArchiveCardDescription = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: clamp(0.75rem, 0.64rem + 0.53vw, 0.88rem);
  font-weight: 300;
`;
