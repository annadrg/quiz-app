import { MouseEventHandler } from 'react';
import Button from '../Button';
import styles from './CategoryButton.module.css';

interface Props {
  isSelected: boolean;
  categoryName: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function CategoryButton({ isSelected, categoryName, onClick }: Props) {
  return (
    <Button
      className={`${styles.categoryButton} ${isSelected ? styles.selected : ''}`}
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
    >
      {categoryName}
    </Button>
  );
}

export default CategoryButton;
