
import { createContext, useState } from "react";

export const ItemContext =createContext()
const Single = ({children}) => {
    const [item,setItem] =useState(null)

    const data={item,setItem}
    return (
       <ItemContext.Provider value={data}>{children}</ItemContext.Provider>
    );
};

export default Single;