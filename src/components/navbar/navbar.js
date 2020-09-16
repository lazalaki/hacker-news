import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  registerRoute,
  loginRoute,
  homepageRoute,
} from '../../shared/routes/routes';
import logo from '../../images/logo.svg';
import './navbar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

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
          <div className={'navbar__links--left'}>
            <Link to={homepageRoute()} className="links">
              New
            </Link>

            <Link to={homepageRoute()} className="links">
              Past
            </Link>

            <Link to={homepageRoute()} className="links">
              Comments
            </Link>

            <Link to={homepageRoute()} className="links">
              Ask
            </Link>

            <Link to={homepageRoute()} className="links">
              Show
            </Link>

            <Link to={homepageRoute()} className="links">
              Jobs
            </Link>

            <Link to={homepageRoute()} className="links">
              Submit
            </Link>
          </div>

          <div className={'navbar__links--rights'}>
            <Link to={loginRoute()} className="links">
              Login
            </Link>
            <Link to={registerRoute()} className="links">
              Register
            </Link>
          </div>
        </div>

        {menu ? (
          <div className="mobile__navbar">
            <Link
              to={homepageRoute()}
              className="links"
              onClick={() => setMenu(!menu)}
            >
              New
            </Link>

            <Link
              to={homepageRoute()}
              className="links"
              onClick={() => setMenu(!menu)}
            >
              Past
            </Link>

            <Link
              to={homepageRoute()}
              className="links"
              onClick={() => setMenu(!menu)}
            >
              Comments
            </Link>

            <Link
              to={homepageRoute()}
              className="links"
              onClick={() => setMenu(!menu)}
            >
              Ask
            </Link>

            <Link
              to={homepageRoute()}
              className="links"
              onClick={() => setMenu(!menu)}
            >
              Show
            </Link>

            <Link
              to={homepageRoute()}
              className="links"
              onClick={() => setMenu(!menu)}
            >
              Jobs
            </Link>

            <Link
              to={homepageRoute()}
              className="links"
              onClick={() => setMenu(!menu)}
            >
              Submit
            </Link>

            <Link
              to={loginRoute()}
              className="links"
              onClick={() => setMenu(!menu)}
            >
              Login
            </Link>
            <Link
              to={registerRoute()}
              className="links"
              onClick={() => setMenu(!menu)}
            >
              Register
            </Link>
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
