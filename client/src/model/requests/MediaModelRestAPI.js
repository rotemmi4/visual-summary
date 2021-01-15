// import React ,{useEffect, useState} from 'react'
// import axios from 'axios'
// import { getToken } from '../hooks/authentication_provider'
//
// function useAxiosGet(url, headers){
//     const [request, setRequest] = useState({
//         loading: false,
//         data: [],
//         error: false
//     })
//
//     useEffect(() => {
//         setRequest({
//             loading: true,
//             data: [],
//             error: false
//         })
//         axios.get(url, headers).then( response => {
//             setRequest({
//                 loading: false,
//                 data: response.data,
//                 error: false
//             })
//         }).catch( () => {
//             setRequest({
//                 loading: false,
//                 data: [],
//                 error: true
//             })
//         })
//     },[url])
//
//     return request
// }
//
// export function useGetAllMedia(){
//     const url = 'http://127.0.0.1:5000/private/media/all'
//     const headers = {headers: {"x-auth-token": getToken()}}
//     return useAxiosGet(url, headers)
// }
//
// // export function useGetMediaById(id){
// //     const url = `http://127.0.0.1:5000/private/media/get/${id}`
// //     const headers = {headers: {"x-auth-token": getToken()}}
// //     return useAxiosGet(url, headers, false)
// // }
//
// export function createMedia(props){
//     const url = 'http://127.0.0.1:5000/private/media/create'
//     const body = props
//     const headers = {headers : {"x-auth-token": getToken()}}
//     return axios.post(url,body,headers)
// }
// export function editMedia(props){
//     const url = 'http://127.0.0.1:5000/private/media/update'
//     const body = props
//     const headers = {headers : {"x-auth-token": getToken()}}
//     return axios.put(url,body,headers)
// }