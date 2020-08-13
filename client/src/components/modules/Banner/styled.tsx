import styled from 'styled-components';

export const Banner = styled.div<{}>`
  margin-top: 30px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 300px;
  color: #fff;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & article {
    min-width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }

  & article:nth-child(1) {
    background-color: #92abd1;
  }
  & article:nth-child(2) {
    background-color: #0f4c81;
  }
  & article:nth-child(3) {
    background-color: #ff6f61;
  }
  & article:nth-child(4) {
    background-color: #5f488b;
  }
  & article:nth-child(5) {
    background-color: #88b048;
  }
  & article:nth-child(6) {
    background-color: #92abd1;
  }
  & article:nth-child(7) {
    background-color: #0f4c81;
  }
`;
