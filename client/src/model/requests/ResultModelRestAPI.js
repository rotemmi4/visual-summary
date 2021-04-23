import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import {getToken} from "../hooks/authentication_provider";


function useAxiosGet(url, headers){
    const [request, setRequest] = useState({
        loading: false,
        data: [],
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: [],
            error: false
        })
        axios.get(url, headers).then( response => {
            setRequest({
                loading: false,
                data: response.data,
                error: false
            })
        }).catch( () => {
            setRequest({
                loading: false,
                data: [],
                error: true
            })
        })
    },[url])

    return request
}


export function useGetTestResult(test_name){
    const url = `http://127.0.0.1:5000/result/${test_name}`
    const headers = {headers: {"x-auth-token": getToken()}}
    return useAxiosGet(url, headers, false)
}

export function useGetTestRankingResult(test_name){
    const url = `http://127.0.0.1:5000/rankingResult/${test_name}`
    const headers = {headers: {"x-auth-token": getToken()}}
    return useAxiosGet(url, headers, false)
}
