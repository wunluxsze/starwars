import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from '../../api/api';
import Loading from '../../components/Loading';

function UserPage() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const res = await api.getUser(params.id);
      setUser(res);
    };
    fetch().finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading || user == null) {
    return <Loading />;
  }
  return (
    <div className="titles">
      <div>
        <h3 className="title">Его имя: {user.name}</h3>
        <h3 className="title">Его рост: {user.height} см</h3>
        <h3 className="title">Его масса: {user.mass} кг</h3>
        <h3 className="title">Гендер: {user.gender}</h3>
      </div>
    </div>
  );
}

export default UserPage;
