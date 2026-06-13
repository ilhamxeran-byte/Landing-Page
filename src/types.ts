export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  priceValue: number;
  badge?: string;
  description: string;
  features: string[];
  duration: string;
  suitability: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  features: string[];
  techStack: string[];
  duration: string;
  objective: string;
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarUrl?: string;
}

export interface InquiryFormState {
  name: string;
  businessName: string;
  businessNiche: string;
  serviceId: string;
  customFeatures: string[];
  notes: string;
  budgetRange: string;
}
