import React from 'react';
import { Link } from 'react-router-dom';
import {
  loginRoute,
  registerRoute,
} from '../../../shared/routes/routes';

const NonAuthNavbarLinks = ({ onClick }) => {
  const nonAuthNavbarLinks = [
    {
      id: 1,
      to: registerRoute(),
      className: 'links',
      name: 'Register',
    },
    { id: 2, to: loginRoute(), className: 'links', name: 'Login' },
  ];
  return (
    <>
      {nonAuthNavbarLinks.map((link) => {
        return (
          <Link
            to={link.to}
            className={link.className}
            onClick={onClick}
            key={link.id}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default NonAuthNavbarLinks;
