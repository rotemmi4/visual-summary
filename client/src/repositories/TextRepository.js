import React,{ useState , useEffect } from 'react';
import * as textModelRestAPI  from '../model/requests/TextModelRestAPI';


export function save(type,textID,propertyName,propertyValue,propertyType){
    textModelRestAPI.saveVisualizationForText(type,textID,propertyName,propertyValue,propertyType)
}

export function useGetAllText(){

    const [text, setText] = useState({
        loading: false,
        data: [],
        error: false
    })

    const restText = textModelRestAPI.useGetAllText()

    useEffect( () => {
        setText({
            loading: true,
            data: [],
            error: false
        })
        if(!restText.error && !restText.loading && restText.data != null){
            setText({
                loading: false,
                data: restText.data,
                error: false
            })
        }
        else {
            setText({
                loading: false,
                data: [],
                error: true
            })
        }
    },[restText.data])

    return text
}

export function useGetAllQuestionsById() {

    const [question, setQuestion] = useState({
        loading: false,
        data: [],
        error: false
    })

    const restQuestion = textModelRestAPI.useGetAllQuestionsById()

    useEffect( () => {
        setQuestion({
            loading: true,
            data: [],
            error: false
        })
        if(!restQuestion.error && !restQuestion.loading && restQuestion.data != null){
            setQuestion({
                loading: false,
                data: restQuestion.data,
                error: false
            })
        }
        else {
            setQuestion({
                loading: false,
                data: [],
                error: true
            })
        }
    },[restQuestion.data])

    return question
}


export function useGetTextById(id){

    const [text, setText] = useState({
        loading: false,
        data: [],
        error: false
    })

    const restText = textModelRestAPI.useGetTextById()
    // const fileMedia = textDummieModel.useGetTextById(id)

    useEffect( () => {
        setText({
            loading: true,
            data: [],
            error: false
        })
        if(!restText.error && !restText.loading && restText.data != null){
            setText({
                loading: false,
                data: restText.data,
                error: false
            })
        }
        // else if (!fileMedia.error && !fileMedia.loading && fileMedia.data != null){
        //     setText({
        //         loading: false,
        //         data: fileMedia.data,
        //         error: false
        //     })
        // }
        else {
            setText({
                loading: false,
                data: [],
                error: true
            })
        }
    },[/*fileMedia.data,*/restText.data])

    return text
}

export function useGetTextWeights(id){

    const [text, setText] = useState({
        loading: false,
        data: null,
        error: false
    })

    const restMedia = textModelRestAPI.useGetTextWeights(id)

    useEffect( () => {
        setText({
            loading: true,
            data: null,
            error: false
        })
        if(!restMedia.error && !restMedia.loading && restMedia.data != null){
            setText({
                loading: false,
                data: restMedia.data.length > 0 ? restMedia.data[0] : null,
                error: false
            })
        }
        else {
            setText({
                loading: false,
                data: null,
                error: true
            })
        }
    },[restMedia.data])

    return text
}

// export function createText(text){
//     return create(text)
// }
// export function editMedia(text){
//     return edit(text)
// }