import { createContext, useState, useContext } from "react";

const authContext = createContext()

export function AuthProvider({children}){

    const [user, setUser] = useState(null)

    const loginHandler = (userdata) => {
        setUser(userdata)
    }

    return (
        <authContext.Provider value={{user, loginHandler}}>
            {children}
        </authContext.Provider>
    )
}

export function useAuth(){
    return useContext(authContext)
}