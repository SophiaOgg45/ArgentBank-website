import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Accounts from '../components/Accounts';
import accountsData from '../data/accounts.json'; // Importer les données des comptes

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="main bg-dark">
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{user ? `${user.firstName} ${user.lastName}` : 'User'}!</h1>
          <Link to="/edit-user" className="edit-button">Edit Name</Link>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Accounts accounts={accountsData} />
      </main>
    </div>
  );
};

export default Profile;
