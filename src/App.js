import logo from './logo.svg';
import './App.css';

import { nanoid } from 'nanoid'; 
	
function id() {
  return nanoid(); 
}

function App() 
{
	const prods = [
		{id: id(), name: 'product1', cost: 100},
		{id: id(), name: 'product2', cost: 200},
		{id: id(), name: 'product3', cost: 300},
	];
	
	const res = prods.map(function(item) {
			return <p key={item.id}>{item.name}: {item.cost}</p>;
	});	

  return (
    <div>
      {res}
    </div>
  );
}


export default App;