import React from "react";
import { useAuth } from "../../context/AuthProvider/userAuth";

export const ProtectedLeyout = ({children} : {children: JSX.Element}) =>{

    const auth = useAuth()
    //console.log(auth)

    if(!auth.email){
        return <h1>Area restrita</h1>
    }
    
    return children
}