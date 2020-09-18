import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { loginRoute } from '../../shared/routes/routes';
import logo from '../../images/logo.svg';
import './navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { GlobalStore } from '../../store/global-store';
import AuthNavbarLinks from '../navbarLinks/authNavbarLinks';
import NonAuthNavbarLinks from '../navbarLinks/nonAuthNavbarLinks';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const { logout } = useContext(GlobalStore);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const onClickMenu = () => {
    logout();
    toggleMenu();
  };

  const {
    state: { user },
  } = useContext(GlobalStore);

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img
            src={logo}
            alt="Logo"
            className="navbar__logo__image"
          />
        </div>

        <div className="navbar__links">
          {user ? (
            <div className="navbar__links--right">
              <AuthNavbarLinks />
              <Link
                onClick={logout}
                to={loginRoute()}
                className="links"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className={'navbar__links--rights'}>
              <NonAuthNavbarLinks />
            </div>
          )}
        </div>

        {menu ? (
          <div className="mobile__navbar">
            {user ? (
              <div className="mobile__navbar__auth">
                <AuthNavbarLinks onClick={toggleMenu} />
                <Link
                  onClick={onClickMenu}
                  to={loginRoute()}
                  className="links"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div className="mobile__navbar__nonauth">
                <NonAuthNavbarLinks onClick={toggleMenu} />
              </div>
            )}
          </div>
        ) : (
          ''
        )}

        <div className="navbar__menu">
          <label
            htmlFor="check"
            className="navbar__menu__checkbtn"
            onClick={() => setMenu(!menu)}
          >
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
