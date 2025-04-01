import logo from './logo.svg';
import './App.css';

import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid';

function App() 
{
  const randomIdsNanoid = Array.from({ length: 5 }, () => nanoid());
  const randomIdsUUID = Array.from({ length: 5 }, () => uuidv4());

  return (
    <div>
      <h2>Случайные строки библиотеки nanoid:</h2>
      <ul>
        {randomIdsNanoid.map(id => (
          <li key={id}>{id}</li>
        ))}
      </ul>

      <h2>Случайные строки библиотеки uuid:</h2>
      <ul>
        {randomIdsUUID.map(id => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}



export default App;