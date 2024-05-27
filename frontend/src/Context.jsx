import { createContext, useState } from "react";

export const mainContext = createContext({});

export const ContextProvider = (props) => {
    const [id ,setID] = useState(null)
    const [name,setname]= useState(null)
    const [cart ,setCart] = useState(0)
    const [item ,setitem] = useState([])
  return <mainContext.Provider value={{id,setID,name,setname,cart ,setCart,item,setitem}}>{props.children}</mainContext.Provider>;
};

