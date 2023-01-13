import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import DisplayArticles from './components/DisplayArticles';
import ArticleCard from './components/ArticleCard';
import DisplayComments from './components/DisplayComments';
import CheckConnection from './components/CheckConnection';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import AddCommentForm from './components/AddCommentForm';
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(() => {

  }, [currentUser, isUserLoggedIn])

  return (
    <div className="App">
      <CheckConnection />
      <Header />
      <Login currentUser={currentUser} isUserLoggedIn={isUserLoggedIn}/>
      <Nav />
      <Routes>
        <Route path="/" element={<DisplayArticles />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
        <Route path="/articles/:article_id/comments" element={<DisplayComments />} />
        <Route path='/articles/:article_id/comment-form' element={<AddCommentForm currentUser={currentUser}/>} />
        <Route path='/users' element={<LoginPage setCurrentUser={setCurrentUser} currentUser={currentUser} setIsUserLoggedIn={setIsUserLoggedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;
