import { NavLink } from 'react-router-dom'
import style from './navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={style.navMenu}>
      <NavLink exact to={'/'} activeClassName={style.active}>
        Home
      </NavLink>
      <NavLink to={'/profile'} activeClassName={style.active}>
        Profile
      </NavLink>
      <NavLink to={'/subscriptions'} activeClassName={style.active}>
        Subscriptions
      </NavLink>
      <NavLink to={'/dialogs'} activeClassName={style.active}>
        Messages
      </NavLink>
      <NavLink to={'/users'} activeClassName={style.active}>
        Users
      </NavLink>
    </nav>
  )
}
