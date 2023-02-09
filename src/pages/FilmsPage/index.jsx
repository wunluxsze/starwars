import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import Loading from '../../components/Loading';
import { AppContext } from '../../store/AppContext';
import './index.css';

const FilmsPage = () => {
  const { films, setFilms } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      if (films.length == 0) {
        const response = await api.getFilms();
        setFilms(response);
      }
    };

    fetch().finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="wrapper">
      {films.map((item, index) => (
        <Link className="films" to={`/film/${index + 1}/`}>
          <div className="films__card">{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default FilmsPage;
