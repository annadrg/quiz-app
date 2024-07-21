import { FormEvent, useState } from 'react';
import Button from '../Button';
import CategoryButton from '../CategoryButton';
import { useQuestionStore } from '../../store/question';
import RadioGroup from '../RadioGroup';
import { CATEGORIES, DIFFICULTIES } from '../../constants';
import { Category, Difficulty } from '../../types';
import styles from './GameSelection.module.css';

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Quiz</h1>
      <div>
        <h2>Category</h2>
        <div className={styles.categories}>
          {categoryKeys.map((option) => (
            <CategoryButton
              key={option}
              isSelected={category === option}
              categoryName={CATEGORIES[option]}
              onClick={() => setCategory(option)}
            />
          ))}
        </div>
      </div>
      <div>
        <h2>Difficulty</h2>
        <RadioGroup
          name="difficulty"
          options={DIFFICULTIES}
          selected={difficulty}
          onChange={(event) => setDifficulty(event.target.value as Difficulty)}
        />
      </div>
      <Button type="submit">Start quiz</Button>
    </form>
  );
}

export default GameSelection;
