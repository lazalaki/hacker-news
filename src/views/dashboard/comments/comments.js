import React, { useContext, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import axios from 'axios';
import SingleNews from '../../../components/singleNews/singleNews';

const Comments = () => {
  const location = useLocation();
  const [singleNews, setSingleNews] = useState();

  useEffect(() => {
    if (singleNews === null) {
      return;
    }
    const newsId = queryString.parse(location.search).comments;
    getNewsById(newsId);
  }, [location.search]);

  const getNewsById = async (newsId) => {
    const requests = axios.get(
      'https://hacker-news.firebaseio.com/v0/item/' +
        newsId +
        '.json',
    );

    const arrayData = await Promise.resolve(requests);

    setSingleNews(arrayData);
  };

  if (!singleNews) {
    return <></>;
  }

  return (
    <>
      <div className>
        <SingleNews singleNews={singleNews.data} />
      </div>
    </>
  );
};

export default Comments;
