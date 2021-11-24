import React from 'react';
import Feature from '../../components/feature/Feacture';
import './skills.css';

const featuresData = [
  {
    title: 'FrontEnd Development',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'BackEnd Development',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Programming Skills',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Communication Skill',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="features section__padding" id="features">
    <div className="features-heading">
    <div className="line"><hr/></div>   
      <p>Skills</p>
      <h1 className="gradient__text">The Future is Now and We Just Need to Realize It. Step into Future Today. & Make it Happen...</h1>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
