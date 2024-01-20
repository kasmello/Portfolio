import logo from './logo.svg';
import RoundedCard from './hypercard';
import HearMeThumbnail from './hearmethumbnail.png'
import MapMeThumbnail from './mapmethumbnail.png'
import CyberThumbnail from './cyberthumb.png'
import WhaleThumbnail from './whalethumb.png'
import PriceThumbnail from './pricethumb.png'
import CCThumbnail from './ccthumb.png'
import CyberPDF from './cybersecurityml.pdf'
import WhalePDF from './humpbacknn.pdf'
import CCPDF from './ccda.pdf'
import React from 'react'
import { isMobile } from 'react-device-detect';
import parse from 'html-react-parser'
import './App.css';

function App() {
  document.title = "Karmel's Portfolio"
  return (
    <div>
      <div className='Header'>
        <h1 style={{
          marginLeft: '4vw', 
          paddingTop: '100px', 
          fontFamily: 'EB Garamond, serif',
          fontSize: isMobile ? '2em' : '5em'}}>Joannes Karmel Gandahusada</h1>
        <h3 style={{marginLeft: '6vw', paddingBottom: '40px', fontFamily: 'EB Garamond, serif',fontSize: isMobile? '1em' : '1.5em'}}>Data Scientist/Fullstack Developer/AI Engineer</h3>
      </div>
      <div className='Background-theme'>
        <p style={{marginLeft: '4vw', paddingTop: '50px'}}>Since 2019, I have been dedicated to studying and advancing my skills in AI and data science. My journey has been marked by a commitment to continuous learning, and exploring the latest advancements in these fields. In 2021, I started working professionally and have loved it ever since, successfully leveraging my expertise to real-world applications.</p>
        <p style={{marginLeft: '4vw'}}>Click on the bubbles below to see the my academic and passion projects that I have worked on during university and my free time.</p>
        <div className="Thumbnail-collection">
          <RoundedCard
            imageSrc={HearMeThumbnail}
            label="HearMe"
            description={parse("An <b>Angular</b> app that detects the pitch & note of your voice.")}
            link="https://kasmello.github.io/HearMe/"
          />
          <RoundedCard
            imageSrc={MapMeThumbnail}
            label="MapMe"
            description={parse('An <i>Angular</i> app designed to plan appropriate fod/fuel stops on road trips. Write down your destinations and rearrange them! <i>IN PROGRESS</i>')}
            link="https://kasmello.github.io/MapMe/"
          />
          <RoundedCard
            imageSrc={PriceThumbnail}
            label="PriceTracker"
            description={parse('A <i>React</i> app designed to track the price of items. Currently only tracking fuel from fuelwatch.wa.gov.au. <i>IN PROGRESS</i>')}
            link="https://kasmello.github.io/PriceTracker/"
          />
          <RoundedCard
            imageSrc={WhaleThumbnail}
            label="Neural Networks for Humback Audio Classification"
            description={parse('My Honours academic <i>paper</i> which looked into<br><i>transformers</i> and <i>neural networks</i> using <i>Python</i> to detect different Humback Whale vocalisations.')}
            link={WhalePDF}
          />
          <RoundedCard
            imageSrc={CCThumbnail}
            label="Fraudulent Credit Card Detection"
            description={parse('An academic <i>paper</i> which analysed the data of credit card transactions using <i>statistical analysis</i> and <i>machine learning</i> methods to detect credit card fraudulent activity.')}
            link={CCPDF}
          />
          <RoundedCard
            imageSrc={CyberThumbnail}
            label="AI to Prevent Cyber Security Attacks"
            description={parse('An academic <i>paper</i> which compared the performance of several <i>machine learning</i> methods in cyber intrusion detecion.')}
            link={CyberPDF}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
