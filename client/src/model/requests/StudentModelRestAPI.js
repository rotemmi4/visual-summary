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

export function get_questions_and_answers(text_id) {
    // console.log("im here - get_questions_and_answers1")
    const url = `http://127.0.0.1:5000/student/get_questions/${text_id}`
    // const headers = {headers: {"x-auth-token": getToken()}}
    let response = axios.get(url)
    return response
}

export function send_info_on_text(results) {
    // console.log("im here - send_info_on_text")
    // console.log(results)
    const url = 'http://127.0.0.1:5000/student/set_question_results'
    const body = results

    return axios.post(url, body)
}

export function get_text_ids_by_test_id(test_id) {
    // console.log("im here")
    const url = `http://127.0.0.1:5000/student/get_texts_by_testid/${test_id}`
    let response = axios.get(url)
    // console.log("get_text_ids_by_test_id!!")
    // console.log(response)
    return response
}

export function get_text_ids_and_info_by_test_id(test_id) {
    // console.log("im here")
    const url = `http://127.0.0.1:5000/getTestGlobalInfo/${test_id}`
    let response = axios.get(url)
    // console.log("get_text_ids_by_test_id!!")
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

export function addRank(student_id, withoutVisualization, gradualHighlight, highlight, increasedFont,gradualFont, summaryOnly, textId){
    const url = 'http://127.0.0.1:5000/rank'
    const body = "{  \"student_id\":\"" + student_id + "\", \"withoutVisualization\":\"" + withoutVisualization + "\", \"gradualHighlight\":\"" + gradualHighlight + "\"," +
        " \"highlight\":\"" + highlight + "\", \"increasedFont\":\"" + increasedFont + "\", \"gradualFont\":\"" + gradualFont + "\", \"summaryOnly\":\"" + summaryOnly + "\" , \"textId\":\"" + textId + "\" }"
    return axios.post(url,body)
}

export function updateRank(student_id, WithoutVisualization_place ,highlight_place,increasedFont_place,summaryOnly_place,gradualHighlight_place,gradualFont_place){
    const url = 'http://127.0.0.1:5000/updateRankOrder'
    const body = "{  \"student_id\":\"" + student_id + "\", \"WithoutVisualization_place\":\"" + WithoutVisualization_place + "\", \"gradualHighlight_place\":\"" + gradualHighlight_place + "\"," +
        " \"highlight_place\":\"" + highlight_place + "\", \"increasedFont_place\":\"" + increasedFont_place + "\", \"gradualFont_place\":\"" + gradualFont_place + "\"," +
        " \"summaryOnly_place\":\"" + summaryOnly_place + "\" }"
    // console.log(body)
    //const headers = {headers : {"x-auth-token": getToken()}}
    return axios.post(url,body)
}



export function saveStudentSummary(student_id,text_id,summary, readingTime, summaryTime){
    const url = 'http://127.0.0.1:5000/saveSummary'
    // const s1 = summary.replaceAll("\n"," ").replaceAll("\r"," ")
    //     .replaceAll("\t"," ").replaceAll("\"","\"\"")
    const body = {
        "student_id": student_id,
        "text_id": text_id,
        "summary": summary,
        "readingTime": readingTime,
        "summaryTime": summaryTime
    }
    //const headers = {headers : {"x-auth-token": getToken()}}
    return axios.post(url,body)
}


export function getTestGlobalInfo(test_id) {
    // const to_send = test_id + "is" + set_place
    const url = `http://127.0.0.1:5000/getTestGlobalInfo/${test_id}`
    let response = axios.get(url)
    // console.log("get_text_ids_by_test_id!!")
    // console.log(response)
    return response
}