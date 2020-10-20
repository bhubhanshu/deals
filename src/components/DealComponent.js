import React, { Component } from 'react';
import Loading from './LoadingComponent';
import { Card, CardImg, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';
import data from '../webScraper/data.json'

function RenderDeal(props){
    return(
        <div className="col-6 col-md-2">
                <div className="row">
                    <a href={props.deal.link} target="_blank">
                        <Card id="card" >
                            <CardImg top src={props.deal.img} height="55%"/>
                            <CardBody >
                                <CardTitle className="line-clamp title">{props.deal.store} {props.deal.price} {props.deal.discount}</CardTitle>
                                <CardSubtitle className="line-clamp">{props.deal.deal}</CardSubtitle>
                            </CardBody>
                        </Card>
                    </a>
                </div>
            </div>
    );
}

function Deals(props){
    return(
            <div class="row">
                {data.map((deal) => {
                    return(
                        RenderDeal(deal = {deal})
                    );
                })}
            </div>
    );
}

export default Deals;