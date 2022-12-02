import React from 'react';
import {NavLink} from "react-router-dom";
import style from './navigation.module.css';

function Navigation() {
  return (
    <nav className={style.navMenu}>
      <NavLink exact to={'/'} activeClassName={style.active}>Home</NavLink>
      <NavLink to={'/profile'} activeClassName={style.active}>Profile</NavLink>
      <NavLink to={'/dialogs'} activeClassName={style.active}>Messages</NavLink>
      <NavLink to={'/users'} activeClassName={style.active}>Users</NavLink>
    </nav>
  );
}

export default Navigation;
