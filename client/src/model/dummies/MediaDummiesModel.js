// import React, {useState,useEffect} from 'react';
//
//
// function useFileMedia(file){
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
//         fetch(file,
//         {
//         headers :
//         {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//         }).then( content => content.json()).then(response => {
//             setRequest({
//                 loading: false,
//                 data: response,
//                 error: false
//             })
//         }).catch( () => {
//             setRequest({
//                 loading: false,
//                 data: [],
//                 error: true
//             })
//         })
//     },[file])
//
//     return request
// }
//
// function useFileMediaById(file, id){
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
//         fetch(file,
//         {
//         headers :
//         {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//         }).then( content => content.json()).then(response => {
//             setRequest({
//                 loading: false,
//                 data: response.filter(function(item){
//                     return item.id == id;
//                 }),
//                 error: false
//             })
//         }).catch( () => {
//             setRequest({
//                 loading: false,
//                 data: [],
//                 error: true
//             })
//         })
//     },[file, id])
//
//     return request
// }
//
// function useFileGetTextWeights(file, id){
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
//         fetch(file,
//         {
//         headers :
//         {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         }
//         }).then( content => content.json()).then(response => {
//             setRequest({
//                 loading: false,
//                 data: response.filter(function(item){
//                     return item.id == id;
//                 }),
//                 error: false
//             })
//         }).catch( () => {
//             setRequest({
//                 loading: false,
//                 data: [],
//                 error: true
//             })
//         })
//     },[file, id])
//
//     return request
// }
//
// export function useGetAllMedia(){
//     const file = '/dummies/media_dummies.json'
//     return useFileMedia(file)
// }
//
// export function useGetMediaById(id){
//     const file = '/dummies/text_weights_dummies.json'
//     return useFileMediaById(file, id);
// }
//
//
// export function useGetTextWeights(id){
//     const file = '/dummies/text_weights_dummies.json'
//     return useFileGetTextWeights(file, id);
// }
