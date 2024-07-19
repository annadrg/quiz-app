import { create } from 'zustand';
import { fetcher } from '../helpers';
import { Category, Difficulty } from '../components/GameSelection';

const QUIZ_API_URL = 'https://opentdb.com/api.php' as const;
export const QUIZ_LENGTH = 10 as const;

export interface Question {
  type: 'multiple' | 'boolean';
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuestionStore {
  questions: Question[];
  status: 'idle' | 'loading' | 'success' | 'error';
  getQuestions: (category: Category, difficulty: Difficulty) => Promise<void>;
  resetState: () => void;
}

export const useQuestionStore = create<QuestionStore>()((set) => ({
  questions: [],
  status: 'idle',
  getQuestions: async (category, difficulty) => {
    try {
      set(() => ({ status: 'loading' }));
      const data = await fetcher(QUIZ_API_URL, {
        amount: String(QUIZ_LENGTH),
        encode: 'url3986',
        category,
        ...(difficulty !== 'mix' ? { difficulty } : {}),
      });

      set(() => ({
        status: 'success',
        questions: data.results,
      }));
    } catch (error) {
      set(() => ({ status: 'error' }));
    }
  },
  resetState: () => set(() => ({ status: 'idle', questions: [] })),
}));
