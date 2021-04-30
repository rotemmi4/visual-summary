import React, {useState} from 'react'
import { TextVisualizationFactory } from './TextVisualizationFactory'
import {Button} from "react-bootstrap";
import {deleteQuestion} from "../model/requests/TextModelRestAPI";
import * as textRepository from "../repositories/TextRepository";


export function QuestionsDropdown(props){

    const text_id = props.text_id
    const setQuestionId = props.setQuestionId

    let text_questions = textRepository.useGetAllQuestionsById(text_id)
    

    return (
        <div>
            <select defaultValue={-1} onChange={(e)=>{
                setQuestionId(parseInt(e.target.value))
            }}>
                <option disabled selected value={-1} value hidden> -- select an option -- </option>
                {text_questions.data.map(question => (
                    <option key={question.question_id} value={question.question_id}>{question.question_content}</option>
                ))}
            </select>
        </div>
    )
}