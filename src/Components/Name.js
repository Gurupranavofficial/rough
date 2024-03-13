import { useState } from "react";

export default function Name(){

    const [name, setname] =useState();
    return(
        <div>
            <p> Your Name: {name}</p>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setname(e.target.value)} 
                placeholder="Enter your name" 
            />
        </div>
    )
}