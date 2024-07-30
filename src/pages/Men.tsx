import { FC } from 'react';
import PageTitle from '../components/PageTitle';
import ProductCard from '../components/productCard/ProductCard';
import useCategoryProducts from '../hooks/useGetCategory';
import { ProductApi, Title } from '../types/enums';

const Men: FC = () => {
  const { products, isLoading, errorMessage } = useCategoryProducts(
    ProductApi.MensClothing,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (errorMessage) {
    return <div>An error occurred: errorMessage</div>;
  }

  return (
    <>
      <PageTitle title={Title.MensClothing} />

      <h1>{Title.MensClothing}</h1>
      {products && <ProductCard productList={products} />}
    </>
  );
};

export default Men;
