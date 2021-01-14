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

export function useGetAllText(){
    const url = 'http://127.0.0.1:5000/texts'
    const headers = {headers: {"x-auth-token": getToken()}}
    return useAxiosGet(url, headers)
}

 export function saveVisualizationForText(type,textID,propertyName,propertyValue,propertyType){
     const url = 'http://127.0.0.1:5000/saveVisu'
     const body = "{ \"textName\": \"test\", \"textID\":" + textID + ", \"visualizationType\": \"" + type + "\", \"propName\": \"" + propertyName + "\", \"propVal\": \"" + propertyValue + "\" , \"propType\":\"" + propertyType + "\" }"
     const headers = {headers : {"x-auth-token": getToken()}}
     return axios.post(url,body,headers)
 }

export function useGetTextById(id){
    const url = `http://127.0.0.1:5000/texts/${id}`
    const headers = {headers: {"x-auth-token": getToken()}}
    return useAxiosGet(url, headers, false)
}

export function useGetTextWeights(id){
    const url = `http://127.0.0.1:5000/texts/${id}/weights`
    const headers = {headers: {"x-auth-token": getToken()}}
    return useAxiosGet(url, headers, false)
}

export function createText(props){
    const url = 'http://127.0.0.1:5000/texts'
    const body = props
    const headers = {headers : {"x-auth-token": getToken()}}
    return axios.post(url,body,headers)
}
// export function editText(props){
//     const url = 'http://127.0.0.1:5000/texts'
//     const body = props
//     const headers = {headers : {"x-auth-token": getToken()}}
//     return axios.put(url,body,headers)
// }

// export function deleteText(props){
//     const url = 'http://127.0.0.1:5000/texts'
//     const body = props
//     const headers = {headers : {"x-auth-token": getToken()}}
//     return axios.delete(url,body,headers)
// }