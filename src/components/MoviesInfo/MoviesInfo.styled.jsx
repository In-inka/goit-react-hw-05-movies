import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Movie = styled.div`
  display: flex;
  gap: 20px;
`;

export const Container = styled.div`
  padding: 15px;
`;

export const Link = styled(NavLink)`
  max-width: 150px;
  display: block;
  font-size: 25px;
  color: black;
  text-decoration: none;
  padding: 5px;
  margin-bottom: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

export const Back = styled(NavLink)`
  max-width: 150px;
  display: block;
  font-size: 15px;
  margin-bottom: 10px;
  color: rgb(65, 88, 136);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.01);
  }
`;

export const Picture = styled.img`
  box-shadow: 0px 1px 6px rgba(24, 106, 112, 0.8),
    0px 1px 1px rgba(39, 63, 66, 0.16), 0px 2px 1px rgba(16, 93, 90, 0.16);
  border-radius: 4px;
`;
