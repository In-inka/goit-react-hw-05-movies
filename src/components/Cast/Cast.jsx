import * as Api from '../../service/Api.js';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import picture from '../../images/no-image.jpg';
import { List, Item } from './Cast.styled.jsx';

const Cast = () => {
  const [cast, setNameCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const castInfo = async id => {
      try {
        const { cast } = await Api.getCast(id);
        setNameCast([...cast]);
      } catch (error) {
        console.log(error);
      }
    };
    castInfo(movieId);
  }, [movieId]);

  return (
    <div>
      {cast.length === 0 && <div>Oppss...there is no information on this!</div>}
      <List>
        {cast.map(({ character, id, name, profile_path }) => (
          <Item key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                alt={name}
                width="185"
              />
            ) : (
              <img src={`${picture}`} alt={name} width="185" height="278" />
            )}
            <p>
              <b>{name}</b>
            </p>
            <p>
              <b>Character:</b> {character}
            </p>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default Cast;
