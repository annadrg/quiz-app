import { ChangeEventHandler } from 'react';
import RadioGroup from '../RadioGroup';
import { Question } from '../../types';
import styles from './QuestionView.module.css';

interface Props {
  number: number;
  question: Question;
  selectedAnswer: string | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function QuestionView({ number, question, selectedAnswer, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.question}>
        {number}. {question.question}
      </h1>
      <RadioGroup
        name="answer"
        options={question.options}
        selected={selectedAnswer}
        onChange={onChange}
      />
    </div>
  );
}

export default QuestionView;
