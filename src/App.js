'use client';

// styles
import './App.css';

// images
import standardsImg from '../public/standards.png';

// data
import { standards } from './standards.js';

// hooks
import { useState, useEffect } from 'react';

// components
import ImageHotspots from 'react-image-hotspots';
import Hotspot from './components/hotspot';
import BgModal from './components/modal';

function App() {
  const [currentStandard, setCurrentStandard] = useState({
    id: 0,
    bgImage: null,
    color: null,
  });
  const [open, setOpen] = useState(false);

  const createHotspots = () => {
    const hotspotArray = [];
    Object.values(standards).map((standard) => {
      hotspotArray.push({
        x: standard.x,
        y: standard.y,
        content: (
          <Hotspot
            key={standard.id}
            standard={standard}
            setCurrentStandard={setCurrentStandard}
            setOpen={setOpen}
          />
        ),
      });
    });
    return hotspotArray;
  };
  return (
    <div
      className='App'
      style={{
        height: '90vh',
        width: '100%',
      }}>
      <BgModal
        open={open}
        setOpen={setOpen}
        backgroundImage={currentStandard.bgImage}
        standard={currentStandard}
        setCurrentStandard={setCurrentStandard}
        currentStandard={currentStandard}
      />
      <ImageHotspots
        src={standardsImg}
        alt='Thirteen Standards Of Knowledge'
        className='standards'
        hideFullscreenControl
        hotspots={createHotspots()}
        hideZoomControls
      />
    </div>
  );
}

export default App;
