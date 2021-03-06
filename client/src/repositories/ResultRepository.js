import React,{ useState , useEffect } from 'react';
import * as ResultModelRestAPI  from '../model/requests/ResultModelRestAPI';

export function useGetTestResultSum(test_name){

    const [test, setTest] = useState({
        loading: false,
        data: [],
        error: false
    })

    const testResults = ResultModelRestAPI.useGetTestResultSum(test_name)


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
    },[testResults.data])

    return test
}

export function useGetTestResultCount(test_name){

    const [test, setTest] = useState({
        loading: false,
        data: [],
        error: false
    })

    const testResults = ResultModelRestAPI.useGetTestResultCount(test_name)


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
    },[testResults.data])

    return test
}

export function useGetTestResultAvg(test_name){

    const [test, setTest] = useState({
        loading: false,
        data: [],
        error: false
    })

    const testResults = ResultModelRestAPI.useGetTestResultAvg(test_name)


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
    },[testResults.data])

    return test
}

export function useGetTestRankingResult(test_name){

    const [test, setTest] = useState({
        loading: false,
        data: [],
        error: false
    })

    const testResults = ResultModelRestAPI.useGetTestRankingResult(test_name)


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
    },[testResults.data])

    return test
}

export function useGetTestResultReadingTime(test_name){

    const [test, setTest] = useState({
        loading: false,
        data: [],
        error: false
    })

    const testResults = ResultModelRestAPI.useGetTestResultReadingTime(test_name)


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
    },[testResults.data])

    return test
}

export function useGetTestResultSummaryTime(test_name){

    const [test, setTest] = useState({
        loading: false,
        data: [],
        error: false
    })

    const testResults = ResultModelRestAPI.useGetTestResultSummaryTime(test_name)


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
    },[testResults.data])

    return test
}

export function useGetTestResultSummary(test_name){

    const [test, setTest] = useState({
        loading: false,
        data: [],
        error: false
    })

    const testResults = ResultModelRestAPI.useGetTestResultSummary(test_name)


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
    },[testResults.data])

    return test
}