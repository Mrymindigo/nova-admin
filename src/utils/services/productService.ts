import { axiosInstance } from '../api/axiosInstance';
import type { Product , NewProduct } from '../../types/product';

interface CreateProductResponse {
  id: number;
}

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>('/products');
  return data;
};

export const deleteProduct = async (id: number): Promise<Product> => {
  const { data } = await axiosInstance.delete<Product>(`/products/${id}`);
  return data;
};

export const createProduct = async (payload: NewProduct): Promise<Product> => {
  const { data } = await axiosInstance.post<CreateProductResponse>('/products', payload);

  return { ...payload, id: data.id, rating: { rate: 0, count: 0 } };
};

export const getCategories = async (): Promise<string[]> => {
  const { data } = await axiosInstance.get<string[]>('/products/categories');
  return data;
};