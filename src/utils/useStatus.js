import { useState, useEffect } from "react";

const useStatus=()=>{
    const [onlinestatus,setonlinestatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestatus(false)
        })
    }
    ,[]);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setonlinestatus(true)
        })
    }
    ,[]);
    return onlinestatus;
}

export default useStatus;