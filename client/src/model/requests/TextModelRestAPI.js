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
     const body = "{ \"testName\": \"test\", \"textID\":" + textID + ", \"visualizationType\": \"" + type + "\", \"propName\": \"" + propertyName + "\", \"propVal\": \"" + propertyValue + "\" , \"propType\":\"" + propertyType + "\" }"
     const headers = {headers : {"x-auth-token": getToken()}}
     return axios.post(url,body,headers)
 }

export function useGetTextById(id){
    const url = `http://127.0.0.1:5000/texts/${id}`
    const headers = {headers: {"x-auth-token": getToken()}}
    return useAxiosGet(url, headers, false)
}

export function useGetAllQuestionsById(id){
    console.log("aaaaav "+id)
    const url = `http://127.0.0.1:5000/questions/${id}`
    const headers = {headers: {"x-auth-token": getToken()}}
    return useAxiosGet(url, headers)
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

export function uploadText(name, content){
    const url = 'http://127.0.0.1:5000/uploadText'
    const body = "{  \"name\":\"" + name + "\", \"content\":\"" + content + "\" }"
    const headers = {headers : {"x-auth-token": getToken()}}
    return axios.post(url,body,headers)
}

export function deleteText(id){
    const url = 'http://127.0.0.1:5000/deleteText'
    const body = "{ \"id\":\"" + id + "\" }"
    console.log(body)
    const headers = {headers : {"x-auth-token": getToken()}}
    return axios.post(url,body,headers)
}

export function addQuestion(question_id, text_id, question_content){
    const url = 'http://127.0.0.1:5000/addQuestion'
    const body = "{  \"question_id\":\"" + question_id + "\", \"text_id\":\"" + text_id + "\", \"question_content\":\"" + question_content + "\" }"
    const headers = {headers : {"x-auth-token": getToken()}}
    console.log(body)
    return axios.post(url,body,headers)
}

export function addAnswers(option_id ,question_id, text_id, is_correct, answer_content){
    const url = 'http://127.0.0.1:5000/addAnswers'
    const body = "{  \"option_id\":\"" + option_id + "\", \"question_id\":\"" + question_id + "\", \"text_id\":\"" + text_id + "\" ,  \"is_correct\":\"" + is_correct + "\", \"answer_content\":\"" + answer_content + "\"  }"
    console.log(body)
    const headers = {headers : {"x-auth-token": getToken()}}
    return axios.post(url,body,headers)
}

export function deleteQuestion(id){
    const url = 'http://127.0.0.1:5000/deleteQuestion'
    const body = "{ \"id\":\"" + id + "\" }"
    console.log(body)
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