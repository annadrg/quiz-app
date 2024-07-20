export const QUIZ_LENGTH = 10 as const;

export const CATEGORIES = {
  '9': 'General knowledge',
  '12': 'Music',
  '17': 'Science & Nature',
  '21': 'Sports',
  '22': 'Geography',
  '23': 'History',
  '24': 'Politics',
  '26': 'Celebrities',
} as const;

export const DIFFICULTIES = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
  mix: 'Mixed',
} as const;
