import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditUser from '../components/EditUser';
import Accounts from '../components/Accounts';
import accountsData from '../data/accounts.json';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const [editMode, setEditMode] = useState(false);
  const [editedUserName, setEditedUserName] = useState('');

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Fonction pour mettre à jour le nom d'utilisateur dans Profile après la sauvegarde
  const updateUserName = (newUserName) => {
    console.log('Updating username to:', newUserName);
    setEditedUserName(newUserName);
    setEditMode(false); 
  };

  return (
    <div className="main bg-dark">
      <main className="main bg-dark">
        <div className="header">
          <h1>Bienvenue<br />{!editMode ? 
            (editedUserName || (user && user.userName) || 'Utilisateur') :
            (user ? `${user.firstName} ${user.lastName}` : 'Utilisateur')
          }</h1>
          {!editMode && (
            <button className="edit-button" onClick={toggleEditMode}>
              Edit Name
            </button>
          )}
        </div>
        {editMode && <EditUser toggleEditMode={toggleEditMode} updateUserName={updateUserName} />}
        <h2 className="sr-only">Comptes</h2>
        <Accounts accounts={accountsData} />
      </main>
    </div>
  );
};

export default Profile;
