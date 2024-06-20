// authMiddleware.js

import * as authActions from '../redux/authSlice';
import { changeUsername } from '../core/api'; 

const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === authActions.changeUsernameRequest.type) {
    const { auth } = store.getState();
    const { token } = auth;

    if (!token) {
      console.error('Token manquant');
      store.dispatch(authActions.logout());
      return;
    }

    try {

      const response = await changeUsername(action.payload.newUsername, token);
      if (response.status === 200) {
      
        store.dispatch(authActions.changeUsernameSuccess({ newUsername: action.payload.newUsername }));
      } else {
        console.error('La mise à jour du nom d\'utilisateur a échoué.');
    
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du nom d\'utilisateur :', error);
      
    }
  }

  return next(action);
};

export default authMiddleware;
