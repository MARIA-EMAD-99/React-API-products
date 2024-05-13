
import { BrowserRouter as Router ,Switch,Link,Route } from 'react-router-dom';
import './App.css';
import Header from './header/header';
import Home from './Home/home';
import About from './about/about';
import Contact from './contact/contact';
import Products from './products/products';
import Detailsproducts from './products/detailsproducts';
import Homeclass from './homeclass/Homeclass';
import { CounterProvider } from './context/context';
import { useState } from 'react';



function App() {
  const   [counter,setcounter] =useState(0)
  return(
    <>
    <div className='container'>
      
  <Router>
  <CounterProvider value={{counter, setcounter}}>
  <Header></Header>
    <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/about" exact component={About}></Route>
    <Route path="/contact" exact component={Contact}></Route>
    <Route path="/products" exact component={Products}></Route>
    <Route path="/homeclass" exact component={Homeclass}></Route>
    <Route path="/details/:id" exact component={Detailsproducts}></Route>
    </Switch>
    </CounterProvider>
  </Router>

  
  </div>
  </>
  )
}

export default App;
