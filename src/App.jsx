import './App.css';
import { useState } from 'react';
import Sector1 from './sector1';
import Sector2 from './sector2';
import Sector3 from './sector3';
import Sector4 from './sector4';
import Numbers from './numbers';
import Sector3App2 from './sector3App2';
import Sector5App2 from './Sector5App2';

function App() {
  const [selectedApp, setSelectedApp] = useState('mathematical concept kit');
  return (
    <div>
      <div className='headerDiv'>
        <h2 className='heading'>Vanaja's {selectedApp}</h2>
        <select id="appSelectDropdown" onChange={e => setSelectedApp(e.target.value)} value={selectedApp}>
          <option value="mathematical concept kit">MCK</option>
          <option value="algebric mathematical concept kit">Algebric MCK</option>
        </select>
      </div>
      <div className='innovationDiv'>
        <Sector1 />
        <Numbers />
        <Sector2 />
        {selectedApp === 'mathematical concept kit' ? (
          <Sector3 />
        ) : (
          <Sector3App2 />
        )}
        <Sector4 />
        {selectedApp === 'algebric mathematical concept kit' && (
          <Sector5App2 />
        )}
      </div>
    </div>
  )
}

export default App
