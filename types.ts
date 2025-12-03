import { LucideIcon } from 'lucide-react';

export type Page = 'home' | 'about' | 'academy' | 'merchants' | 'blog' | 'builders' | 'events' | 'gallery' | 'join' | 'support';

export interface NavItem {
  id: Page;
  label: string;
  icon: LucideIcon;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface DetailContent {
  paragraphs: string[];
  images: string[];
  links: LinkItem[];
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string; // Short description
  icon: LucideIcon;
  details: DetailContent; // Full content for modal
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}