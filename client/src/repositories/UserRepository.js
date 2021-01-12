import React,{ useState , useEffect } from 'react';
import { createUseMedia as create, releaseUseMedia as del } from '../model/requests/UserActionRestAPI'


export function createUseMedia(media_id){
    return create(media_id)
}

export function releaseUseMedia(media_id){
    return del(media_id)
}