import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
//if (!results) return;
export const Head = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(65, 88, 136, 1) 0%,
    rgba(100, 214, 221, 1) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 25px;
`;

export const Link = styled(NavLink)`
  color: white;
  font-size: 25px;
  font-weight: bold;

  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 0.5);
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.08);
  }
`;
