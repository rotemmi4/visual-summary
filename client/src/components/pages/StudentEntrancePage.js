import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StudentEntrance } from '../StudentEntrance'
import { set_student_info} from "../../model/requests/StudentModelRestAPI";


export function StudentEntrancePage(){


    const [studentInfo, setStudentInfo] = useState({
        studentID: "",
        studentAge: "",
        studentGender: "Male"
    })

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setStudentInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleStudentInfo = () => {
        console.log(studentInfo)
        set_student_info(studentInfo)
    }

    return (
        <Container className="fill-window align-items-center justify-content-center">
            <Row className="">
                <Col>
                    <StudentEntrance handleStudentInfo={handleStudentInfo} handleInputChange={handleInputChange}/>
                </Col>
            </Row>
        </Container>
    )


}