import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetMediaById } from '../../../../../../visual-summary/client/src/model/requests/MediaModelRestAPI';
import {TextVisualitaion} from '../../../../../../visual-summary/client/src/components/TextVisualitaion'
import * as textRepository from '../../../../../../visual-summary/client/src/repositories/TextRepository'


export default function DisplayTextPage(){

    const { id } = useParams()
    const text = textRepository.useGetTextWeights(id)
    const [type, setType] = useState(0)

    const [radio, setRadio] = useState("only Text");

    let textType=0

    // handleClick() {
    //     this.setRadio(state => ({
    //       isToggleOn: !state.isToggleOn
    //     }));
    //   }
    return(
        <>
        <form>
            {/* <h1>Drop Down Value is : {dropdown}</h1> */}
            {/* <select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
                <option value="apple">Apple</option>
                <option value="orange">Orange</option>
                <option value="banana">Banana</option>       
            </select> */}
//sdsdv
            {/* radio buttons every change in radio button change type*/}
            <br/>
            <h3>Radio burron is : {radio}</h3>
            <input type="radio" checked={radio === "WithOutVisualitation"} value="WithOutVisualitation" onChange={(e)=>{setRadio(e.target.value)}}/>
            <label>WithOutVisualitation  </label>
            <br/>
            <input type="radio" checked={radio === "Gadual Highlight"} value="Gadual Highlight" onChange={(e)=>{setRadio(e.target.value)}}/>
            <label>Gadual Highlight  </label>

            {text && text.data ? <TextVisualitaion sentences={text.data.sentences} type={1} /*type={type}*/ name={text.data.name}/> : null}

       </form>

        </>
    )










}