import { Product, useGetSingleCategoryQuery } from '../services/storeApi';
import errorMsg from '../services/utils/error';
import { ProductApi } from '../types/enums';

interface UseCategoryProductsResult {
  errorMessage: string | null;
  isLoading: boolean;
  products: Product[] | undefined;
}

const useCategoryProducts = (
  category: ProductApi,
): UseCategoryProductsResult => {
  const {
    data: products,
    error,
    isLoading,
  } = useGetSingleCategoryQuery(category);

  let errorMessage = null;
  if (error) {
    errorMessage = errorMsg(error);
  }

  return {
    products,
    isLoading,
    errorMessage,
  };
};

export default useCategoryProducts;
