import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import DisplayArticles from './components/DisplayArticles';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <DisplayArticles />
    </div>
  );
}

export default App;
