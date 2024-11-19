import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/Body';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';


/**
 * Header: 
 *  -logo
 *  -nav items
 * Body:
 *  -search
 *  - RestoContainer
 *      - resto cards
 * Footer:
 *  -copyright
 *  -links 
 *  -address and contact
 * 
 */




function App() {

  const [useName,setuserName]=useState();

// #authentication logic
useEffect(()=>{
  // make an api call which retrurns some data
  const data={
    name:"Shreya Inamdar",
  };
  setuserName(data.name)
},[])


  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedinUser: useName, setuserName}}>
    <div className='app'> 
      <Header/>
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
}

export default App;
