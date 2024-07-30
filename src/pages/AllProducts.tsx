import React from 'react';
import PageTitle from '../components/PageTitle';
import ProductCard from '../components/productCard/ProductCard';
import { useGetProductsQuery } from '../services/storeApi';
import errorMsg from '../services/utils/error';
import { Title } from '../types/enums';

const AllProducts: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{errorMsg(error)}</div>;
  }

  return (
    <>
      <PageTitle title={Title.AllProducts} />

      <h1>{Title.AllProducts}</h1>
      {products ? (
        <ProductCard productList={products} showCategory />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default AllProducts;
