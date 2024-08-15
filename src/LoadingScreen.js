import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

function LoadingScreen({ onLoadComplete }) {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setProgress1((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval1);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    const interval2 = setInterval(() => {
      setProgress2((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval2);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    const interval3 = setInterval(() => {
      setProgress3((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval3);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  useEffect(() => {
    if (progress1 === 100 && progress2 === 100 && progress3 === 100) {
      onLoadComplete();
    }
  }, [progress1, progress2, progress3, onLoadComplete]);

  return (
    <div className="loading-container">
      <img src={`${process.env.PUBLIC_URL}/Arknights_Logo.png`} className="Start_Logo"></img>
      <div className="spinner"></div>
      <div className="progress-bars">
        <div className="progress-bar">
          <div className="filler" style={{ width: `${progress1}%` }}></div>
        </div>
        <div className="progress-bar">
          <div className="filler" style={{ width: `${progress2}%` }}></div>
        </div>
        <div className="progress-bar">
          <div className="filler" style={{ width: `${progress3}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;