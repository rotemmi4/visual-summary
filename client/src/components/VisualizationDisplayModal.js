import React, {useState} from 'react'
import {Button, Container, Modal, Row, Col} from 'react-bootstrap';
import {TextVisualization} from "./TextVisualization";
import * as textRepository from "../repositories/TextRepository";
import "./Modal.css"
import { CompactPicker   } from 'react-color'


//style={{position: "absolute" , left: "10px"}}
export function VisualizationDisplayModal(props) {
  const id = props.text

  const text1 = textRepository.useGetTextWeights(id)
  const [type, setType] = useState("Without Visualization");

  const [propertyName, setPropertyName] = useState("none");
  const [propertyValue, setPropertyValue] = useState("none");
  const [propertyType, setPropertyType] = useState("none");

  const [colorR,setColorR]=useState("255")
  const [colorG,setColorG]=useState("255")
  const [colorB,setColorB]=useState("255")

  let onButtonClick = function(event){
    props.parentCallback(propertyName,propertyValue,propertyType,type,id,props.index)
    // textRepository.save(type,id,propertyName,propertyValue,propertyType)
    props.onHide()
  }
  let color = 'rgb('+colorR+','+colorG+','+colorB +')'

  let colorBar
  if(propertyName == "color" ){
    colorBar = <CompactPicker  color={color}  onChange={(color)=>{setColorR(color.rgb.r);setColorG(color.rgb.g);setColorB(color.rgb.b)}}   />
  }
  else {
    colorBar = <text></text>
  }

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
                <input type="radio" checked={type === "Without Visualization"} value="Without Visualization" onChange={(e)=>{setType(e.target.value); setPropertyName("none");setPropertyValue("none"); setPropertyType("none")}}/>
                <label>Without Visualization</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Highlight" } value="Highlight"  onChange={(e)=>{setType(e.target.value); setPropertyName("color"); setPropertyValue("yellow"); setPropertyType("str")}}/>
                <label>Highlight</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Gradual Highlight"} value="Gradual Highlight" onChange={(e)=>{setType(e.target.value);setPropertyName("color");setPropertyValue("yellow"); setPropertyType("str")}}/>
                <label>Gradual Highlight</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Increased Font"} value="Increased Font" onChange={(e)=>{setType(e.target.value);setPropertyName("font"); setPropertyValue("18"); setPropertyType("int") }}/>
                <label>Increased Font</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Gradual Font"} value="Gradual Font" onChange={(e)=>{setType(e.target.value); setPropertyName("font"); setPropertyValue("18"); setPropertyType("int") }}/>
                <label>Gradual Font</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Summary Only"} value="Summary Only" onChange={(e)=>{setType(e.target.value); setPropertyName("none") ;setPropertyValue("none"); setPropertyType("none") }}/>
                <label>Summary Only</label>
              </div>
              </Col >
              <Col >
              {text1 && text1.data ? <TextVisualization sentences={text1.data.sentences} type={type} /*type={type}*/ name={text1.data.name} selectColorR={colorR} selectColorG={colorG} selectColorB={colorB}/> : null}
              </Col>
          </Container>
          <div >{colorBar}</div>
          <p>COLOR: {color}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={(e)=>{onButtonClick() }} href={''}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}