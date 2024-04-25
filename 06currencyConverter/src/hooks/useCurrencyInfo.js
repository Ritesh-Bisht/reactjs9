import { useaffect, useState } from "react";

function useCInfo(currency){
    const [data,setData]= useState({})
    useaffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=> res.json() )
        .then((r)=> setData(r[currency]) )

        console.log();
    },[currency])
    return data
}

export default useCInfo;