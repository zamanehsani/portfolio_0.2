import photo from './photo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <p>
          I am into making a website, a portfolio.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/zaman_ehsani"
          target="_blank"
          rel="noopener noreferrer"
        >
          your suggestion is welcomed!
        </a>
      </header>
    </div>
  );
}

export default App;
