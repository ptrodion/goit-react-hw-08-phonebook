import styled from 'styled-components';

export const ListItemSt = styled.li`
  display: flex;
  text-align: center;
  gap: 12px;
`;

export const ListItemButtonSt = styled.button`
  width: 56px;
  height: 25px;
  outline: transparent;
  border: 1px solid #8b8ba4;
  border-radius: 4px;
  background-color: #45449e;
  color: #ffffff;
  &:hover {
    background-color: #1565c0;
    color: #ffffff;
  }

  &:focus {
    border-color: #1565c0;
  }
`;

export const ContactsDate = styled.p`
  min-width: 300px;

  margin: 0px;
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 12px;
`;
