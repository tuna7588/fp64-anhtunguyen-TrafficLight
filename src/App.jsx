import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { TrafficLight } from './assets/components/TrafficLight.jsx';

function App() {
  return (
    <>
    <div className="flex items-center justify-center">
      <TrafficLight />
    </div>
      
    </>
  );
}

export default App;
