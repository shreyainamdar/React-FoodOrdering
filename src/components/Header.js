import { LOGO_URL } from "../utils/constants";
import {useState, useContext} from 'react'
import{Link} from 'react-router-dom'
import useStatus from "../utils/useStatus";
import Store from "./Store";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=() =>{

  const [btnName, setbtnName]= useState("Login")
  const onlinestatus=useStatus();

  const {loggedinUser} = useContext(UserContext);

  const cartItems=useSelector((store)=> store.cart.item);
  

    return(
      <div className='flex justify-between shadow-lg'>
        <div className='logo-container'>
          <img className='w-48' src={LOGO_URL}></img>
        </div>
        <div className='flex items-center'>
          <ul className="flex p-4 m-4">
            <li className="px-4 py-1 rounded-lg font-semibold">
              Online status:{onlinestatus?" 🟢":"🔴"}
            </li>
            <li className="px-4 hover:bg-orange-300 py-1 rounded-lg font-semibold">
              <Link to="/"> Home</Link></li>
            <li className="px-4 hover:bg-orange-300 py-1 rounded-lg font-semibold">
              <Link to="/about"> About</Link></li>
            <li className="px-4 hover:bg-orange-300 py-1 rounded-lg font-semibold">
              <Link to="/contact"> Contact </Link>
            </li>
           < li className="px-4 hover:bg-orange-300 py-1 rounded-lg font-semibold">
              <Link to="/store"> Store</Link>
            </li>
            <li className="px-4 hover:bg-orange-300 py-1 rounded-lg font-semibold">
              <Link to="/cart"> Cart- {cartItems.length} items</Link>
            </li>
            <li className="px-4 hover:bg-green-300 py-1 rounded-lg font-semibold">
            <button className="login"
              onClick={()=>{
                btnName=="Login"? setbtnName("Logout"): setbtnName("Login");
              }}>{btnName}</button>
              </li>
              < li className="px-4 py-1 rounded-lg font-semibold">
               {loggedinUser}
            </li>
          </ul>
        </div>
  
      </div>
    );
  }

  export default Header;