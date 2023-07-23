import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  text-decoration: none;
  max-width: 400px;
  padding: 5px;
  margin-bottom: 5px;
  background-color: white;
  box-shadow: 0px 1px 6px rgba(24, 106, 112, 0.8),
    0px 1px 1px rgba(39, 63, 66, 0.16), 0px 2px 1px rgba(16, 93, 90, 0.16);
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2);
  &:hover {
    transform: translate(1px, 1px);
    cursor: pointer;
  }
  &:focus {
    transform: translate(1px, 1px);
    cursor: pointer;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:hover {
    color: rgb(65, 88, 136);
  }
  &:focus {
    color: rgb(65, 88, 136);
  }
`;
