import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import { getToken } from '../hooks/authentication_provider'

export function createUseMedia(media_id){
    const url = 'http://127.0.0.1:5000/private/user/useMedia'
    const body = {media_id: media_id}
    const headers = {headers : {"x-auth-token": getToken()}}
    return axios.put(url, body, headers)
}

export function releaseUseMedia(media_id){
    const url = 'http://127.0.0.1:5000/private/user/releaseMedia'
    const body = {media_id: media_id}
    const headers = {headers : {"x-auth-token": getToken()}}
    return axios.put(url, body, headers)
}