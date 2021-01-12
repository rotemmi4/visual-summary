import React from 'react'
import { Media } from 'react-bootstrap';


export function PictureAlbumMedia(props){

    let album = props.media;

    return (
        <>
            <Media as="li">
            <img
            width={64}
            height={64}
            className="mr-3"
            src={album.image ? album.image : "https://via.placeholder.com/64"}
            alt="Generic placeholder"
            />
            <Media.Body>
                <h5>{album.name}</h5>
                <h5>{album.date}</h5>
                <h5>{album.location}</h5>
            </Media.Body>
        </Media>
        </>
    )
}