export interface ProductFeature {
  label: string;
  value: string;
}

export interface JewelryItem {
  id: string | number;
  title: string;
  price: number;
  weight: number;
  img: string;
  type: string;
  category?: string;
  seller?: string;
  stock?: number;
  rating?: number;
  reviewsCount?: number;
  questionsCount?: number;
  weights?: number[];
  features?: ProductFeature[];
  description?: string;
  specs?: ProductFeature[];
}