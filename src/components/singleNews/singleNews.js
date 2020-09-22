import React from 'react';
import Moment from 'react-moment';

import './singleNews.scss';
import { commentsRoute } from '../../shared/routes/routes';

const SingleNews = ({ singleNews }) => {
  const url = singleNews.url
    ? singleNews.url
        .replace('https', '')
        .replace('http', '')
        .replace('www.', '')
        .split(/[:/]/)
    : '';

  return (
    <>
      <div className="card">
        <div className="card__header">
          <h3 className="card__header__title">
            <a
              href={singleNews.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {singleNews.title}
            </a>
          </h3>
          <a href={singleNews.url}> {url[3]}</a>
        </div>
        <div className="card__footer">
          <p>
            {singleNews.score} point by {singleNews.by}
            <Moment fromNow>{singleNews.time}</Moment>
          </p>
          <p className="card__footer__comments">
            <a href={commentsRoute() + '?comments=' + singleNews.id}>
              Comments
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleNews;
