import React, { useEffect, useState } from 'react'
import  * as provider from "../hooks/authentication_provider"
import { useHistory } from 'react-router-dom'


const AuthContext = React.createContext()
AuthContext.displayName = 'AuthContext'

export function AuthProvider({children}){
    
    const history = useHistory()

    useEffect(() =>{
        provider.load_user_details().then(function (user){
            setValue({
                user: user,
                login: login,
                logout: logout
            })
        })
    },[])

    const login = (user_data) => {
        provider.userLogin(user_data).then(function (user){
            setValue({
                user: user,
                login: login,
                logout: logout
            })
            history.push('/')
        })
        .catch(function(err){
            setValue({
                user: null,
                login: login,
                logout: logout
            })
        })
    }


    const logout = () => {
        provider.userLogout()
        setValue({
            user: null,
            login: login,
            logout: logout
        })
    }

    const [value, setValue] = useState({
        user: null,
        login: login,
        logout: logout
    })



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = React.useContext(AuthContext)
    if (context === undefined) {
      throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
}