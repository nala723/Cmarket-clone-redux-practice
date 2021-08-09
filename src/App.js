import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import ItemListContainer from './pages/itemListContainer';
import Notification from './components/Notification';
import ShoppingCart from './pages/ShoppingCart';


function App() {
  // props 로만 주고 받을 때와 다르게 여기서 useState로 initialState.items 등등 불러오지 않았다!
  // 또한 컴포넌트들에게 state,props를 물려주지 않음

  return (
    <Router>
      <Nav />
       <Switch>
          <Router exact path="/">
            <ItemListContainer />
          </Router>  
          <Router path="/shoppingcart">
            <ShoppingCart />
          </Router>    
       </Switch>
     <Notification />
    </Router>
  );
}

export default App;
