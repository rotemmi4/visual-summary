import React, { useState } from 'react'
import { login, get_user_details } from '../requests/UserModelRestAPI'
import Cookies from "js-cookie"


export function userLogin (user_data) {
    let response = login(user_data)
    return response.then(function (response){
        Cookies.set("x-auth-token", response.data.token,{ expires: 1 });
        return Promise.resolve(response.data.user)
    })
    .catch(function(err){
        return Promise.reject(err);
    })
}


export function userLogout () {
    Cookies.remove("x-auth-token")
}

export function load_user_details () {
    let response = get_user_details()
    return response.then(function (response){
        return Promise.resolve(response.data)
    })
    .catch(function(err){
        return Promise.reject(err);
    })
}

export function getToken (){
    return Cookies.get("x-auth-token") ? Cookies.get("x-auth-token") : null;
}