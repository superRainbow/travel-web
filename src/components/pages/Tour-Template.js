import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import OPEN_API from '../../utils/api';
import Loading from '../Loading';

const Cards = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  flex-flow: row;
  flex-wrap: wrap;
  gap: 40px 20px;
  justify-content: center;
`;

const Card = styled.div`
  position: relative;
  display:flex;
  width: 20%;
  height:350px;
  text-align: center;
  color: whitesmoke;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 10%), 0 4px 4px rgb(0 0 0 / 10%), 0 8px 8px rgb(0 0 0 / 10%), 0 16px 16px rgb(0 0 0 / 10%);
  overflow: hidden;
  cursor: pointer;
  
  &:after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.32) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.54) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.79) 100%);
    transform: translateY(-50%);
    transition: transform calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover {
    align-items: center;
    :after{
      transform: translateY(-50%);
    }
    .card-img{
      transform: translateY(-4%);
    }
    .card-info {
      transform: translateY(0);
    }
    small {
      opacity: 1;
      transform: translateY(0);
      transition-delay: calc(700ms / 8);
    }
  }
`;

const CardImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 110%;
  object-fit: cover;
  object-position: 50% 50%;
  transition: transform calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
`;
const CardInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  padding: 1rem;
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
  & > * + * {
    margin-top: 1rem;
  }
  small {
    opacity: 0;
    transform: translateY(1rem);
    transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1), opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export default function TourTemplate() {
  const { town } = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log('location', location);

  const getOpenAPI = () =>
    fetch(OPEN_API[town].url)
      .then((res) => res.json())
      .then((res) => setData(OPEN_API[town].data.reduce((previousValue, currentValue) => previousValue[currentValue], res)));

  const init = async () => {
    await setIsLoading(true);
    await getOpenAPI();
    await setIsLoading(false);
  };

  useEffect(() => {init()}, [town]);

  return (
    isLoading ? <Loading/> :  <Cards>
      {data.map((item, key) => (
        <Card key={`card-item-${key}`}>
          <CardImg className='card-img' src={item[OPEN_API[town].params.img]} />
          <CardInfo className='card-info'>
            <h3>{item[OPEN_API[town].params.title]}</h3>
            <small>{item[OPEN_API[town].params.time]}</small>
          </CardInfo>
        </Card>
      ))}
    </Cards>
  );
}
