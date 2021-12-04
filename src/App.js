import logo from './logo.svg';
import './App.css';
import './App.module.scss';
import Button from 'react-bootstrap/Button';

import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
    <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Button variant="link"  >
                        <br />Menu
                    </Button>
      </header>
    </div>
  );
}

export default App;
