import { ChangeEventHandler, useMemo } from 'react';
import { randomlyInsertIntoArray } from '../../helpers';
import { Question } from '../../store/question';
import RadioGroup from '../RadioGroup';

interface Props {
  question: Question;
  selectedAnswer: string | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function QuestionView({ question, selectedAnswer, onChange }: Props) {
  const multipleChoiceOptions = useMemo(
    () =>
      randomlyInsertIntoArray(
        question.incorrect_answers,
        question.correct_answer
      ),
    [question]
  );

  const answerOptions =
    question.type === 'multiple' ? multipleChoiceOptions : ['True', 'False'];

  const formattedOptions: Record<string, string> = {};
  answerOptions.forEach(
    (option) => (formattedOptions[option] = decodeURIComponent(option))
  );

  return (
    <div>
      <p>{decodeURIComponent(question.question)}</p>
      <div>
        <RadioGroup
          name="answer"
          options={formattedOptions}
          selected={selectedAnswer}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default QuestionView;
