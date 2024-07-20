import { FormEvent, useState } from 'react';
import { useAnswerStore } from '../../store/answer';
import { useQuestionStore } from '../../store/question';
import QuestionView from '../QuestionView';
import Button from '../Button';
import Results from '../Results';
import { QUIZ_LENGTH } from '../../constants';

function Quiz() {
  const { questions, resetState: resetQuestions } = useQuestionStore();
  const { answers, setAnswer, resetState: resetAnswers } = useAnswerStore();

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setAnswer(selectedAnswer);

    setSelectedAnswer(null);
  }

  if (answers.length === QUIZ_LENGTH) {
    return (
      <div>
        <Results />
        <Button
          onClick={() => {
            resetAnswers();
            resetQuestions();
          }}
        >
          Start new quiz
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <QuestionView
        question={questions[answers.length]}
        selectedAnswer={selectedAnswer}
        onChange={(event) => setSelectedAnswer(event.target.value)}
      />
      <Button>Submit answer</Button>
    </form>
  );
}

export default Quiz;
