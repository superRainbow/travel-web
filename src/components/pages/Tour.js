import { useState } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import OPEN_API from '../../utils/api';

const Content = styled.div`
  padding: 30px;
`;
const Select = styled.select`
  position:relative;
  display:block;
  cursor: pointer;
  border: 2px solid #1abc9c;
  font-size: 150%;
  padding: 0.5em 2em 0.5em 0.5em;
  color: #1abc9c;
  appearance: none;
  @media (max-width: 60em) {
  }
`;

export default function Tour() {
  const navigate = useNavigate();
  const { town } = useParams();
  const towns = Object.keys(OPEN_API);
  const changeRouter = (target)=> navigate(target);

  return (
    <Content>
      <Select value={town || 'default'} onChange={(e)=>changeRouter(e.target.value)}>
        <option value={'default'} disabled>Choose an option city</option>
        {towns.map(town => <option key={town} value={town}>{town}</option>)}
      </Select>
      <Outlet/>
    </Content>
  );
}
