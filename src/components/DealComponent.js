import React, { Component } from 'react';
import Loading from './LoadingComponent';
import Card from 'react-bootstrap/Card';
import { CardDeck,Button } from 'react-bootstrap';
import data from '../webScraper/data.json'

function RenderDeal(props){
    return(
        <div class="col-md-3">
            <Card style={{height: '10rem' }}>
                <Card.Img variant="top" src={props.deal.img} />
                <Card.Body>
                    <Card.Title>{props.deal.store}</Card.Title>
                    <Card.Text>{props.deal.deal}</Card.Text>
                    <Button variant="primary" href={props.deal.link} target="_blank" >Get Deal</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

function Deals(props){
    return(
        <CardDeck>
            <div class="row">
                {data.map((deal) => {
                    
                    return(
                        RenderDeal(deal = {deal})
                    );
                })}
            </div>
        </CardDeck>
    );
}

export default Deals;