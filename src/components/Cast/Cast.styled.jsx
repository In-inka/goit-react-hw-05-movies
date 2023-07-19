import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  padding: 10px;
  box-shadow: 0px 1px 6px rgba(24, 106, 112, 0.8),
    0px 1px 1px rgba(39, 63, 66, 0.16), 0px 2px 1px rgba(16, 93, 90, 0.16);
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;
