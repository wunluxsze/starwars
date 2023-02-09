import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import Loading from '../../components/Loading';
import { AppContext } from '../../store/AppContext';
import './index.css';

function UsersPage() {
  const { users, setUsers } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      if (users.length == 0) {
        const response = await api.getUsers();
        setUsers(response);
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
      {users.map((item, index) => (
        <div className="users">
          <Link className="users__card link" to={`/user/${index + 1}/`}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
export default UsersPage;
