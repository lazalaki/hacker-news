import React from 'react';
import { Link } from 'react-router-dom';
import { newRoute } from '../../../shared/routes/routes';

const AuthNavbarLinks = ({ onClick }) => {
  const authLink = [
    { id: 1, to: newRoute(), className: 'links', name: 'News' },
    { id: 2, to: newRoute(), className: 'links', name: 'Past' },
    {
      id: 3,
      to: newRoute(),
      className: 'links',
      name: 'Comments',
    },
    { id: 4, to: newRoute(), className: 'links', name: 'Ask' },
    { id: 5, to: newRoute(), className: 'links', name: 'Show' },
    { id: 6, to: newRoute(), className: 'links', name: 'Jobs' },
    {
      id: 7,
      to: newRoute(),
      className: 'links',
      name: 'Submit',
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
