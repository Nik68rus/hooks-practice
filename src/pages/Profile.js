import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GithubContext } from '../context/github/githubContext';

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
  const name = match.params.name;

  useEffect(() => {
    console.log(`effect`);
    getUser(name);
    getRepos(name);
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }

  return (
    <>
      <Link to="/" className="btn btn-link">На главную</Link>
    </>
  )
}
