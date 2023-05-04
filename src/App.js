import React ,{useState} from 'react';
import './App.css';
import Theme from './Components/Theme/Theme';
import InputField from './Components/InputField/InputField';
import Dev from './Components/dev/Dev';

function App() {
  const [num, setNum] = useState()

  const getNumber = (number)=>{
    setNum(number)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='themeBSetion'>
        <Theme/>
        </div>
        <InputField getNumber={getNumber} />
        <h1>{num}</h1>
        <Dev/>
      </header>
    </div>
  );
}

export default App;
