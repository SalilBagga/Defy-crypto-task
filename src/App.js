import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-neutral-800 min-h-screen flex flex-col items-center justify-center text-white">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-2xl font-bold text-red-800">Tailwind 3 With React Js</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
