import React from 'react';

import CardWithImage from './CardWithImage';
import CardText from './CardText';
import CardList from './CardList';
import iconCarrot from './icons/carrot.svg'
import iconSolarPanel from './icons/045-solar-panel.svg'
import iconElectricCar from './icons/010-electric-car.svg'
import iconTree1 from './icons/tree-1.svg'
import iconTree2 from './icons/tree-2.svg'
import iconTree3 from './icons/tree-3.svg'

const co2Generated = [
  {
    id: 1,
    icon: iconCarrot,
    amount: 'home.card1.item1.amount',
    description: 'home.card1.item1.concept',
  },
  {
    id: 2,
    icon: iconSolarPanel,
    amount: 'home.card1.item2.amount',
    description: 'home.card1.item2.concept',
  },
  {
    id: 3,
    icon: iconElectricCar,
    amount: 'home.card1.item3.amount',
    description: 'home.card1.item3.concept',
  },
];

const co2Absorbed = [
  {
    id: 1,
    icon: iconTree1,
    amount: 'home.card2.item1.amount',
    description: 'home.card2.item1.concept',
  },
  {
    id: 2,
    icon: iconTree2,
    amount: 'home.card2.item2.amount',
    description: 'home.card2.item2.concept',
  },
  {
    id: 3,
    icon: iconTree3,
    amount: 'home.card2.item3.amount',
    description: 'home.card2.item3.concept',
  },
];

const Home = () => (
    <div>
        <div className="mainRow">
        <CardList title="home.card1.title" list={co2Generated} buttonLink="compensate" />
        <CardList title="home.card2.title" list={co2Absorbed} buttonLink="how-it-works" />
        </div>
        <CardWithImage />
        <div className="rowContainer">
          <div className="row">
            <CardText />
          </div>
        </div>
    </div>
);

export default Home;
