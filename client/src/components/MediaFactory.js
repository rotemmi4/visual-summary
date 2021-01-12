import React from 'react'
import {PictureAlbumMedia} from './media/PictureAlbumMedia'
import {BookMedia} from './media/BookMedia'
import {HardDriveMedia} from './media/HardDriveMedia'
import {MusicAlbumMedia} from './media/MusicAlbumMedia'

export default function MediaFactory(props){

    switch (props.component.type) {
        case 'picture_album':
            return <PictureAlbumMedia media={props.component}/>;
        case 'book':
            return <BookMedia media={props.component}/>;
        case 'hd':
            return <HardDriveMedia media={props.component}/>;
        case 'music_album':
            return <MusicAlbumMedia media={props.component}/>;
        default:
            return (<></>);
    }

}