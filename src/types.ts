import { CATEGORIES, DIFFICULTIES } from './constants';

export type Category = keyof typeof CATEGORIES;
export type Difficulty = keyof typeof DIFFICULTIES;

export interface Question {
  type: 'multiple' | 'boolean';
  question: string;
  correct_answer: string;
  options: string[];
}
