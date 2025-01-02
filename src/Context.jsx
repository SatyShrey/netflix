import { createContext, useState } from "react";


export const MyContext=createContext()

// eslint-disable-next-line react/prop-types
export function MyProvider({children}){
     const[play,setPlay]=useState('off')
     const [link,setLink]=useState("Oi7hJgH0sKw")

    return(
        <MyContext.Provider value={{play,setPlay,link,setLink}}>
        {children}
        </MyContext.Provider>
    )
}