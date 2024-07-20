import { Question } from '../../store/question';

interface Props {
  question: Question;
  selectedAnswer: string | null;
}

function QuestionResult({ question, selectedAnswer }: Props) {
  return (
    <div>
      <p>{question.question}</p>
      <div>
        {question.options.map((option) => {
          const isCorrect = question.correct_answer === option;
          const isSelected = selectedAnswer === option;

          return (
            <div
              style={{
                backgroundColor: isCorrect
                  ? 'green'
                  : isSelected
                    ? 'red'
                    : undefined,
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionResult;
