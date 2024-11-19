import { useState,useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestmenu=(resid)=>{
    const [resinfo, setresinfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        try{
         const data=await fetch(MENU_API+resid) 
        
        if(!data.ok){
            throw new Error(`HTTP ERROR: ${data.status}`);
        }
        
        const jsonData=await data.json();
        console.log(jsonData);
        setresinfo(jsonData);
        }
        catch(error){
            console.error(error);
        }
    }
    return resinfo;
}

export default useRestmenu;