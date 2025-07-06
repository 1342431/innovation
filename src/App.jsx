import './App.css';
import Sector1 from './sector1';
import Sector2 from './sector2';
import Sector3 from './sector3';
import Sector4 from './sector4';
import Numbers from './numbers';

function App() {
  return (
    <div>
      <h2 className='heading'>Vanaja's Mathematical concept kit</h2>
      <div className='innovationDiv'>
        <Sector1 />
        <Numbers />
        <Sector2 />
        <Sector3 />
        <Sector4 />
      </div>
    </div>
  )
}

export default App
