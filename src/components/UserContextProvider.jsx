import React from "react";
import Usercontext from "./Context";
import { useState } from "react";

const Usercontextprovider=({children})=>{
    const [cart, setcart] = useState([])
    const [count,setcount]=useState(0)
    return(

        <Usercontext.Provider value={{cart,setcart,count,setcount}}>
             {children}
        </Usercontext.Provider>
       

    );
}

export default Usercontextprovider;