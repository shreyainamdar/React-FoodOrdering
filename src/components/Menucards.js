import { MIMAGE_URL } from "../utils/constants";

const Menucards=(props)=>{
    const {menuData}=props;
    const {name,description,ratings,imageId,defaultPrice}=menuData?.card?.info
    return(
        <div className='m-card p-4 m-6 w-[350px] h-[600px] bg-gray-100 rounded-r-lg hover:bg-gray-200'>
        <img className='m-logo w-[550px] h-[250px]' src={MIMAGE_URL+imageId}/>
        <h3 className="font-bold py-4 text-lg">{name} </h3>
        <h4 className="pb-4 font-serif font-semibold">{description}</h4>
        <h4 className="pb-2 font-extrabold">{ratings.aggregatedRating.rating} Rating</h4>
        <h5>Rs.{defaultPrice/100}</h5>
        
      </div>
    );

}
export default Menucards;