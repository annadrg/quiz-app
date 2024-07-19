import { create } from 'zustand';

interface AnswerStore {
  answers: (string | null)[];
  setAnswer: (answer: string | null) => void;
  resetState: () => void;
}

export const useAnswerStore = create<AnswerStore>()((set) => ({
  answers: [],
  setAnswer: (answer) =>
    set((state) => ({ answers: [...state.answers, answer] })),
  resetState: () => set(() => ({ answers: [] })),
}));
