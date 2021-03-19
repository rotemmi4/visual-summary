import React,{ useState , useEffect } from 'react';
import * as testModelRestAPI  from '../model/requests/TestModelRestAPI';


export function useGetAllTest(){

    const [test, setTest] = useState({
        loading: false,
        data: [],
        error: false
    })

    const restTest = testModelRestAPI.useGetAllTest()


    useEffect( () => {
        setTest({
            loading: true,
            data: [],
            error: false
        })
        if(!restTest.error && !restTest.loading && restTest.data != null){
            setTest({
                loading: false,
                data: restTest.data,
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
    },[/*fileText.data,*/restTest.data])

    return test
}