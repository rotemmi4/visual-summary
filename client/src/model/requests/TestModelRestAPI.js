import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import { getToken } from '../hooks/authentication_provider'

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

export function useGetAllTest(){
    const url = 'http://127.0.0.1:5000/tests/getAllTests'
    const headers = {headers: {"x-auth-token": getToken()}}
    return useAxiosGet(url, headers)
}
export function useGetTestProperties(name){
    const url = `http://127.0.0.1:5000/getTestProperties/${name}`
    const headers = {headers: {"x-auth-token": getToken()}}
    return useAxiosGet(url, headers)
}
export function deleteTest(name){
    const url = `http://127.0.0.1:5000/tests/deleteTest/${name}`
    const headers = {headers: {"x-auth-token": getToken()}}
    return axios.post(url,headers)
}

export function deleteTestProperties(name){
    const url = `http://127.0.0.1:5000/tests/deleteTestProperties/${name}`
    const headers = {headers: {"x-auth-token": getToken()}}
    return axios.post(url,headers)
}

export function saveTestType(testName,testType){
    const url = 'http://127.0.0.1:5000/saveTest'
    const body = "{ \"testName\":"+"\"" +testName+"\"" +",\"testType\":"+"\""+testType+"\""+" }"
    const headers = {headers : {"x-auth-token": getToken()}}
    return axios.post(url,body,headers)
}

// export function useGetTestProperties(test_name){
//     const url = `http://127.0.0.1:5000/getTestProperties/${test_name}`
//     const headers = {headers: {"x-auth-token": getToken()}}
//     return useAxiosGet(url, headers)
// }

