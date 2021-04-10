import React ,{useEffect, useState} from 'react'
import axios from 'axios'

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
