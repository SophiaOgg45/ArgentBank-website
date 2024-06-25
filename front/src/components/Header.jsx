import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../assets/img/argentBankLogo.webp';
import { logout } from '../redux/authSlice';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isConnected = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(logout());
    // Ajoutez ici d'autres actions de nettoyage ou de redirection après la déconnexion si nécessaire
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to='/'>
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isConnected ? (
          <React.Fragment>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {user.userName}
            </Link>
            <Link className="main-nav-item" to="/" onClick={logoutHandler}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </React.Fragment>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
