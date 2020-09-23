import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import axios from 'axios';
import SingleNews from '../../../components/singleNews/singleNews';

import './comments.scss';
import Moment from 'react-moment';

const Comments = () => {
  const location = useLocation();
  const [singleNews, setSingleNews] = useState();
  const [comments, setComments] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (singleNews === null) {
      return;
    }
    const newsId = queryString.parse(location.search).comments;
    getNewsById(newsId);
  }, [location.search]);

  useEffect(() => {
    if (singleNews && singleNews.kids.length !== 0) {
      getCommentsById();
    }
  }, [singleNews]);

  const getNewsById = async (newsId) => {
    const requests = axios.get(
      'https://hacker-news.firebaseio.com/v0/item/' +
        newsId +
        '.json',
    );

    const { data } = await Promise.resolve(requests);

    setSingleNews(data);
  };

  if (!singleNews) {
    return <></>;
  }

  const getCommentsById = async () => {
    const requests = singleNews.kids.map((kidId) => {
      return axios.get(
        'https://hacker-news.firebaseio.com/v0/item/' +
          kidId +
          '.json',
      );
    });
    const arrayData = await Promise.all(requests);

    setComments(
      [...comments, ...arrayData.map((data) => data.data)].filter(
        (element) => element && element.deleted !== true,
      ),
    );
  };

  return (
    <>
      <div className="comments__container">
        <div className="news">
          <h3>News:</h3>
          <SingleNews singleNews={singleNews} />
        </div>
        <div className="comments">
          <h3>Comments:</h3>
          {comments.map((comment) => {
            return (
              <div className="comments__comment" key={comment.id}>
                <div className="comments__header">
                  <p>
                    {comment.text
                      ? comment.text.replace(/<[^>]+>/g, '')
                      : ''}
                  </p>
                </div>
                <div className="comments__footer">
                  <p>
                    Posted by: {comment.by}{' '}
                    <Moment fromNow>{comment.time}</Moment>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Comments;
