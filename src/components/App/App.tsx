import { useQuestionStore } from '../../store/question';
import GameSelection from '../GameSelection';
import Quiz from '../Quiz';

function App() {
  const status = useQuestionStore((state) => state.status);
  return (
    <>
      {status === 'idle' && <GameSelection />}
      {status === 'success' && <Quiz />}
    </>
  );
}

export default App;
