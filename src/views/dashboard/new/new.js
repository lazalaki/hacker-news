import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleNews from '../../../components/singleNews/singleNews';

import './new.scss';

const New = () => {
  const [allIds, setAllIds] = useState([]);
  const [loadMoreNews, setLoadMoreNews] = useState(10);
  const [news, setNews] = useState([]);

  useEffect(() => {
    newNews();
  }, []);

  const newNews = async () => {
    const { data } = await axios.get(
      'https://hacker-news.firebaseio.com/v0/newstories.json',
    );
    setAllIds(data);
    getTenNews(data);
  };

  const getTenNews = async (ids) => {
    const requests = ids
      .slice(0, loadMoreNews)
      .map((id) =>
        axios.get(
          'https://hacker-news.firebaseio.com/v0/item/' +
            id +
            '.json',
        ),
      );

    const arrayData = await Promise.all(requests);
    setNews(
      arrayData
        .map((data) => data.data)
        .filter((item) => item !== null),
    );
    setLoadMoreNews(loadMoreNews + 10);
  };

  return (
    <>
      <div className="news">
        {news.map((singleNews) => {
          return (
            <SingleNews key={singleNews.id} singleNews={singleNews} />
          );
        })}
        <button
          onClick={() => getTenNews(allIds)}
          className="news__button"
        >
          Load More...
        </button>
      </div>
    </>
  );
};

export default New;
