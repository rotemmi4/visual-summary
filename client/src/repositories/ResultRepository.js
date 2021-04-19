import React,{ useState , useEffect } from 'react';
import * as ResultModelRestAPI  from '../model/requests/ResultModelRestAPI';
import * as testModelRestAPI from "../model/requests/TestModelRestAPI";

export function useGetTestResult(test_name){

    const [test, setTest] = useState({
        loading: false,
        data: [],
        error: false
    })

    const testResults = ResultModelRestAPI.useGetTestResult(test_name)


    useEffect( () => {
        setTest({
            loading: true,
            data: [],
            error: false
        })
        if(!testResults.error && !testResults.loading && testResults.data != null){
            setTest({
                loading: false,
                data: testResults.data,
                error: false
            })
        }
        else {
            setTest({
                loading: false,
                data: [],
                error: true
            })
        }
    },[/*fileText.data,*/testResults.data])

    return test
}