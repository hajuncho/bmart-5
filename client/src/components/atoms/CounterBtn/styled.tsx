import styled from 'styled-components';

export const CounterBtn = styled.div`
  display: flex;
  border: 2px solid #dfdfdf;
  border-radius: 1rem;
  padding: 0 0.5rem;
  margin-left: 1rem;

  & .minus-btn,
  & .plus-btn {
    background: none;
    border: none;
    font-weight: 600;
    font-size: 1.5rem;
    outline: none;
  }

  & .number {
    box-sizing: border-box;
    min-width: 2rem;
    text-align: center;
    margin: 0 1rem;
    font-size: 1.2rem;
    line-height: 2;
  }
`;
