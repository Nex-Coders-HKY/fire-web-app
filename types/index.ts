export interface ProductVariant {
  size: string;
  title: string;
  desc: string;
  img?: string;
  specsOverride?: [string, string][];
}

export interface ProductItem {
  id: string;
  label: string;
  tag: string;
  color: string;
  title: string;
  desc: string;
  variantLabel: string;
  specs: [string, string][];
  variants: ProductVariant[];
}

export interface GuidanceClass {
  id: string;
  classCode: string;
  name: string;
  desc: string;
  color: string;
  suitable: string[];
  avoid?: string;
  iconType: 'combustibles' | 'flammable' | 'electrical' | 'cooking' | 'office' | 'industrial';
}

export interface ProjectItem {
  id: string;
  client: string;
  location: string;
  date: string;
  tag: string;
  category: 'Industrial' | 'Corporate' | 'Education' | 'Commercial' | 'DataCenter';
  desc: string;
  stats: {
    val1: string;
    lbl1: string;
    val2: string;
    lbl2: string;
    val3: string;
    lbl3: string;
  };
  bgGradient?: string;
  imageUrl?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  stars: number;
  text: string;
  date: string;
  initials: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  note: string;
  tag: string;
  iconName: string;
}

export interface QuoteFormData {
  facility: string;
  floors: string;
  types: string[];
  name: string;
  phone: string;
  email: string;
  location: string;
  urgency: string;
  notes?: string;
}
