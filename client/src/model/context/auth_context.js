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
                register: register,
                logout: logout
            })
        })
    },[])

    const login = (user_data) => {
        provider.userLogin(user_data).then(function (user){
            setValue({
                user: user,
                login: login,
                register: register,
                logout: logout
            })
            history.push('/')
        })
        .catch(function(err){
            setValue({
                user: null,
                login: login,
                register: register,
                logout: logout
            })
        })
    }

    const register = (user_data) => {
        provider.userRegister(user_data).then(function (user){
            setValue({
                user: user,
                login: login,
                register: register,
                logout: logout
            })
            history.push('/')
        })
        .catch(function(err){
            setValue({
                user: null,
                login: login,
                register: register,
                logout: logout
            })
        })
    }

    const logout = () => {
        provider.userLogout()
        setValue({
            user: null,
            login: login,
            register: register,
            logout: logout
        })
    }

    const [value, setValue] = useState({
        user: null,
        login: login,
        register: register,
        logout: logout
    })



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
    //   const register = React.useCallback(
    //     form => provider.register(form).then(user => setData(user)),
    //     [setData],
    //   )
    //   const logout = React.useCallback(() => {
    //     provider.logout()
    //     setData(null)
    //   }, [setData])
    
    //   const value = React.useMemo(() => ({user, login, logout, register}), [
    //     login,
    //     logout,
    //     register,
    //     user,
    //   ])
}

export function useAuth() {
    const context = React.useContext(AuthContext)
    if (context === undefined) {
      throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
}