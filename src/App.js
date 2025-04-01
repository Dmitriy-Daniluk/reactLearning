import logo from './logo.svg';
import './App.css';

import { nanoid } from 'nanoid'; 
	
function id() {
  return nanoid(); 
}

function App() 
{
  const uniqueId = id();

  return (
    <div>
      Сгенерированный ID: {uniqueId}
    </div>
  );
}



export default App;