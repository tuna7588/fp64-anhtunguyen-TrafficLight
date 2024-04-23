import { useState,useEffect } from 'react'
import { Light } from '../components/Light.jsx'

export const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('red');
  const setRed = () => {
    setCurrentLight('red');
    setTimeout(() => {
      setGreen();
    }, 1000);
    return () => {
      clearTimeout();
    };
  };
  const setYellow = () => {
    setCurrentLight('yellow');
    setTimeout(() => {
      setRed();
    }, 1000);
    return () => {
      clearTimeout();
    };
  };
  const setGreen = () => {
    setCurrentLight('green');
    setTimeout(() => {
      setYellow();
    }, 1000);
    return () => {
      clearTimeout();
    };
  };

  useEffect(() => {
    setRed();
    setYellow();
    setGreen();
  }, []);
  return (
    <>
      <div className="box-light">
        <Light color="red" active={currentLight === 'red'} />
        <Light color="yellow" active={currentLight === 'yellow'} />
        <Light color="green" active={currentLight === 'green'} />
      </div>
    </>
  );
}
