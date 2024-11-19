import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const Listitems=({items})=>{

    // disptach logic for redux 
    const dispatch= useDispatch();
    const handleAdditem=(item)=> {
      dispatch(addItem(item));
    }
    
    return(
        <div>
        <div>
            {items.map(item=>
            
            <div key={item.card.info.id} className="p-2 m-2  flex  justify-between border-b-2 border-gray-400  "> 
                <div  className="w-9/12 text-left ">
                <div className=" font-semibold py-2">
                     <span>{item.card.info.name}</span> 
                <span> - ₹ {item.card.info.defaultPrice}{item.card.info.price} </span>
                </div> 
                <p className="text-xs">
                {item.card.info.description}
                </p> 
                </div>
                <div className="w-3/12  p-4 h-auto"> 
                <div className="absolute"> <button className=" absolute p-2 w-14 h-8 text-xs rounded-br-lg m- auto bg-green-300 shadow-lg"
                onClick={()=> handleAdditem(item)}> 
                Add +</button>
                    </div>
                <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
               
                </div>
            </div>
            
    )}
           
        </div>

        </div>
    )
}
export default Listitems;