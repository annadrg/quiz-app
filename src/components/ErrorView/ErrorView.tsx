import { useQuestionStore } from '../../store/question';
import Button from '../Button';

function ErrorView() {
  const { resetState } = useQuestionStore();

  return (
    <>
      <p>Oops, something went wrong! Please try again.</p>
      <Button onClick={resetState}>Start new quiz</Button>
    </>
  );
}

export default ErrorView;
