import { Question } from '../../types';
import VisuallyHidden from '../VisuallyHidden';
import styles from './QuestionResult.module.css';
import { Check, X } from 'lucide-react';

interface Props {
  number: number;
  question: Question;
  selectedAnswer: string | null;
}

function QuestionResult({ number, question, selectedAnswer }: Props) {
  let points = 0;
  if (question.correct_answer === selectedAnswer) {
    points = question.type === 'boolean' ? 5 : 10;
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.question}>
        {number}. {question.question}
      </p>
      <p className={styles.points}>{points} points</p>
      <div>
        {question.options.map((option) => {
          const isCorrect = question.correct_answer === option;
          const isSelected = selectedAnswer === option;

          return (
            <div
              key={option}
              className={
                isCorrect
                  ? styles.correct
                  : isSelected
                    ? styles.incorrect
                    : undefined
              }
            >
              {isCorrect && (
                <>
                  <Check size={16} />
                  <VisuallyHidden>Correct</VisuallyHidden>
                </>
              )}
              {!isCorrect && isSelected && (
                <>
                  <X size={16} />
                  <VisuallyHidden>Incorrect</VisuallyHidden>
                </>
              )}
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionResult;
