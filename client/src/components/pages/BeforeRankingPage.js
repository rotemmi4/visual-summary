import React, {} from "react";
import {Alert, Button, Row} from 'react-bootstrap'
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";



export function BeforeRankingPage(props){

    let text = <div>Hi</div>

    if(localStorage.getItem("testIDFull").includes("after"))
    {
        text =  <Container >
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Row className="justify-content-md-center">
                        <Link to={"/Done"}>
                              <Button variant="info" size="lg" block>
                                Thank You!
                              </Button>
                        </Link>
                    </Row>
                </Container>

    }
    else
    {
        text = <Container>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>You have finished the part of reading!</h3>
                    <p>
                        <br/>
                        <br/>
                        <br/>
                         Now you will move to ranking page and you will have to rank the visualizations.
                        <br/>
                        In first page you have to give a 1 to 10 start for each visualization.
                        <br/>
                        On second page you will have to chose witch visualization is better then other, By choosing the visualization per place.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <Link to={"/RankPage"}>
                         <Button type="button" variant="outline-success">
                              Move to rank!
                         </Button>
                     </Link>
                </Container>
    }

    return(
        <div>
            {text}
        </div>

    )
}