import { LucideIcon } from 'lucide-react';

export type Page = 'home' | 'about' | 'academy' | 'merchants' | 'blog' | 'events' | 'gallery' | 'join' | 'support' | 'learning';

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

// Course System Types

export type QuestionCategory = 'spender' | 'believer' | 'noderunner';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  category: QuestionCategory; // Used to determine user persona
}

export interface Topic {
  id: string;
  title: string;
  content: string[]; // Max 3 paragraphs
  questions: Question[]; // Max 9 questions
}

export interface Chapter {
  id: string;
  title: string;
  topics: Topic[]; // Max 3 topics
}

export interface Course {
  id: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  title: string;
  description: string;
  chapters: Chapter[]; // 9 Chapters
}