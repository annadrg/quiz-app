import { create } from 'zustand';
import { fetcher, randomlyInsertIntoArray } from '../helpers';
import { Category, Difficulty } from '../components/GameSelection';

const QUIZ_API_URL = 'https://opentdb.com/api.php' as const;
export const QUIZ_LENGTH = 10 as const;

export interface Question {
  type: 'multiple' | 'boolean';
  question: string;
  correct_answer: string;
  options: string[];
}

interface ApiQuestion {
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

      const questions: Question[] = data.results.map(
        (question: ApiQuestion) => ({
          type: question.type,
          question: decodeURIComponent(question.question),
          correct_answer: decodeURIComponent(question.correct_answer),
          options:
            question.type === 'multiple'
              ? randomlyInsertIntoArray(
                  question.incorrect_answers,
                  question.correct_answer
                ).map((answer) => decodeURIComponent(answer))
              : ['True', 'False'],
        })
      );

      set(() => ({
        status: 'success',
        questions,
      }));
    } catch (error) {
      set(() => ({ status: 'error' }));
    }
  },
  resetState: () => set(() => ({ status: 'idle', questions: [] })),
}));
