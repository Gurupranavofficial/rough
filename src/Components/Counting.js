import { useState } from "react"
import React from "react";

export default function Counting(){
    const [count,setcount] = useState(0);

return(
    <>
    {count} <br/>
    <button onClick={()=> setcount(count + 1) }>+</button>
    <button onClick={()=> setcount(count - 1) }>-</button>

    </>
)
}