import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Menucards from "./Menucards"
import { useParams } from "react-router-dom";
import useRestmenu from "../utils/useRestmenu";
import Category from "./Category";


const Resmenu=()=>{

   
    const {resid}=useParams()
    const resinfo=useRestmenu(resid);
    const [showIndex,setshowIndex]= useState(null);
    

    
    if (resinfo===null) return <Shimmer/>;

    const {name,areaName,avgRatingString,costForTwoMessage,cuisines}=resinfo?.data?.cards[2]?.card?.card?.info
    const itemCards= resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
//    console.log("data")
    

    const categorises= resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
//    console.log(categorises)

    return (
        <div className="menu-container ">
        <div className="res-tab text-center">
            <h1 className="p-3 mt-4 mx-2 font-extrabold text-[30px]">{name}</h1>
            <div className="px-3 py-1 mx-2 font-semibold text-[20px]">
            <h3 >{areaName}</h3>
           
           <h4> Rating{avgRatingString}</h4>
           <h5>{cuisines.join(", ")} -- {costForTwoMessage}</h5>
            </div>
            
            
        </div>
        <div className="caterogies">
            {/* //controlled component  */}
            {categorises.map( (category, index)=>{
               return <Category key={category.card?.card?.title} 
               data={category.card?.card}
               showItems={index==showIndex ? true:false }
               setshowIndex={()=> setshowIndex(index)}
                />
               
            })
            }
        </div>

        {/* <div className="m-list flex flex-wrap">
            {itemCards.map( item=>{
                return <Menucards key={item.card.info.id} menuData={item}/>
            }

            )}

        </div> */}
        </div>
        
    );
}

export default Resmenu;