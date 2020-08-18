import React from 'react';
import { NextPage } from 'next';
import Layout from '@components/templates/Layout';
import Banner from '@components/modules/Banner';
import CategoryContainer, { CategoryType } from '@components/modules/CategoryContainer';
import SlidableContainer, { ProductType } from '@components/modules/SlidableContainer';
import API from '@utils/API';
import HttpStatus from 'http-status';
import { LatestProductsLimit, OrderedCategoriesLimit } from '@utils/constants';

type ProductArrType = {
  products: Array<ProductType>;
};

type CategoryArrType = {
  categories: Array<CategoryType>;
};

type Props = {
  categories: Array<CategoryType>;
  products: Array<ProductType>;
};

const MainPage: NextPage<Props> = (props) => (
  <Layout title="연습용">
    <Banner />
    <CategoryContainer earliest={24} latest={50} categories={props.categories} />
    <SlidableContainer products={props.products} />
  </Layout>
);

MainPage.getInitialProps = async () => {
  const slidalbeResponse = await slidableContainerFetch();
  const categoryResponse = await categoryContainerFetch();
  return { ...slidalbeResponse, ...categoryResponse };
};

const slidableContainerFetch = async (): Promise<ProductArrType> => {
  let lastestProducts = (await API.get(`/product/latest/${LatestProductsLimit}`)).data;

  console.info(lastestProducts.message);
  if (
    lastestProducts.status === HttpStatus.OK ||
    lastestProducts.status === HttpStatus.NOT_MODIFIED
  ) {
    const products = [...lastestProducts.result];
    return {
      products: products,
    };
  } else {
    console.error(`not defined status code: ${status}`);
    return { products: [] };
  }
};

const categoryContainerFetch = async (): Promise<CategoryArrType> => {
  let { status, message, result } = (await API.get(`/category/${OrderedCategoriesLimit}`)).data;
  console.info(message);
  if (status === HttpStatus.OK || status === HttpStatus.NOT_MODIFIED) {
    const categories = [...result].map((category) => {
      category.url = require(`@assets/images/main-${category.name}.png`);
      return category;
    });
    return { categories: categories };
  } else {
    console.error(`not defined status code: ${status}`);
    return { categories: [] };
  }
};

export default MainPage;