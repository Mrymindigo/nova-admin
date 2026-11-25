import { axiosInstance } from '../api/axiosInstance';
import type { Product } from '../../types/product';

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>('/products');
  return data;
};

export const deleteProduct = async (id: number): Promise<Product> => {
  const { data } = await axiosInstance.delete<Product>(`/products/${id}`);
  return data;
};