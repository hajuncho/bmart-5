import styled from 'styled-components';

export const ProductCard = styled.div`
  /* common */
  display: flex;
  flex-direction: column;
  cursor: pointer;
  & .image-container {
    position: relative;
  }
  & .sale-badge {
    position: absolute;
    top: 6%;
    left: 5%;
  }
  & .like-icon {
    position: absolute;
    bottom: 6%;
    right: 5%;
    & svg {
      color: red;
    }
  }

  /* slide */
  &.slide {
    width: 32vw;
    margin-right: 1rem;
    &:first-child {
      margin-left: 1rem;
    }
    &:last-child {
      margin-right: 0rem;
    }
  }

  /* sale */
  &.sale {
    & .image-container {
      overflow: hidden;
      width: 100%;
      position: relative;
      padding-top: 75%;
    }
    & img {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
      height: auto;
      transform: translate(0, -12.5%);
    }
  }
`;

export const ProductImg = styled.img`
  border: 1px solid #ddd;
  width: 100%;
  height: auto;
`;

export const ProductInfo = styled.div`
  font-size: 1rem;
  & .item-name {
    padding: 0.2rem 0;
  }
  & .price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .item-price {
    padding: 0.2rem 0;
    font-weight: 600;
  }
`;
