
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const menuConfig = [
  { name: 'About', link: '/about' },
  { name: 'Tour', link: '/tour' },
  { name: 'about', link: '/about' },
]

const Nav = styled.header`
  position:fixed;
  z-index:2;
  top: 0;
  left: 0;
  width: 10%;
  height: 100%;
  background-color:#fff;
  h1 {
    text-align: center;
    color: #1abc9c;
  }
  i {
    font-size:3rem;
  }
  @media (max-width: 60em) {
    width: 100%;
    height: 40px;
    .logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px;
      background-color:#fff;
    }
    h1 {
      margin: 0;
      i {
      font-size:2.2rem;
    }
    }
  }
`;

const Menu = styled.a`
  position: absolute;
  bottom: 10px;
  left: calc(50% - 14px);
  display: block;
  width: 28px;
  height: 20px;
  margin: 10px auto 10px;
  &.open {
    span {
      background-color: transparent;
      &:before {
        transform: rotate(45deg) translate(5px, 5px);
      }
      &:after {
        transform: rotate(-45deg) translate(7px, -8px);
      }
    }
    .menu-list {
      transform: translate3d(0, -240px, 0);
      opacity:1;
    }
  }
  span {
    position: relative;
    display: block;
    &,
    &:after,
    &:before {
      width: 100%;
      height: 5px;
      background-color: #1abc9c;
      transition: all 0.3s;
      backface-visibility: hidden;
      border-radius: 2px;
    }
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: -9px;
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 9px;
    }
  }
  .menu-list {
    position: absolute;
    z-index: -1;
    top: 0;
    left: -100%;
    width: 300%;
    background:#fff;
    transform: translate3d(0, 240px, 0);
    transition: transform 0.35s, opacity 0.25s;
    opacity: 0;
    text-align: center;
    li + li {
      border-top: 1px #1abc9c dashed;
    }
    a {
      color: #1abc9c;
      padding: 10px;
      display: block;
    }
  }
  @media (max-width: 60em) {
    top: 10px;
    bottom: auto;
    left: auto;
    right: 10px;
    &.open {
      .menu-list{
        transform: translate3d(calc(-100vw + 38px),20px,0);
      }
    }
    .menu-list{
      width: 100vw;
      top: 0px;
      left: 0;
      transform: translate3d(calc(-100vw + 38px), -240px, 0);
      background:#1abc9c;
      li + li {
      border-top: 1px #fff dashed;
    }
    a {
      color: #fff;
    }
    }
  }
`;

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Nav>
      <NavLink className="logo" to="/">
        <h1><i className="twicon-main-island"></i> <span> Taiwan Travel</span></h1>
      </NavLink>
      <Menu className={showMenu ? 'open': ''} onClick={()=> setShowMenu(!showMenu)}>
        <span/>
        <ul className='menu-list'>
          {menuConfig.map(item => <li key={item.name}><Link to={item.link}>{item.name}</Link></li>)}
        </ul>
      </Menu>
    </Nav>
  );
}
