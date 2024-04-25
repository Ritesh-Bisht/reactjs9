import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]= useState({})
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=> res.json() )
        .then((r)=> setData(r[currency]) )

        console.log();
    },[currency])
    return data
}

export default useCurrencyInfo;