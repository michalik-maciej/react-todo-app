import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import styles from './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to="/">
              <Icon name={settings.headerIcon}></Icon>
            </Link>
            <nav>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink exact to="/info" activeClassName="active">
                Info
              </NavLink>
              <NavLink exact to="/faq" activeClassName="active">
                FAQ
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
