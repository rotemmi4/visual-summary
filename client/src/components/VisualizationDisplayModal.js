import React, {useState} from 'react'
import {Button, Container, Modal, Row, Col, Form} from 'react-bootstrap';
import {TextVisualization} from "./TextVisualization";
import * as textRepository from "../repositories/TextRepository";
import "./Modal.css"
import { CompactPicker   } from 'react-color'
import {COLORS, COLORS_SIZES} from "../colors";


//style={{position: "absolute" , left: "10px"}}
export function VisualizationDisplayModal(props) {
  const id = props.text
  const [palette, setPalette]= useState(COLORS['3'].Green)
  const [paletteSize , setPaletteSize] = useState(COLORS_SIZES[1])
  const [colors1, setColors1]= useState('Green')
  const [colors2, setColors2]= useState('Yellow')
  const [HighlightColor, setHighlightColor]= useState(COLORS['1'].Yellow)


  const text1 = textRepository.useGetTextWeights(id)
  const [type, setType] = useState(props.visualizationType);
  const [threshold , setThreshold] = useState(props.threshold)

  const [propertyName, setPropertyName] = useState(props.propertyName);
  const [propertyValue, setPropertyValue] = useState(props.propertyValue);
  const [propertyType, setPropertyType] = useState(props.propertyType);

  const [colorR,setColorR]=useState("255")
  const [colorG,setColorG]=useState("255")
  const [colorB,setColorB]=useState("255")

  const [colorPalette,setColorPalette]=useState("Yellow")
  const [sizePalette,setSizePalette]=useState('3')


  let onButtonClick = function(event){
    if(type == "Gradual Highlight"){
      props.parentCallback(propertyName,"'"+ sizePalette+"'"+","+"'"+colorPalette+"'"+"",propertyType,type,id,props.index,threshold)

    }
    else if(type == "Highlight"){
      props.parentCallback(propertyName,"'1',"+"'"+colorPalette+"'",propertyType,type,id,props.index,threshold)
    }
    else {props.parentCallback(propertyName,propertyValue,propertyType,type,id,props.index,threshold)}

    // textRepository.save(type,id,propertyName,propertyValue,propertyType)
    props.onHide()
  }


  let color = 'rgb('+colorR+','+colorG+','+colorB +')'

  let colorBar
  if(type == "Gradual Highlight"){
    // colorBar = <CompactPicker  color={color}  onChange={(color)=>{setColorR(color.rgb.r);setColorG(color.rgb.g);setColorB(color.rgb.b);setPropertyValue(colorR+','+colorG+','+colorB)}}   />
    colorBar = <div> <select value={paletteSize} onChange={(e)=>{setPaletteSize((e.target.value))
      setSizePalette(""+e.target.value+"")
      setPalette(COLORS[paletteSize][colors1])}}>
      {COLORS_SIZES.map(size => (
          <option key={size} value={size}>{size}</option>
      ))}
    </select>
    <select value={colors1} onChange={(e)=>{setColors1(e.target.value)
      setColorPalette(""+e.target.value+"")
      setPalette(COLORS[paletteSize][colors1])}}>
      {["Green","Yellow","Orange"].map(color => (
          <option key={color} value={color}>{color}</option>
      ))}
    </select></div>
  }
  else if(type == "Highlight"){
    colorBar= <select value={colors2} onChange={(e)=>{setColors2(e.target.value)
      setColorPalette(""+e.target.value+"")
      setHighlightColor(COLORS[1][colors2])}}>
      {["Yellow","Green"].map(color => (
          <option key={color} value={color}>{color}</option>
      ))}
    </select>
  }

  else {
    colorBar = <text></text>
  }

  let thresholdBar
    if(type == "Highlight" || type == "Increased Font" || type == "Summary Only" ){
        thresholdBar = <div><Form.Control  type="range" onChange={(e)=>{setThreshold(e.target.value / 100 )}}/>
            <p>Threshold: {threshold}</p></div>
    }
    else{
        thresholdBar = <text></text>
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
                <input type="radio" checked={type === "Without Visualization"} value="Without Visualization" onChange={(e)=>{setType(e.target.value); setPropertyName("none");setPropertyValue("none"); setPropertyType("none");setThreshold(0.5)}}/>
                <label>Without Visualization</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Highlight" } value="Highlight"  onChange={(e)=>{setType(e.target.value);  setPropertyName("color"); setPropertyValue(colorR+','+colorG+','+colorB); setPropertyType("str")}}/>
                <label>Highlight</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Gradual Highlight"} value="Gradual Highlight" onChange={(e)=>{setType(e.target.value);setPropertyName("color");setPropertyValue(colorR+','+colorG+','+colorB); setPropertyType("str");setThreshold(0.5)}}/>
                <label>Gradual Highlight</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Increased Font"} value="Increased Font" onChange={(e)=>{setType(e.target.value);setPropertyName("font"); setPropertyValue("18"); setPropertyType("int") }}/>
                <label>Increased Font</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Gradual Font"} value="Gradual Font" onChange={(e)=>{setType(e.target.value); setPropertyName("font"); setPropertyValue("18"); setPropertyType("int") ;setThreshold(0.5)}}/>
                <label>Gradual Font</label>
              </div>
              <div class="form-check">
                <input type="radio" checked={type === "Summary Only"} value="Summary Only" onChange={(e)=>{setType(e.target.value); setPropertyName("none") ;setPropertyValue("none"); setPropertyType("none") }}/>
                <label>Summary Only</label>
              </div>
              </Col >
            <Col>{colorPalette}</Col>
            <Col>
              <div >{colorBar}</div>
              <div>{thresholdBar}</div>
            </Col>
              <Col >
              {text1 && text1.data ? <TextVisualization sentences={text1.data.sentences} type={type} /*type={type}*/ name={text1.data.name} showBar={false} HighlightColor={COLORS[1][colors2]} palette={COLORS[paletteSize][colors1]} selectColorR={colorR} selectColorG={colorG} selectColorB={colorB} threshold={threshold}/> : null}
              </Col>
          </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={(e)=>{onButtonClick() }} href={''}>Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}