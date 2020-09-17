import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  homepageRoute,
  loginRoute,
} from '../../shared/routes/routes';

const AuthNavbarLinks = ({ onClick }) => {
  const authLink = [
    { id: 1, to: homepageRoute(), className: 'links', name: 'New' },
    { id: 2, to: homepageRoute(), className: 'links', name: 'Past' },
    {
      id: 3,
      to: homepageRoute(),
      className: 'links',
      name: 'Comments',
    },
    { id: 4, to: homepageRoute(), className: 'links', name: 'Ask' },
    { id: 5, to: homepageRoute(), className: 'links', name: 'Show' },
    { id: 6, to: homepageRoute(), className: 'links', name: 'Jobs' },
    {
      id: 7,
      to: homepageRoute(),
      className: 'links',
      name: 'Submit',
    },
    {
      id: 8,
      to: loginRoute(),
      className: 'links links-right',
      name: 'Logout',
    },
  ];

  return (
    <>
      {authLink.map((link) => {
        return (
          <Link
            onClick={onClick}
            to={link.to}
            className={link.className}
            key={link.id}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default AuthNavbarLinks;
