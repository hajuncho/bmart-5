import styled from 'styled-components';

export const SlidableContainer = styled.div`
  & .content {
    display: -webkit-box;
    width: 100%;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &::after {
      content: '';
      margin-right: 1rem;
    }
  }
`;