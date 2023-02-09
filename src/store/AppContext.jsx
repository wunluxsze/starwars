import { createContext, useState } from 'react';

const AppContext = createContext();

const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [films, setFilms] = useState([]);
  const [users, setUsers] = useState([]);

  return <Provider value={{ films, setFilms, users, setUsers }}>{children}</Provider>;
};

export { AppProvider, AppContext };
