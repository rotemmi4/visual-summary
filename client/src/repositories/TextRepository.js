import React,{ useState , useEffect } from 'react';
import * as textModelRestAPI  from '../model/requests/TextModelRestAPI';


export function save(type,textID,propertyName,propertyValue,propertyType,testName,testType){
    textModelRestAPI.saveVisualizationForText(type,textID,propertyName,propertyValue,propertyType,testName,testType)
}

export function useGetAllText(){

    const [text, setText] = useState({
        loading: false,
        data: [],
        error: false
    })

    const restText = textModelRestAPI.useGetAllText()
    //const fileText = textDummieModel.useGetAllText()

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
        // else if (!fileText.error && !fileText.loading && fileText.data != null){
        //     setText({
        //         loading: false,
        //         data: fileText.data,
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
    },[/*fileText.data,*/restText.data])

    return text
}


export function useGetAllQuestionsById(id){

    const [question, setQuestion] = useState({
        loading: false,
        data: [],
        error: false
    })

    const restQuestion = textModelRestAPI.useGetAllQuestionsById(id)

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


export function useRandomText(){

    const [text, setText] = useState({
        loading: false,
        data: [],
        error: false
    })

    const restText = textModelRestAPI.useRandomTexts()
    //const fileText = textDummieModel.useGetAllText()

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
            // else if (!fileText.error && !fileText.loading && fileText.data != null){
            //     setText({
            //         loading: false,
            //         data: fileText.data,
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
    },[/*fileText.data,*/restText.data])

    return text
}

export function useRandomTextAndVisualization(){

    const [text, setText] = useState({
        loading: false,
        data: [],
        error: false
    })

    const restText = textModelRestAPI.useRandomTextsAndVisualization()
    //const fileText = textDummieModel.useGetAllText()

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
            // else if (!fileText.error && !fileText.loading && fileText.data != null){
            //     setText({
            //         loading: false,
            //         data: fileText.data,
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
    },[/*fileText.data,*/restText.data])

    return text
}



export function useGetQuestionId(){

    const [questionId, setQuestionId] = useState({
        loading: false,
        data: [],
        error: false
    })

    const restQuestionId = textModelRestAPI.useGetQuestionId()

    useEffect( () => {
        setQuestionId({
            loading: true,
            data: [],
            error: false
        })
        if(!restQuestionId.error && !restQuestionId.loading && restQuestionId.data != null){
            setQuestionId({
                loading: false,
                data: restQuestionId.data,
                error: false
            })
        }
        else {
            setQuestionId({
                loading: false,
                data: [],
                error: true
            })
        }
    },[restQuestionId.data])

    return questionId
}

// export function createText(text){
//     return create(text)
// }
// export function editMedia(text){
//     return edit(text)
// }