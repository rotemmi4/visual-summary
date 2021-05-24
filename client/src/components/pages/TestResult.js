import React, {useState} from 'react'
import {Container, Form} from "react-bootstrap";
import * as testRepository from "../../repositories/TestRepository";
import * as resultRepository from "../../repositories/ResultRepository";
import {CSVLink} from "react-csv";

export default function TestResult() {

    const allTests = testRepository.useGetAllTest()
    const [testName, setTestName] = useState()
    const test_result_sum = resultRepository.useGetTestResultSum(testName)
    const test_result_count = resultRepository.useGetTestResultCount(testName)
    const test_result_avg = resultRepository.useGetTestResultAvg(testName)
    const test_result_reading_time = resultRepository.useGetTestResultReadingTime(testName)

    //CSV FILE
    const headers_sum= [
        { label: "Student ID", key: "studentID" },
        { label: "Age", key: "studentAge" },
        { label: "Gender", key: "studentGender" },

        { label: "Set1_Plain_Text", key: "Without Visualization_set1" },
        { label: "Set1_Gradual_Highlight", key: "Gradual Highlight_set1" },
        { label: "Set1_Highlight", key: "Highlight_set1" },
        { label: "Set1_Font", key: "Increased Font_set1" },
        { label: "Set1_Gradual_Font", key: "Gradual Font_set1" },
        { label: "Set1_Summary", key: "Summary Only_set1" },

        { label: "Set2_Plain_Text", key: "Without Visualization_set2" },
        { label: "Set2_Gradual_Highlight", key: "Gradual Highlight_set2" },
        { label: "Set2_Highlight", key: "Highlight_set2" },
        { label: "Set2_Font", key: "Increased Font_set2" },
        { label: "Set2_Gradual_Font", key: "Gradual Font_set2" },
        { label: "Set2_Summary", key: "Summary Only_set2" },

        { label: "Set3_Plain_Text", key: "Without Visualization_set3" },
        { label: "Set3_Gradual_Highlight", key: "Gradual Highlight_set3" },
        { label: "Set3_Highlight", key: "Highlight_set3" },
        { label: "Set3_Font", key: "Increased Font_set3" },
        { label: "Set3_Gradual_Font", key: "Gradual Font_set3" },
        { label: "Set3_Summary", key: "Summary Only_set3" },
    ];
    const data_sum = test_result_sum.data

    const csvReport_sum = {
        data: data_sum,
        headers: headers_sum,
        filename: testName+'_Total_Answers_Time_Results.csv'


    };
    let resultTable_sum
    if(testName != null) {
        resultTable_sum= <CSVLink {...csvReport_sum} target="_blank">Export to CSV For Students Total Answers Time Results</CSVLink>
    }

    //CSV FILE
    const headers_count= [
        { label: "Student ID", key: "studentID" },
        { label: "Age", key: "studentAge" },
        { label: "Gender", key: "studentGender" },

        { label: "Set1_Plain_Text", key: "Without Visualization_set1" },
        { label: "Set1_Gradual_Highlight", key: "Gradual Highlight_set1" },
        { label: "Set1_Highlight", key: "Highlight_set1" },
        { label: "Set1_Font", key: "Increased Font_set1" },
        { label: "Set1_Gradual_Font", key: "Gradual Font_set1" },
        { label: "Set1_Summary", key: "Summary Only_set1" },

        { label: "Set2_Plain_Text", key: "Without Visualization_set2" },
        { label: "Set2_Gradual_Highlight", key: "Gradual Highlight_set2" },
        { label: "Set2_Highlight", key: "Highlight_set2" },
        { label: "Set2_Font", key: "Increased Font_set2" },
        { label: "Set2_Gradual_Font", key: "Gradual Font_set2" },
        { label: "Set2_Summary", key: "Summary Only_set2" },

        { label: "Set3_Plain_Text", key: "Without Visualization_set3" },
        { label: "Set3_Gradual_Highlight", key: "Gradual Highlight_set3" },
        { label: "Set3_Highlight", key: "Highlight_set3" },
        { label: "Set3_Font", key: "Increased Font_set3" },
        { label: "Set3_Gradual_Font", key: "Gradual Font_set3" },
        { label: "Set3_Summary", key: "Summary Only_set3" },
    ];
    const data_count = test_result_count.data

    const csvReport_count = {
        data: data_count,
        headers: headers_count,
        filename: testName+'_Answers_Score_Results.csv'


    };
    let resultTable_count
    if(testName != null) {
        resultTable_count = <CSVLink {...csvReport_count} target="_blank">Export to CSV For Students Answers Score Results</CSVLink>
    }

    //CSV FILE
    const headers_avg= [
        { label: "Student ID", key: "studentID" },
        { label: "Age", key: "studentAge" },
        { label: "Gender", key: "studentGender" },

        { label: "Set1_Plain_Text", key: "Without Visualization_set1" },
        { label: "Set1_Gradual_Highlight", key: "Gradual Highlight_set1" },
        { label: "Set1_Highlight", key: "Highlight_set1" },
        { label: "Set1_Font", key: "Increased Font_set1" },
        { label: "Set1_Gradual_Font", key: "Gradual Font_set1" },
        { label: "Set1_Summary", key: "Summary Only_set1" },

        { label: "Set2_Plain_Text", key: "Without Visualization_set2" },
        { label: "Set2_Gradual_Highlight", key: "Gradual Highlight_set2" },
        { label: "Set2_Highlight", key: "Highlight_set2" },
        { label: "Set2_Font", key: "Increased Font_set2" },
        { label: "Set2_Gradual_Font", key: "Gradual Font_set2" },
        { label: "Set2_Summary", key: "Summary Only_set2" },

        { label: "Set3_Plain_Text", key: "Without Visualization_set3" },
        { label: "Set3_Gradual_Highlight", key: "Gradual Highlight_set3" },
        { label: "Set3_Highlight", key: "Highlight_set3" },
        { label: "Set3_Font", key: "Increased Font_set3" },
        { label: "Set3_Gradual_Font", key: "Gradual Font_set3" },
        { label: "Set3_Summary", key: "Summary Only_set3" },
    ];
    const data_avg = test_result_avg.data

    const csvReport_avg = {
        data: data_avg,
        headers: headers_avg,
        filename: testName+'_Average_Answers_Time_Results.csv'


    };
    let resultTable_avg
    if(testName != null) {
        resultTable_avg = <CSVLink {...csvReport_avg} target="_blank">Export to CSV For Students Average Answers Time Results</CSVLink>
    }



    //CSV FILE
    const headers_reading_time= [
        { label: "Student ID", key: "studentID" },
        { label: "Age", key: "studentAge" },
        { label: "Gender", key: "studentGender" },

        { label: "Set1_Plain_Text", key: "Without Visualization_set1" },
        { label: "Set1_Gradual_Highlight", key: "Gradual Highlight_set1" },
        { label: "Set1_Highlight", key: "Highlight_set1" },
        { label: "Set1_Font", key: "Increased Font_set1" },
        { label: "Set1_Gradual_Font", key: "Gradual Font_set1" },
        { label: "Set1_Summary", key: "Summary Only_set1" },

        { label: "Set2_Plain_Text", key: "Without Visualization_set2" },
        { label: "Set2_Gradual_Highlight", key: "Gradual Highlight_set2" },
        { label: "Set2_Highlight", key: "Highlight_set2" },
        { label: "Set2_Font", key: "Increased Font_set2" },
        { label: "Set2_Gradual_Font", key: "Gradual Font_set2" },
        { label: "Set2_Summary", key: "Summary Only_set2" },

        { label: "Set3_Plain_Text", key: "Without Visualization_set3" },
        { label: "Set3_Gradual_Highlight", key: "Gradual Highlight_set3" },
        { label: "Set3_Highlight", key: "Highlight_set3" },
        { label: "Set3_Font", key: "Increased Font_set3" },
        { label: "Set3_Gradual_Font", key: "Gradual Font_set3" },
        { label: "Set3_Summary", key: "Summary Only_set3" },
    ];
    const data_reading_time = test_result_reading_time.data

    const csvReport_reading_time = {
        data: data_reading_time,
        headers: headers_reading_time,
        filename: testName+'_Text_Reading_Time_Results.csv'


    };
    let resultTable_reading_time
    if(testName != null) {
        resultTable_reading_time = <CSVLink {...csvReport_reading_time} target="_blank">Export to CSV For Students Text Reading Time Results</CSVLink>
    }



    const test_result_rank = resultRepository.useGetTestRankingResult(testName)
    const headers_rank= [
        { label: "Student ID", key: "student_id" },
        { label: "Without Visualization Rank", key: "withoutVisualization_rank" },
        { label: "Gradual Highlight Rank", key: "gradualHighlight_rank" },
        { label: "Highlight Rank", key: "highlight_rank" },
        { label: "Increased Font Rank", key: "increasedFont_rank" },
        { label: "Gradual Font Rank", key: "gradualFont_rank" },
        { label: "Summary Only Rank", key: "summaryOnly_rank" },
        { label: "Without Visualization Place", key: "withoutVisualization_place" },
        { label: "Gradual Highlight Place", key: "gradualHighlight_place" },
        { label: "Highlight Place", key: "highlight_place" },
        { label: "Increased Font Place", key: "increasedFont_place" },
        { label: "Gradual Font Place", key: "gradualFont_place" },
        { label: "Summary Only Place", key: "summaryOnly_place" },

    ];
    const data_rank = test_result_rank.data

    const csvReport_rank = {
        data: data_rank,
        headers: headers_rank,
        filename: testName+'_Ranking_Results.csv'
    };

    let resultTable_rank
    if(testName != null){
        resultTable_rank = <CSVLink {...csvReport_rank} target="_blank">Export to CSV For Ranking Results</CSVLink>
    }



    return (
        <>
            <Container>
                <h2 className="mb-3 text-left">Results</h2>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="mb-3 text-left">Choose Test:</h4>
                        <Form>
                            <div>
                                <select defaultValue={-1} onChange={(e)=>setTestName(e.target.value)}>
                                    <option disabled value={-1} hidden> -- select an option -- </option>
                                    {allTests && allTests.data ? allTests.data.map(test => (
                                        <option key={test.name} value={test.name}>{test.name}</option>
                                    )) : null}
                                </select>

                            </div>
                        </Form>
                    </div>
                </div><br/><br/>
                <div>
                    {resultTable_sum}
                </div>
                <div>
                    {resultTable_count}
                </div>
                <div>
                    {resultTable_avg}
                </div>
                <div>
                    {resultTable_reading_time}
                </div>
                <div>
                    {resultTable_rank}
                </div>
            </Container><br/><br/>
        </>);




}