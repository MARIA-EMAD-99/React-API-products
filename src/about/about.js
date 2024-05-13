import  React, { useContext } from 'react';
import { counterContext } from './../context/context';


 const About =()=>{ 
  const {counter,setcounter}  =useContext(counterContext)
    return(
        <div>
            <h1> About us</h1>
<button className='btn btn-success' onClick={()=>setcounter(counter+1)}>+</button>
            <p>counter is {counter}</p>
            <button className='btn btn-danger' onClick={()=>setcounter(counter-1)}>-</button>
        </div>
    )
}

export default About