import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import SingleNews from '../../../components/singleNews/singleNews';

import './new.scss';
import { GlobalStore } from '../../../store/global-store';

const New = () => {
  const [news, setNews] = useState([]);
  const [offset, setOffset] = useState(0);

  const {
    state: { allIds },
  } = useContext(GlobalStore);

  useEffect(() => {
    if (allIds.length === 0) {
      return;
    }
    const nextIds = allIds.slice(offset, offset + 10);

    getTenNews(nextIds);
  }, [offset, allIds]);

  const getTenNews = async (ids) => {
    const requests = ids.map((id) =>
      axios.get(
        'https://hacker-news.firebaseio.com/v0/item/' + id + '.json',
      ),
    );

    const arrayData = await Promise.all(requests);
    console.log(arrayData);

    setNews([
      ...news,
      ...arrayData
        .map((data) => data.data)
        .filter((item) => item !== null),
    ]);
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
          onClick={() => {
            setOffset(offset + 10);
          }}
          className="news__button"
        >
          Load More...
        </button>
      </div>
    </>
  );
};

export default New;
