import Rescard, {withPromoted} from "./Rescard";

import {useState, useEffect,useContext} from 'react'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import UserContext from "../utils/UserContext";

  
const Body=()=>{
  const [listofRes, setlistofRes]=useState([]);
  const [searchData, setsearchData]=useState("");
  const [filteredRes,setfilteredRes]=useState([]);
  console.log(listofRes)
  const Respromoted=withPromoted(Rescard);

  const{loggedinUser,setuserName}=useContext(UserContext);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const jsonData = await response.json();
      console.log(jsonData);
      const restaurants = jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setlistofRes(restaurants);
      setfilteredRes(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
   
  };
  
  const onlinestatus=useStatus();
  if (onlinestatus===false)
    return(
      <h1> Something went wrong!! Looks like you are offline check your Internet connection!!</h1>
  )

  


    return listofRes.length===0 ?
    (<Shimmer/>) :
    (
      <div className='body'>
        
        <div className="filter flex ">


        <div className='search m-4 p-4'> 
          <input type="text" className="search-box  w-72 border border-solid border-black " 
          value={searchData} onChange=
          {(e)=>{
            setsearchData(e.target.value);
          }}></input>
          <button className="search-btm px-4 py-2 m-4 bg-green-300 hover:bg-green-400 rounded-lg" onClick={()=>{
            console.log(searchData);
            const filteredRes=listofRes.filter(
              (res)=>{ 
                return  res.info?.name?.toLowerCase().includes(searchData.toLowerCase())
            })
            
            setfilteredRes(filteredRes);
          }}>search</button>



        </div>
        <div className="search m-4 p-4 flex items-center">
          <button className="filter-btn px-4 py-2  m-4 bg-gray-100 rounded-lg hover:bg-gray-200"
           onClick={()=>{
            const filteredData=listofRes.filter(
              (res)=> res.info.avgRatingString > 4.3
            );
            setlistofRes(filteredData);
           }}>Top Rated Resturants</button>
           </div>

           <div className="search m-4 p-4 flex items-center">
            <label>User Name:  </label>
            <input className="w-72 border p-2 border-solid border-black" value={loggedinUser}
            onChange={(e)=>{
              setuserName(e.target.value)
            }}></input>
          </div>
           
        </div>
        


        <div className='res-container flex flex-wrap '>
          {
            filteredRes.map((restaurant) =>(
            
            <Link key={restaurant.info.id} to={"/city/bangalore/"+restaurant.info.id}>
              { restaurant.info.isOpen? <Respromoted resData={restaurant}/> : <Rescard  resData={restaurant}/>} </Link>
            
            
            ))
          }
        </div>
      </div>
    )
  }

  export default Body;