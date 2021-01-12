import React, { useEffect, useState } from 'react';
import { useGetAllMedia } from '../../repositories/MediaRepository';
import MediaFactory from '../MediaFactory';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createUseMedia, releaseUseMedia } from '../../repositories/UserRepository'
import { useAuth } from '../../model/context/auth_context';

export default function MediaManagment() {
    
    const {user} = useAuth()


    let media = useGetAllMedia();
    
    let content = null;
    
    if (media.error) {
        content = <div>there was a problem while loading the page</div>
    } else if (media.loading) {
        content = <div>loading media items</div>
    } else if (media.data != null) {
        let media_content = media.data.map((media_item,key) => 
            <Row className="mb-3 align-items-center justify-content-start border-bottom" key={media_item.id}>
                <Col className="mb-3">
                    <MediaFactory component={media_item}/>
                </Col>
                <Col className="mb-3 text-center">
                    {media_item.user_id != null && media_item.user_id != user.username ?
                        <Button disabled variant="light">Edit</Button> 
                        :
                        <Link to={`/edit/${media_item.id}`}>
                            <Button variant="light">Edit</Button>
                        </Link>
                    }
                </Col>
                <Col className="mb-3 text-center">
                    {media_item.user_id == null ?
                        <Button onClick={ () => {createUseMedia(media_item.id)}} variant="secondary">Use</Button> :
                        media_item.user_id != user.username ?
                        <Button disabled variant="secondary">Release</Button> : 
                        <Button onClick={ () => {releaseUseMedia(media_item.id)}} variant="secondary">Release</Button> 
                    }
                </Col>
            </Row>
        );

        content = (
            <Container className="border-left border-right">
                <Row className="mb-3 border-bottom align-items-center show-grid">
                    <Col>Media</Col>
                </Row>
                {media_content}
            </Container>
        )
    }

    return (
    <> 
        <Container>
        <h1 className="mb-3 text-center">Media Managment</h1>
            <Row className="justify-content-center">
                <Col></Col>
                <Col xs="9">
                    {/* <SearchBar filter={setFilter}/> */}
                    {content}
                </Col>
                <Col></Col>
            </Row>
            </Container>
    </>);
}
