// import logo from './logo.svg';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import Box from './Box'

function App() {
  const [count, setCount] = useState(0);
  // const updateCount = (count) => {
  //   setCount(count)
  // }

  return (
    <div className="App">
      <h1>Count: {count} </h1>

      <div className="wrapper">
        <Box setCount={setCount} count={count} />
        <Box setCount={setCount} count={count} />
        <Box setCount={setCount} count={count} />
        <Box setCount={setCount} count={count} />
		  </div>
      
    </div>
  );
}

export default App;
