import { calculateScore } from '../../helpers';
import { useAnswerStore } from '../../store/answer';
import { useQuestionStore } from '../../store/question';
import QuestionResult from '../QuestionResult';

function Results() {
  const { questions } = useQuestionStore();
  const { answers } = useAnswerStore();

  const score = calculateScore(
    questions.map((q) => ({ type: q.type, answer: q.correct_answer })),
    answers
  );

  return (
    <>
      <p>You scored {score} points!</p>
      {questions.map((question, index) => (
        <QuestionResult question={question} selectedAnswer={answers[index]} />
      ))}
    </>
  );
}

export default Results;
