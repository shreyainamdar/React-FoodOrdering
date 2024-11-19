import { useState } from "react";
import Listitems from "./Listitems";

const Category=({ data, showItems, setshowIndex})=>{
    // const {data}= props;   
    // console.log(showItems);
    
    const handleClick=()=>{
        
        setshowIndex();
        
    }
    return(
        <div className="m-4 p-1" >
            <div className="  w-6/12 m-auto  p-4  bg-gray-100 shadow-lg ">
            <div className="flex justify-between cursor-pointer " onClick={handleClick}>
                <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
                <span> ▼ </span>
                
            </div>
           
               {showItems && <Listitems items={data.itemCards}/>}
            </div>
       
        </div>
    )
}
export default Category;