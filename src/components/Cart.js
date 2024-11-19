import { useDispatch, useSelector } from "react-redux";
import Listitems from "./Listitems";
import { clearCart } from "../utils/cartSlice";


const Cart=()=>{
    const cartItems=useSelector((store)=> store.cart.item);
    console.log(cartItems)
    const dispatch= useDispatch();
    const handleClick=()=>{
        dispatch(clearCart());
    }
    return(
        <div >
            <div className="text-center m-4 p-4 font-bold text-4xl">
                <h2> Cart </h2>
            </div>
            <div className="w-6/12 m-auto "> 
                {cartItems.length==0 && 
                <h1 className=" font-semibold text-xl text-center" >Cart is empty, Add items to the cart!!!</h1>}
                <Listitems items={cartItems}/>
            </div>
            <div className="w-10/12 text-end">
                <button className=" p-4 m-4 bg-black text-white "
                onClick={handleClick}> Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart;