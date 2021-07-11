import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
  const { user } = props;
  console.log("user", user);
  console.log("props", props);
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  }
  
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__h1">InstaVideos</h1>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt="" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><Link to="/">{user.name}</Link></li> :
            null
          }

          {hasUser ?
            <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li> :
            <li><Link to="/login">Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
