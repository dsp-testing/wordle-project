import Game from '../Game';
import Header from '../Header';
import useTheme from '../../hooks/useTheme';
import useColorblindMode from '../../hooks/useColorblindMode';

function App() {
  const [theme, toggleTheme] = useTheme();
  const [colorblindMode, toggleColorblindMode] = useColorblindMode();

  return (
    <div className="wrapper">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        colorblindMode={colorblindMode}
        onToggleColorblindMode={toggleColorblindMode}
      />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
