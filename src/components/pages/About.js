import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import imgUrl from '../../assets/img/taiwan.jpg';

const Content = styled.div`
  padding: 30px;
  background: url(${imgUrl}) #000 no-repeat;
  background-size: cover;
  background-position: center;
`;
const Description = styled.div`
  font-weight:200; 
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 2rem;
  width: 55%;
  margin:2rem;
  float: right;
  font-size: 1.2rem;
  @media (max-width: 60em) {
    width: 100%;
    padding: 1rem;
    margin:1rem auto;
  }
`;

export default function About() {
  return (
    <Content>
      <Description>
        <p><strong>Taiwan</strong> is a beautiful island located off the coast of Mainland China.</p>
        <p>There are many things to do and places to visit in Taiwan.</p>
        <p> For instance, Taipei 101. Taipei 101 is one of the tallest buildings in the world.</p>
        <p>Also, the National Palace Museum houses many national treasures.</p>
        <p>When you’re in Taiwan, you can’t miss the famous Taiwanese night markets.</p>
        <p><strong>Taiwanese</strong> people are extremely friendly, nice, polite, and hospitable.</p>
      </Description>
    </Content>
  );
}
