import { MouseEventHandler } from 'react';
import Button from '../Button';

interface Props {
  isSelected: boolean;
  categoryName: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function CategoryButton({ isSelected, categoryName, onClick }: Props) {
  return (
    <Button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      style={isSelected ? { fontWeight: 700 } : undefined}
    >
      {categoryName}
    </Button>
  );
}

export default CategoryButton;
