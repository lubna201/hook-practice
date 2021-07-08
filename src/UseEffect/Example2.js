import React, { useEffect,useState } from 'react';
import Button from '@material-ui/core/Button';

const Example2 = () => {
    const msg=["Hi", "How", "are", "you"]
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      document.title=msg[index];
    }, );
    function updateMsg(){
        setIndex(Math.floor(Math.random()* msg.length))
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={updateMsg}>Title Change</Button> 
        </div>
    );
};

export default Example2;