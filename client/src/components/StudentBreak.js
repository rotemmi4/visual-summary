import React from "react";
import {Container} from 'react-bootstrap'
import { Button } from 'react-bootstrap'




export function StudentBreak(props){



    return (
        <Container style={{textAlign: 'center'}}>
            <br/><br/><br/><br/>
            <h2>You can take a break now</h2>
            <br/><br/><br/><br/>

            <Button variant="primary" size="lg" onClick={() => {props.showTextAfterBreak();}}>Continue the test</Button>
            <br/>
            <br/>
        </Container>

    )
}