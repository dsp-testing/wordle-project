import Game from '../Game';
import Header from '../Header';
import ColourPicker from '../ColourPicker';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <ColourPicker />
        <Game />
      </div>
    </div>
  );
}

export default App;
