import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <Link to="/">
      <h1 className="header__h1">InstaVideos</h1>
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to="/">Cuenta</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
