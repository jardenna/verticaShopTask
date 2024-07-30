import { FC } from 'react';
import PageTitle from '../components/PageTitle';
import ProductCard from '../components/productCard/ProductCard';
import useCategoryProducts from '../hooks/useGetCategory';
import { ProductApi, Title } from '../types/enums';

const Women: FC = () => {
  const { products, isLoading, errorMessage } = useCategoryProducts(
    ProductApi.WomensClothing,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (errorMessage) {
    return <div>An error occurred: errorMessage</div>;
  }

  return (
    <>
      <PageTitle title={Title.WomensClothing} />

      <h1>{Title.WomensClothing}</h1>
      {products && <ProductCard productList={products} />}
    </>
  );
};

export default Women;
