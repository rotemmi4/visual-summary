import React from 'react'
import { Media } from 'react-bootstrap';


export function HardDriveMedia(props){

    let drive = props.media;

    return (
        <>
            <Media as="li">
            <Media.Body>
                <h5>{drive.name}</h5>
                <h5>{drive.belong}</h5>
            </Media.Body>
        </Media>
        </>
    )
}