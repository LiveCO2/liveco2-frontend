import React from 'react';

import "./Home.scss"

import CardWithImage from '../../CardWithImage';
import CardText from '../../CardText';
import CardList from '../../CardList';
import KeyPoints from '../../KeyPoints';
import iconCarrot from '../../icons/carrot.svg'
import iconSolarPanel from '../../icons/045-solar-panel.svg'
import iconElectricCar from '../../icons/010-electric-car.svg'
import iconTree1 from '../../icons/tree-1.svg'
import iconTree2 from '../../icons/tree-2.svg'
import iconTree3 from '../../icons/tree-3.svg'
import Button from '../../Button';

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
        <KeyPoints />
        <div className="keyPointsButton">
            <Button link="enroll-trees" tk="keyPoints.button"/>
        </div>
        <div className="rowContainer">
          <div className="row">
            <CardText />
          </div>
        </div>
        <CardWithImage />
        <div className="homeImpact">
            <h2 className="homeImpactTitle">Nuestro proyecto en numeros</h2>
            <div className="homeImpactStats">
               <div className="homeImpactStat">
                   <h4>Hectareas de bosque auditadas</h4>
                   <div className="homeImpactStatNumber" value="10.9">10.9</div>
               </div>
               <div className="homeImpactStat">
                   <h4>Toneladas Absorbidas auditadas</h4>
                   <div className="homeImpactStatNumber" value="152.89">152.89</div>
               </div>
               <div className="homeImpactStat">
                   <h4>Toneladas de carbono compensadas</h4>
                   <div className="homeImpactStatNumber" value="87.12">87.12</div>
               </div>
            </div>
        </div>
    </div>
);

export default Home;
