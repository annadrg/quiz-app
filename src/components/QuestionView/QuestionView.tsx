import { ChangeEventHandler } from 'react';
import RadioGroup from '../RadioGroup';
import { Question } from '../../types';

interface Props {
  question: Question;
  selectedAnswer: string | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function QuestionView({ question, selectedAnswer, onChange }: Props) {
  return (
    <div>
      <p>{question.question}</p>
      <div>
        <RadioGroup
          name="answer"
          options={question.options}
          selected={selectedAnswer}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default QuestionView;
