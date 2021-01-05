import './App.css';
import AddData from './components/AddData';
import ShowDataB from './components/ShowDataB';
import ShowDataP from './components/ShowDataP';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState('path')

  return (
    <div className='textCenter'>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 15 }}>
        <div>
          <input type="radio" id='path' name="ShowData" value="path" onChange={() => setShow('path')} defaultChecked />
          <label htmlFor="path">Save/Show Data through Path</label>
        </div>
        <div>
          <input type="radio" id='buffer' name="ShowData" value="buffer" onChange={() => setShow('buffer')} />
          <label htmlFor="buffer">Save/Show Data through Buffer</label>
        </div>
      </div>

      <AddData show={show} />
      {show==='path'? <ShowDataP/> :  <ShowDataB/>}

    </div>
  );
}

export default App;
