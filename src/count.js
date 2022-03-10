import { useState } from "react";
export function Count(){
    const [count, setBook]=useState(0);
   
    
    const Change=(value)=>{
        setBook((b)=>{
                return b+value
        })
    }
    
    return (
        <div>
            
            <button onClick={()=> Change(1)}>+</button>
            <span>{count}</span>
            <button onClick={()=> Change(-1)}>-</button><br></br>
            <button onClick={()=> Change(count)}>double</button>
            
        </div>
    )
}