import React,{useState} from 'react';
import './App.css';

const App = () =>  {
  const [count, setCount] = useState(0);
  console.warn(count)
  return (
    <div>
     <h1>useState Hook {count}</h1>
     <button onClick = { () => setCount(count+1)}> update count </button>
    </div>
  );
};

export default App;
