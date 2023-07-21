import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 15px;
`;

export const SearchForm = styled.form`
  max-width: 350px;
  margin-bottom: 15px;
  border: 2px solid rgb(65, 88, 136, 0.2);
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  color: rgb(64, 65, 65);
  background-color: mintcream;
  border-radius: 3px;
  overflow: hidden;
`;

export const MyStyledInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Btn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url(https://icon-library.com/images/search-bar-icon-png/search-bar-icon-png-15.jpg);
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  box-shadow: -5px -5px 10px #18b5c0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;
export const Label = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Item = styled.li`
  text-decoration: none;
  max-width: 400px;
  padding: 5px;
  margin-bottom: 5px;
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
