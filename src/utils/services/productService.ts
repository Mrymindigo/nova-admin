import { axiosInstance } from '../api/axiosInstance';
import type { Product } from '../../types/product';

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>('/products');
  return data;
};