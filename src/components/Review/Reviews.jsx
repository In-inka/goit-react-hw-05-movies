import React from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../service/Api.js';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [rewiews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    Api.geReviews(movieId)
      .then(({ results }) => {
        console.log(results);
        setReviews([...results]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [movieId]);

  console.log(rewiews);
  return (
    <div>
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
