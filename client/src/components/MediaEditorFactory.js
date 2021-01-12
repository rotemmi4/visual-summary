import React from 'react'
import {PictureAlbumEditor} from './editors/PictureAlbumEditor'
import {BookEditor} from './editors/BookEditor'
import {HardDriveEditor} from './editors/HardDriveEditor'
import {MusicAlbumEditor} from './editors/MusicAlbumEditor'

export default function MediaEditorFactory(props){

    switch (props.mediaType) {
        case 'picture_album':
            return <PictureAlbumEditor media={props.component} handleInputChange={props.handleInputChange} handleCancel={props.handleCancel}/>;
        case 'book':
            return <BookEditor media={props.component} handleInputChange={props.handleInputChange}/>;
        case 'hd':
            return <HardDriveEditor media={props.component} handleInputChange={props.handleInputChange}/>;
        case 'music_album':
            return <MusicAlbumEditor media={props.component} handleInputChange={props.handleInputChange}/>;
        default:
            return (<></>);
    }

}