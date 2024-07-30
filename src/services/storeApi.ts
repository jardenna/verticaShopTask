import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductApi } from '../types/enums';

export interface Product {
  category: ProductApi;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

export const storeApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    getSingleCategory: builder.query<Product[], ProductApi>({
      query: (category) => `products/category/${category}`,
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetSingleCategoryQuery,
} = storeApi;
