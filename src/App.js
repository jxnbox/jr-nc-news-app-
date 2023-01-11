import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import DisplayArticles from './components/DisplayArticles';
import ArticleCard from './components/ArticleCard';
import DisplayComments from './components/DisplayComments';

function App() {


  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<DisplayArticles />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
        <Route path="/articles/:article_id/comments" element={<DisplayComments />} />
      </Routes>
    </div>
  );
}

export default App;
