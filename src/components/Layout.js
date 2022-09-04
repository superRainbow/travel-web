import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import '../index.css';

const Main = styled.main`
  position: relative;
  padding-left: 10%;
  min-height: 100vh;
  background-color: #d8e9e6;
  &>section {
    display: grid;
    min-height: 100vh;
  }
  @media (max-width: 60em) {
    padding-left: 0;
    padding-top: 40px;
    display: block;
  }
`;

export default function Layout() {
  return (
    <Main>
        <Header/>
        <section><Outlet/></section>
    </Main>
  );
}
