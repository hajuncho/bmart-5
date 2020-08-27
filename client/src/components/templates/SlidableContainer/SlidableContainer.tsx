import React, { useContext } from 'react';
import * as S from './styled';
import ProductCard from '@components/modules/ProductCard';
import { ProductType } from '@pages/index';
import ContainerHeader from '@components/modules/ContainerHeader';
import { Context } from '@commons/Context';

type ProductArrType = Array<ProductType>;

type Props = {
  products: ProductArrType;
  title: string;
};

export const SlidableContainer: React.FC<Props> = ({ products, title }) => {
  const { likeProducts, setLikeProducts } = useContext(Context);

  return (
    <S.SlidableContainer>
      <ContainerHeader>{title}</ContainerHeader>
      <div className="content">
        {products.map((item: ProductType) => {
          let initLike = false;
          if (likeProducts.length) {
            initLike =
              likeProducts.filter((product) => product.id === item.id).length > 0 ? true : false;
          }

          return (
            <ProductCard
              key={`slidable-${item.id}`}
              item={item}
              initLike={initLike}
              likeProducts={likeProducts}
              setLikeProducts={setLikeProducts}
              className={'slide'}
            />
          );
        })}
      </div>
    </S.SlidableContainer>
  );
};
