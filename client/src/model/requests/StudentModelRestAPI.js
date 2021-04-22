import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import {getToken} from "../hooks/authentication_provider";

export function useAxiosGet(url){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then( response => {
            setRequest({
                loading: false,
                data: response.data,
                error: false
            })
        }).catch( () => {
            setRequest({
                loading: false,
                data: null,
                error: true
            })
        })
    },[url])

    return request
}


// roman
export function set_student_info(props){
    const url = 'http://127.0.0.1:5000/student/set_info'
    // console.log(props)
    const body = props
    // console.log(body)
    return axios.post(url, body)
}

// roman
export function get_test_id(){
    const url = 'http://127.0.0.1:5000/student/get_test_id'
    // const headers = {headers : {"x-auth-token": getToken()}}
    let response = axios.get(url)
    return response
}

export function get_questions_and_answers(test_id) {
    // console.log("im here")
    const url = `http://127.0.0.1:5000/student/get_questions/${test_id}`
    const headers = {headers: {"x-auth-token": getToken()}}
    let response = axios.get(url, headers)
    // console.log(response)
    return response
}

export function send_info_on_text(results) {
    // console.log("im here")
    const url = 'http://127.0.0.1:5000/student/set_question_results'
    const body = results
    // console.log(response)
    return axios.post(url, body)
}

export function get_text_ids_by_test_id(test_id) {
    // console.log("im here")
    const url = `http://127.0.0.1:5000/student/get_texts_by_testid/${test_id}`
    let response = axios.get(url)
    // console.log(response)
    return response
}

export function get_type_by_text_id(text_id) {
    const url = `http://127.0.0.1:5000/student/get_type_by_text_id/${text_id}`
    let response = axios.get(url).then(response => {return response.data})
    return response
}

export function useGetTextWeightsStudent(id){
    const url = `http://127.0.0.1:5000/texts/${id}/weights`
    let response = axios.get(url)
    return response
}

export function useGetTextTotalInfo(text_id) {
    const url = `http://127.0.0.1:5000/texts/${text_id}/all_info`
    const headers = {headers: {"x-auth-token": getToken()}}
    return useAxiosGet(url, headers, false)
}

export function addRank(student_id, withoutVisualization, gradualHighlight, highlight, increasedFont,gradualFont, summaryOnly,rank_order){
    const url = 'http://127.0.0.1:5000/rank'
    const body = "{  \"student_id\":\"" + student_id + "\", \"withoutVisualization\":\"" + withoutVisualization + "\", \"gradualHighlight\":\"" + gradualHighlight + "\"," +
        " \"highlight\":\"" + highlight + "\", \"increasedFont\":\"" + increasedFont + "\", \"gradualFont\":\"" + gradualFont + "\", \"summaryOnly\":\"" + summaryOnly + "\"," +
        " \"rank_order\":\"" + rank_order + "\" }"
    const headers = {headers : {"x-auth-token": getToken()}}
    return axios.post(url,body,headers)
}

export function updateRank(student_id, rank_order){
    const url = 'http://127.0.0.1:5000/updateRankOrder'
    const body = "{  \"student_id\":\"" + student_id + "\"," + " \"rank_order\":\"" + rank_order + "\" }"
    const headers = {headers : {"x-auth-token": getToken()}}
    return axios.post(url,body,headers)
}