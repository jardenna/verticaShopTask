import { FC } from 'react';
import PageTitle from '../components/PageTitle';
import ProductCard from '../components/productCard/ProductCard';
import useCategoryProducts from '../hooks/useGetCategory';
import { ProductApi, Title } from '../types/enums';

const Electronics: FC = () => {
  const { products, isLoading, errorMessage } = useCategoryProducts(
    ProductApi.Electronics,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (errorMessage) {
    return <div>An error occurred: errorMessage</div>;
  }

  if (products?.length === 0) {
    return <div>No products where found</div>;
  }

  return (
    <>
      <PageTitle title={Title.Electronics} />

      <h1>{Title.Electronics}</h1>
      {products && <ProductCard productList={products} />}
    </>
  );
};

export default Electronics;
