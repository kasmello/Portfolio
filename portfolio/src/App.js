import logo from './logo.svg';
import RoundedCard from './hypercard';
import HearMeThumbnail from './hearmethumbnail.png'
import MapMeThumbnail from './mapmethumbnail.png'
import './App.css';

function App() {
  return (
    <body>
      <h1>Hi, I'm Karmel</h1>
      <h3>Data Scientist/Fullstack Developer/AI Engineer</h3>
      <p>Since 2019, I have been dedicated to studying and advancing my skills in AI and data science. My journey has been marked by a commitment to continuous learning, and exploring the latest advancements in these fields. In 2021, I started working professionally and have loved it ever since, successfully leveraging my expertise to real-world applications.</p>
      <p>Click on the links below to see the my academic and passion projects that I have worked on during university and my free time.</p>
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
    </body>
  );
}

export default App;
