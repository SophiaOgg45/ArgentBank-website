import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUsernameRequest, changeUsernameSuccess, changeUsernameFailure } from '../redux/authSlice';
import { changeUsername } from '../core/api';

import './EditUser.scss';

const EditUser = ({ toggleEditMode, updateUserName }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [newUsername, setNewUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user && user.userName) {
      setNewUsername(user.userName);
    }
  }, [user]);

  const handleUserNameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleSubmitUsername = async (event) => {
    event.preventDefault();
  
    setIsLoading(true);
    dispatch(changeUsernameRequest());
  
    try {
      const updatedUser = await changeUsername(newUsername, user.token);  
      dispatch(changeUsernameSuccess({ newUsername: updatedUser.userName }));
      setIsLoading(false);
      updateUserName(updatedUser.userName);
      toggleEditMode(); 
    } catch (error) {
      dispatch(changeUsernameFailure(error));
      setErrorMessage('Failed to update username. Please try again.');
      setIsLoading(false);
    }
  };
  
  return (
    <div className="edit-user-info">
    <h2>Edit user info</h2>
    <form>
      <div className="edit-input">
        <label htmlFor="username">User name:</label>
        <input
          type="text"
          id="username"
          value={newUsername}
          onChange={handleUserNameChange}
          disabled={isLoading}
        />
      </div>
      {user && (
        <>
          <div className="edit-input">
            <label htmlFor="firstname">First name:</label>
            <input
              type="text"
              id="firstname"
              value={user.firstName}
              disabled={true}
            />
          </div>
          <div className="edit-input">
            <label htmlFor="lastname">Last name:</label>
            <input
              type="text"
              id="lastname"
              value={user.lastName}
              disabled={true}
            />
          </div>
        </>
      )}
      <div className="buttons">
        <button className="edit-username-button" onClick={handleSubmitUsername} disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save'}
        </button>
        <button className="edit-username-button cancel-button" onClick={() => toggleEditMode()} disabled={isLoading}>
          Cancel
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  </div>
);
};
export default EditUser;
