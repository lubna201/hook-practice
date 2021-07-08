import React, { useEffect,useState } from 'react';
import Button from '@material-ui/core/Button';

const Example1 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
  
    useEffect(() => {
      console.log("count2 changed!");
    }, [count2]);
  
    return (
      <div>
        {count1} {count2} {count3}
        <br />
        <Button variant="contained" color="primary" onClick={() => setCount1(count1 + 1)}>Increment count1</Button>
        <Button variant="contained" color="primary" onClick={() => setCount2(count2 + 1)}>Increment count2</Button>
        <Button variant="contained" color="primary" onClick={() => setCount3(count3 + 1)}>Increment count3</Button>
      </div>
    );
  };

export default Example1;