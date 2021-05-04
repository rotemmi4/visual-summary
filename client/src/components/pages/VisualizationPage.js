import React from 'react'
import { Container } from 'react-bootstrap'


export function VisualizationPage(){


    return (
        <>
            <Container>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
            </Container>
            
        </>
    )



}
