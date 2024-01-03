import logo from './logo.svg';
import RoundedCard from './hypercard';
import HearMeThumbnail from './hearmethumbnail.png'
import MapMeThumbnail from './mapmethumbnail.png'
import React from 'react'
import { isMobile } from 'react-device-detect';
import './App.css';

function App() {
  document.title = "Karmel's Portfolio"
  return (
    <div>
      <div className='Header'>
        <h1 style={{marginLeft: '4vw', paddingTop: '100px', fontFamily: 'EB Garamond, serif',fontSize: isMobile ? '2em' : '5em'}}>Joannes Karmel Gandahusada</h1>
        <h3 style={{marginLeft: '6vw', paddingBottom: '40px', fontFamily: 'EB Garamond, serif',fontSize: isMobile? '1em' : '1.5em'}}>Data Scientist/Fullstack Developer/AI Engineer</h3>
      </div>
      <div className='Background-theme'>
        <p style={{marginLeft: '4vw', paddingTop: '50px'}}>Since 2019, I have been dedicated to studying and advancing my skills in AI and data science. My journey has been marked by a commitment to continuous learning, and exploring the latest advancements in these fields. In 2021, I started working professionally and have loved it ever since, successfully leveraging my expertise to real-world applications.</p>
        <p style={{marginLeft: '4vw'}}>Click on the links below to see the my academic and passion projects that I have worked on during university and my free time.</p>
        <div className="Thumbnail-collection">
          <RoundedCard
            imageSrc={HearMeThumbnail}
            label="HearMe"
            description="An app that detects the pitch & note of your voice"
            link="https://kasmello.github.io/HearMe/"
          />
          <RoundedCard
            imageSrc={MapMeThumbnail}
            label="MapMe"
            description="An app designed to plan appropriate fod/fuel stops on road trips - <i>IN PROGRESS</i>"
            link="https://kasmello.github.io/MapMe/"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
