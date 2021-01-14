// import React,{ useState , useEffect } from 'react';
// import { useGetAllMedia as restModelMedia, useGetMediaById as restModelGetMediaById } from '../model/requests/MediaModelRestAPI';
// import { createMedia as create, editMedia as edit} from '../model/requests/MediaModelRestAPI'
// import { useGetAllMedia as fileModelMedia, useGetMediaById as fileModelGetMediaById } from '../model/dummies/MediaDummiesModel';
//
//
// export function useGetAllMedia(){
//
//     const [media, setMedia] = useState({
//         loading: false,
//         data: [],
//         error: false
//     })
//
//     const restMedia = restModelMedia()
//     //const fileMedia = fileModelMedia()
//
//     useEffect( () => {
//         setMedia({
//             loading: true,
//             data: [],
//             error: false
//         })
//         if(!restMedia.error && !restMedia.loading && restMedia.data != null){
//             setMedia({
//                 loading: false,
//                 data: restMedia.data,
//                 error: false
//             })
//         }
//         // else if (!fileMedia.error && !fileMedia.loading && fileMedia.data != null){
//         //     setMedia({
//         //         loading: false,
//         //         data: fileMedia.data,
//         //         error: false
//         //     })
//         // }
//         else {
//             setMedia({
//                 loading: false,
//                 data: [],
//                 error: true
//             })
//         }
//     },[/*fileMedia.data,*/restMedia.data])
//
//     return media
// }
//
// export function useGetMediaById(id){
//
//     const [media, setMedia] = useState({
//         loading: false,
//         data: [],
//         error: false
//     })
//
//     const restMedia = restModelGetMediaById(id)
//     // const fileMedia = fileModelGetMediaById(id)
//
//     useEffect( () => {
//         setMedia({
//             loading: true,
//             data: [],
//             error: false
//         })
//         if(!restMedia.error && !restMedia.loading && restMedia.data != null){
//             setMedia({
//                 loading: false,
//                 data: restMedia.data,
//                 error: false
//             })
//         }
//         // else if (!fileMedia.error && !fileMedia.loading && fileMedia.data != null){
//         //     setMedia({
//         //         loading: false,
//         //         data: fileMedia.data,
//         //         error: false
//         //     })
//         // }
//         else {
//             setMedia({
//                 loading: false,
//                 data: [],
//                 error: true
//             })
//         }
//     },[/*fileMedia.data,*/restMedia.data])
//
//     return media
// }
//
// export function createMedia(media){
//     return create(media)
// }
// export function editMedia(media){
//     return edit(media)
// }