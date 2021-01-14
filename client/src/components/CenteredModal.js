import React, {useState} from 'react'
import {Button, Container, Modal, Row, Col} from 'react-bootstrap';
import {TextVisualization} from "./TextVisualization";
import * as textRepository from "../repositories/TextRepository";
import "./Modal.css"

//style={{position: "absolute" , left: "10px"}}
export function CenteredModal(props) {
  const id = props.text
  const text1 = textRepository.useGetTextWeights(id)
  const [type, setType] = useState("Without Visualization");



    return (
      <Modal
        {...props}
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
        dialogClassName="my-modal"

      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Visualization
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Col >
              <h3>Visualization : {type}</h3>

              <div class="form-check">
                <input type="radio" checked={type === "Without Visualization"} value="Without Visualization" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Without Visualization</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Highlight"} value="Highlight" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Highlight</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Gradual Highlight"} value="Gradual Highlight" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Gradual Highlight</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Increased Font"} value="Increased Font" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Increased Font</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Gradual Font"} value="Gradual Font" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Gradual Font</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Summary Only"} value="Summary Only" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Summary Only</label>
              </div>
              </Col >
              <Col >
              {text1 && text1.data ? <TextVisualization sentences={text1.data.sentences} type={type} /*type={type}*/ name={text1.data.name}/> : null}
              </Col>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button href={''}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}