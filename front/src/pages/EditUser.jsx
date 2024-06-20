import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { infoUserName } from '../redux/authSlice';
import { changeUsername } from '../core/api';
import Button from '../components/Button';

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Récupérer les informations d'authentification depuis le store Redux
  const { user, token } = useSelector((state) => state.auth);

  const [newUsername, setNewUsername] = useState(user?.username || '');
  const [error, setError] = useState('');

  const handleChangeUsername = (e) => {
    setNewUsername(e.target.value);
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Vérifier la présence du token
    if (!token) {
      console.error('Token manquant');
      setError('Token manquant');
      return;
    }

    try {
      const response = await changeUsername(newUsername, token);
      if (response.status === 200) {
        dispatch(infoUserName(newUsername));
        console.log("Le nom d'utilisateur a bien été modifié.", response.status);
        navigate('/profile');
      } else {
        console.error("La mise à jour du nom d'utilisateur a échoué.");
        setError("La mise à jour du nom d'utilisateur a échoué.");
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du nom d\'utilisateur :', error);
      setError('Erreur lors de la mise à jour du nom d\'utilisateur : ' + error.message);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content toogle-edit-name">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit User info</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              value={newUsername}
              onChange={handleChangeUsername}
              type="text"
              id="username"
              placeholder="Tapez votre username"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <Button btnText={"Save"} className={"sign-in-button"} />
        </form>
        <Button btnText={"Cancel"} onClick={handleCancel} className={"sign-in-button"} />
      </section>
    </main>
  );
};

export default EditUser;
