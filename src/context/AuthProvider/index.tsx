import React, {createContext, useState, useEffect} from "react"
import { IContext, IAuthProvider, IUser } from "./types"
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util"

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {

        const user = getUserLocalStorage()

        if(user){
            setUser(user)
        }

    }, [])

    async function authenticate(email:string, password:string){

        const response = await LoginRequest(email, password);

        const playlod = {token:response.token, email}

        setUser(playlod)
        setUserLocalStorage(playlod)
    }
    
    function logout(){
        setUser(null);
        setUserLocalStorage(null)
    }

    return(
        <AuthContext.Provider value={{...user, authenticate, logout}}>
        {children}
        </AuthContext.Provider>
    )


}