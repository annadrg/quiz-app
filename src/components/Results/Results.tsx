import { calculateScore } from '../../helpers';
import { useAnswerStore } from '../../store/answer';
import { useQuestionStore } from '../../store/question';
import QuestionResult from '../QuestionResult';
import styles from './Results.module.css';

function Results() {
  const { questions } = useQuestionStore();
  const { answers } = useAnswerStore();

  const score = calculateScore(
    questions.map((q) => ({ type: q.type, answer: q.correct_answer })),
    answers
  );

  return (
    <div className={styles.wrapper}>
      <h1>You scored {score} points!</h1>
      {questions.map((question, index) => (
        <QuestionResult
          key={index}
          number={index + 1}
          question={question}
          selectedAnswer={answers[index]}
        />
      ))}
    </div>
  );
}

export default Results;
