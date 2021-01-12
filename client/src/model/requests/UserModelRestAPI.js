import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import { getToken } from '../hooks/authentication_provider'

export function login(props){
    const url = 'http://127.0.0.1:5000/auth/login'
    const body = props
    return axios.post(url,body)
}

export function register(props){
    const url = 'http://127.0.0.1:5000/public/register'
    const body = props
    return axios.post(url,body)
}

export function get_user_details(){
    const url = 'http://127.0.0.1:5000/private/user/get'
    const headers = {headers: {"x-auth-token": getToken()}}
    return axios.get(url, headers)
}