import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { infoUserName } from '../redux/authSlice'; // Vérifiez l'import correct
import { changeUsername } from '../core/api';

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const [newUsername, setNewUsername] = useState('');

  const handleChangeUsername = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await changeUsername(newUsername, token);
      if (response.status === 200) {
        // Mettre à jour le store Redux et localStorage si nécessaire
        dispatch(infoUserName(newUsername));
        localStorage.setItem('username', newUsername);
        navigate('/profile');
      } else {
        console.error('La mise à jour du nom d\'utilisateur a échoué.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du nom d\'utilisateur :', error);
      // Gérer l'affichage d'un message d'erreur à l'utilisateur
    }
  };
  

  return (
    <main className="main bg-dark">
      <section className="sign-in-content toogle-edit-name">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit User info</h1>
        <form onSubmit={handleSave} onClick={(event) => event.stopPropagation()}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              value={newUsername}
              onChange={handleChangeUsername}
              type="text"
              id="username"
              placeholder="Enter your new username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              disabled
              value={user.firstName}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              disabled
              value={user.lastName}
            />
          </div>
          <button type="submit" className="sign-in-button">Save</button>
        </form>
        <Link to="/profile" className="sign-in-button">Cancel</Link>
      </section>
    </main>
  );
};

export default EditUser;
