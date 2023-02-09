import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../../api/api';
import Loading from '../../components/Loading';
import './index.css';

const FilmPage = () => {
  const params = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const res = await api.getFilm(params.id);
      setFilm(res);
    };
    fetch().finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading || film == null) {
    return <Loading />;
  }

  return (
    <div className="titles">
      <div className="wrapper">
        <h2 className="title">Название фильма: {film.title}</h2>
        <p className="text">Описание: {film.opening_crawl}</p>
      </div>
    </div>
  );
};

export default FilmPage;
