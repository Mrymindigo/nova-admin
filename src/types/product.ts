export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export interface ProductTableProps {
  products: Product[];
  onView: (product: Product) => void;
  onEdit?: (product: Product) => void;
  onDelete: (product: Product) => void;
}


export interface NewProduct {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductFormValues {
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
}