import  React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changelanguage } from './../store/action';

 const Home =()=>{ 
const language =useSelector((state)=>state.language.lang)
const dispatch=useDispatch()
const handelchange=()=>{
dispatch(changelanguage(language=="ar"?"en":"ar"))
}

    return(
        <div dir={language=="en"?'ltr': 'rtl'}>
            <h1> Home</h1>
            <p> language :{language}</p>
            <button className='btn btn-success' onClick={handelchange}>Change Language</button>
        </div>
    )
}

export default Home