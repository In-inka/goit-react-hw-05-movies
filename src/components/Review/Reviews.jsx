import * as Api from '../../service/Api.js';

import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [rewiews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    reviewsInfo(movieId);
  }, [movieId]);

  const reviewsInfo = async id =>
    Api.geReviews(id)
      .then(({ results }) => {
        setReviews([...results]);
      })
      .catch(err => {
        console.log(err);
      });
  return (
    <div>
      {rewiews.length === 0 && (
        <div>Oppss...there is no information on this!</div>
      )}
      <ul>
        {rewiews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
