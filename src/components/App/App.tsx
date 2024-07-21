import { useQuestionStore } from '../../store/question';
import ErrorView from '../ErrorView';
import GameSelection from '../GameSelection';
import Loader from '../Loader';
import Quiz from '../Quiz';

function App() {
  const status = useQuestionStore((state) => state.status);
  return (
    <>
      {status === 'idle' && <GameSelection />}
      {status === 'success' && <Quiz />}
      {status === 'loading' && <Loader />}
      {status === 'error' && <ErrorView />}
    </>
  );
}

export default App;
