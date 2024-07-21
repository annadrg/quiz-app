import { useQuestionStore } from '../../store/question';
import Button from '../Button';
import styles from './ErrorView.module.css';

function ErrorView() {
  const { resetState } = useQuestionStore();

  return (
    <div className={styles.wrapper}>
      <p>Oops, something went wrong! Please try again.</p>
      <Button onClick={resetState}>Start new quiz</Button>
    </div>
  );
}

export default ErrorView;
