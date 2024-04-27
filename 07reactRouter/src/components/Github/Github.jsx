import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


 function Github(){
    const data = useLoaderData()
    // useEffect( ( )=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then( response => response.json() )
    //     .then( data => {
    //         console.log(data);
    //         setData(data); 
    //     })
    // },[] )
    return(
        <div  className=" m-4 bg-gray-900 text-white text-4xl text-center" > MY GITHUB FOLLOWERS : {data.followers}
         <img src={data.avatar_url} alt="GITHUB PIC"  width={90}/>

        </div>
    )
 }
 export default Github;
 export const githubinfo = async ()=>{
   const r = await fetch('https://api.github.com/users/hiteshchoudhary')
   return r.json();
 }