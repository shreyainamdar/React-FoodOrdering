import { CDN_URL } from "../utils/constants";

const Rescard=(props) =>{
    const {resData}=props;
    // console.log("rescard called")
    // destrcturing the data
    const {cloudinaryImageId,name,cuisines,avgRatingString,sla}=resData?.info
    return(
      <div className='res-card p-4 m-6 w-[350px] h-[500px] bg-gray-100 rounded-r-lg hover:bg-gray-200'>
        <img className='res-logo w-[550px] h-[250px] ' src={CDN_URL+cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name} </h3>
        <h4 className="pb-4 font-serif font-semibold">{cuisines.join(", ")}</h4>
        <h4 className="pb-2 font-extrabold">{avgRatingString} rating</h4>
        <h4>{sla.slaString}</h4>
      </div>
    )
  }

  export const withPromoted=(Rescard)=>{
    return(props)=>{
      return(
        <div>
           <label className="p-2 mx-2 my-1 absolute bg-green-200 rounded-xl">Open</label>
           <Rescard {...props}/>
        </div>
      )
    }
  }
  export default Rescard;