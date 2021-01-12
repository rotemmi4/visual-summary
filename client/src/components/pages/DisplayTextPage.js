import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetMediaById } from '../../model/requests/MediaModelRestAPI';
import {TextVisualitaion} from '../TextVisualitaion'
import * as textRepository from '../../repositories/TextRepository'


export default function DisplayTextPage(){

    const { id } = useParams()
    const text = textRepository.useGetTextWeights(id)
    const [type, setType] = useState(0)
    
    return(
        <>
            {/* radio buttons every change in radio button change type*/}
            {text && text.data ? <TextVisualitaion sentences={text.data.sentences} type={1} /*type={type}*/ name={text.data.name}/> : null}
        </>
    )










}