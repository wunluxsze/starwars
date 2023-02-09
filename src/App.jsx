import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import FilmPage from './pages/FilmPage';
import FilmsPage from './pages/FilmsPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <Link className="link" to="/">
            Главная страница
          </Link>
        </div>
        <div>
          <Link className="link" to="/users">
            Персонажи
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<FilmsPage />} />
        <Route path="/film/:id" element={<FilmPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
