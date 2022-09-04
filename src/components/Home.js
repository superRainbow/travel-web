import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';

const gridConfig = [
  {url: '/img/climb.jpeg', description: 'Mountain'},
  {url: '/img/diving.jpeg', description: 'Sea'},
  {url: '/img/101.jpeg', description: 'Taiwan 101'},
  {url: '/img/food.jpeg', description: 'Food'},
  {url: '/img/culture.jpeg', description: 'Tradition'},
  {url: '/img/night_market.jpeg', description: 'Night Market'},
  {url: '/img/landscape.png', description: 'View'},
  {url: '/img/lanyu.jpeg', description: 'Islands'},
  {url: '/img/sky_lantern.jpeg', description: 'Culture'},
]

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 60em) {
    display: block;
  }
`;
const Header = styled.header`
display: flex;
flex-flow: column;
align-self: center;
padding: 2rem;
font-size: 1em;`
const Title = styled.h1`font-size: 3em; color: #1abc9c`;
const Description = styled.p`line-height: 1.4;`;
const Welcome = styled.a`
  position: relative;
  display: flex;
  width:200px;
  box-sizing: border-box;
  padding: .8em .6em;
  overflow: hidden;
  border: 2px solid #1abc9c;
  color: #1abc9c;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  transition: color 150ms ease-in-out;
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #1abc9c;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    width: 110%;
  }
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 33.3333333333%);
  grid-gap: 0;
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100vh;
`;
const Li = styled.li`
  --offset: 1rem;
  position: relative;
  display: list-item;
  text-align: -webkit-match-parent;
  &:hover ~ &:last-child:after,
  &:last-child:hover:after,
  &:hover ~ &:last-child:before,
  &:last-child:hover:before {
    opacity: 1;
    transition: 1s ease;
  }
  &:last-child:after,
  &:last-child:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    pointer-events: none;
    clip-path: polygon(var(--offset) var(--offset), var(--offset) calc(100% - var(--offset)), calc(100% - var(--offset)) calc(100% - var(--offset)), calc(100% - var(--offset)) var(--offset));
    -webkit-clip-path: polygon(var(--offset) var(--offset), var(--offset) calc(100% - var(--offset)), calc(100% - var(--offset)) calc(100% - var(--offset)), calc(100% - var(--offset)) var(--offset));
    opacity: 0;
    transition: opacity 1s, transform 1s 1s, background 1s;
  }
  &:last-child:after {
    mix-blend-mode: multiply;
    background: #aaafc3;
  }
  &:last-child:before {
    backdrop-filter: grayscale(100%) blur(2px);
    -webkit-backdrop-filter: grayscale(100%) blur(2px);
  }
  &:nth-child(1):hover ~ &:last-child:after {
    background: #f1c40f;
  }
  &:nth-child(2):hover ~ &:last-child:after {
    background: #3498db;
  }
  &:nth-child(3):hover ~ &:last-child:after {
    background: #aaafc3;
  }
  &:nth-child(4):hover ~ &:last-child:after {
    background: #a88504;
  }
  &:nth-child(5):hover ~ &:last-child:after {
    background: #e74c3c;
  }
  &:nth-child(6):hover ~ &:last-child:after {
    background: #6c4331;
  }
  &:nth-child(7):hover ~ &:last-child:after {
    background: #a5d6a7;
  }
  &:nth-child(8):hover ~ &:last-child:after {
    background: #a88504;
  }
  &:last-child:hover:after {
    background: #1A237E;
  }
  &:last-child:after,
  &:last-child:before {
    left: 100%;
    transform: translate3d(-100%, -100%, 0);
  }
  &:nth-child(1):hover ~ &:last-child:after,
  &:nth-child(1):hover ~ &:last-child:before {
    transform: translate3d(-300%, -200%, 0);
  }
  &:nth-child(2):hover ~ &:last-child:after,
  &:nth-child(2):hover ~ &:last-child:before {
    transform: translate3d(-200%, -200%, 0);
  }
  &:nth-child(3):hover ~ &:last-child:after,
  &:nth-child(3):hover ~ &:last-child:before {
    transform: translate3d(-100%, -200%, 0);
  }
  &:nth-child(4):hover ~ &:last-child:after,
  &:nth-child(4):hover ~ &:last-child:before {
    transform: translate3d(-300%, -100%, 0);
  }
  &:nth-child(5):hover ~ &:last-child:after,
  &:nth-child(5):hover ~ &:last-child:before {
    transform: translate3d(-200%, -100%, 0);
  }
  &:nth-child(6):hover ~ &:last-child:after,
  &:nth-child(6):hover ~ &:last-child:before {
    transform: translate3d(-100%, -100%, 0);
  }
  &:nth-child(7):hover ~ &:last-child:after,
  &:nth-child(7):hover ~ &:last-child:before {
    transform: translate3d(-300%, 0%, 0);
  }
  &:nth-child(8):hover ~ &:last-child:after,
  &:nth-child(8):hover ~ &:last-child:before {
    transform: translate3d(-200%, 0%, 0);
  }
  &:last-child:hover:after,
  &:last-child:hover:before {
    transform: translate3d(-100%, 0%, 0);
  }
  &:hover .description {
    opacity: 1;
    transition: 0.6s 0.3s;
  }
`;
const Img = styled.img`
  display: block;
  height: 100%;
  max-width: 100%;
  width: 100%;
  object-fit: cover;
`;
const ImgDescription = styled.span`
  font-size: 1.25rem;
  position: absolute;
  display: block;
  right: 2rem;
  left: 2rem;
  text-align: center;
  top: 50%;
  width: 60px;
  margin: auto;
  color: white;
  z-index: 100;
  opacity: 0;
  transform: translate3d(0, -50%, 0);
  transition: 0.3s 0s;
`;

export default function Home() {
  return (
    <Body>
      <Header>
        <Title><i className="twicon-main-island"></i>Taiwan Travel</Title>
        <Description><strong>Taiwan</strong> is a beautiful island located off the coast of Mainland China.There are many things to do and places to visit in Taiwan. For instance, Taipei 101. Taipei 101 is one of the tallest buildings in the world. Also, the National Palace Museum houses many national treasures. When you’re in Taiwan, you can’t miss the famous Taiwanese night markets. </Description>
        <Description><strong>Taiwanese</strong> people are extremely friendly, nice, polite, and hospitable.</Description>
        <NavLink to="/about">
          <Welcome>Welcome to Taiwan →</Welcome>
        </NavLink>
      </Header>
      <Ul>
        {gridConfig.map((item, key) => 
          <Li className='item' key={`grid-item-${key}`}>
              <Img src={process.env.PUBLIC_URL + item.url} alt=""/>
              <ImgDescription className="description">{item.description}</ImgDescription>
          </Li>
        )}
      </Ul>
    </Body>
  );
}
