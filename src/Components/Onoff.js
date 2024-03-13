import { useState } from "react";
import React from "react";
export default function Onoff(){
    const [light,setlight] = useState("on");
    return(
        <>
        {light ? "on" : "off"}
           <br/>
         <button onClick={() =>   setlight(!light)  }>switch</button>
        </>
    );
}