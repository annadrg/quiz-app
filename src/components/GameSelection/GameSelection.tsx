import { FormEvent, useState } from 'react';
import Button from '../Button';
import CategoryButton from '../CategoryButton';
import { useQuestionStore } from '../../store/question';

const CATEGORIES = {
  '9': 'General knowledge',
  '12': 'Music',
  '17': 'Science & Nature',
  '21': 'Sports',
  '22': 'Geography',
  '23': 'History',
  '24': 'Politics',
  '26': 'Celebrities',
} as const;

const DIFFICULTIES = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
  mix: 'Mixed',
} as const;

export type Category = keyof typeof CATEGORIES;
export type Difficulty = keyof typeof DIFFICULTIES;

function GameSelection() {
  const getQuestions = useQuestionStore((state) => state.getQuestions);

  const categoryKeys = Object.keys(CATEGORIES) as Category[];
  const difficultyKeys = Object.keys(DIFFICULTIES) as Difficulty[];

  const defaultCategory: Category = categoryKeys[0];
  const defaultDifficulty: Difficulty = difficultyKeys[0];

  const [category, setCategory] = useState<Category>(defaultCategory);
  const [difficulty, setDifficulty] = useState<Difficulty>(defaultDifficulty);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    getQuestions(category, difficulty);

    setCategory(defaultCategory);
    setDifficulty(defaultDifficulty);
  }

  return (
    <form onSubmit={handleSubmit}>
      {categoryKeys.map((option) => (
        <CategoryButton
          key={option}
          isSelected={category === option}
          categoryName={CATEGORIES[option]}
          onClick={() => setCategory(option)}
        />
      ))}
      {difficultyKeys.map((option) => {
        const id = `difficulty-${option}`;
        return (
          <label key={option} htmlFor={id}>
            <input
              id={id}
              type="radio"
              name="difficulty"
              value={option}
              checked={difficulty === option}
              onChange={() => setDifficulty(option)}
            />
            {DIFFICULTIES[option]}
          </label>
        );
      })}
      <Button type="submit">Start quiz</Button>
    </form>
  );
}

export default GameSelection;
