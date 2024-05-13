import  React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


 const Contact =(props)=>{ 
    const history = useHistory()
  const  redirecttoabout =()=>{
//(or anthor way )props.history.push('/about')
history.push('/about')

    }

    return(
        <div>
            <h1> contact us</h1>
            <button className='btn btn-primary' onClick={()=>redirecttoabout()}>Go To About Us</button>
        </div>
    )
}

export default Contact