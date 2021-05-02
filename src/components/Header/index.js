import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <p>Marvel Heroes</p>
      <ul>
        <li>
          <NavLink
            className={styles.hover_link}
            to='/'
            exact
            activeStyle={{ color: '#ff0000' }}
          >
            Home
          </NavLink>
          <NavLink
            className={styles.hover_link}
            to='/characters'
            exact
            activeStyle={{ color: '#ff0000' }}
          >
            Characters
          </NavLink>
          <NavLink
            className={styles.hover_link}
            to='/comics'
            exact
            activeStyle={{ color: '#ff0000' }}
          >
            Comics
          </NavLink>
          <NavLink
            className={styles.hover_link}
            to='/login'
            exact
            activeStyle={{ color: '#ff0000' }}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </header>
  )
};

export default Header;
