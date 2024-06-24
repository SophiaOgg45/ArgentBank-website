import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailure } from '../redux/authSlice';
import { logUser, getUserProfile } from '../core/api';
import './Login.scss';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // État pour Remember Me
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  // Récupérer les données d'email et de mot de passe depuis localStorage au chargement initial
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true); // Activer Remember Me si des données sont trouvées
    }
  }, []); // Effect déclenché une seule fois après le premier rendu

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await logUser(email, password);
      if (userData.body && userData.body.token) {
        const token = userData.body.token;

        // Si Remember Me est activé, enregistrer l'email dans localStorage
        if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password); // Note : Stocker le mot de passe dans localStorage n'est pas sécurisé.
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }

        const userProfile = await getUserProfile(token);
        userProfile.body.token = token;
        dispatch(loginSuccess(userProfile.body));
        navigate('/profile'); // Redirection après connexion réussie
      } else {
        dispatch(loginFailure('Login failed'));
      }
    } catch (error) {
      dispatch(loginFailure('Login failed'));
    }
  };

  return (
    <div className="main bg-dark">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
          </form>
          {authStatus === 'loading' && <p>Loading...</p>}
          {authStatus === 'failed' && <p>Error: {authError}</p>}
        </section>
      </main>
    </div>
  );
};

export default Login;
