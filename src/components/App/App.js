import Game from '../Game';
import Header from '../Header';
import useTheme from '../../hooks/useTheme';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="wrapper">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
