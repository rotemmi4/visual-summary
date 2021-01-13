import React, {useState} from 'react'
import {Button, Container, Modal, Row} from 'react-bootstrap';
import {TextVisualitaion} from "./TextVisualitaion";
import * as textRepository from "../repositories/TextRepository";

export function CenteredModal(props) {
  const id = props.text
  const text1 = textRepository.useGetTextWeights(id)
  const [type, setType] = useState("Without Visualization");

    return (
      <Modal
        {...props}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div className="mt-5 justify-content-center align-items-center"  style={{position: "absolute" , left: "40px"}} >
              <h3>Visualization : {type}</h3>
            </div>
            <div className="mt-5 justify-content-center align-items-center" style={{position: "absolute" , left: "40px"}}>
              <div className="mt-5 justify-content-center align-items-center">
                <input type="radio" checked={type === "Without Visualization"} value="Without Visualization" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Without Visualization</label>
              </div>
              <div className="mt-5 justify-content-center align-items-center">
                <input type="radio" checked={type === "Highlight"} value="Highlight" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Highlight</label>
              </div>
              <div className="mt-5 justify-content-center align-items-center">
                <input type="radio" checked={type === "Gradual Highlight"} value="Gradual Highlight" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Gradual Highlight</label>
              </div>
              <div className="mt-5 justify-content-center align-items-center">
                <input type="radio" checked={type === "Increased Font"} value="Increased Font" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Increased Font</label>
              </div>
              <div className="mt-5 justify-content-center align-items-center">
                <input type="radio" checked={type === "Gradual Font"} value="Gradual Font" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Gradual Font</label>
              </div>
              <div className="mt-5 justify-content-center align-items-center">
                <input type="radio" checked={type === "Summary Only"} value="Summary Only" onChange={(e)=>{setType(e.target.value)}}/>
                <label>Summary Only</label>
                <br/><br/><br/>
                <Button href={''}>Save</Button>

              </div>
            </div>
            <Row className="justify-content-center align-items-center" style={{position: "absolute" , right: "40px" ,  width: "60pc" }}>
              {text1 && text1.data ? <TextVisualitaion sentences={text1.data.sentences} type={type} /*type={type}*/ name={text1.data.name}/> : null}

            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}