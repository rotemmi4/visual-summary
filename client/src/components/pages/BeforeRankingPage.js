import React, {useEffect, useRef, useState} from "react";
import {Container} from "react-bootstrap";



export function BeforeRankingPage(props){

    return(
        <Container>
            <p>
                <br/>
                <br/>
                <br/>
                <br/>

                <h3>You have finished the part of reading!</h3>
                <br/>
                <br/>
                 Now you will move to ranking page and you will have to rank the visualizations.
                <br/>
                In first page you have to give a 1 to 10 start for each visualization.
                <br/>
                On second page you will have to chose witch visualization is better then other, By choosing the visualization per place.
            </p>
        </Container>
    )
}