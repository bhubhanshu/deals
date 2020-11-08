import React, { Component } from 'react';
import Loading from './LoadingComponent';
import { Card, CardImg, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDeals } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      deals: state.deals
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchDeals: () => {dispatch(fetchDeals())}
  });

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

class Deals extends Component{
    componentDidMount(){
        this.props.fetchDeals();
    }
    render(){
        if(this.props.deals.isLoading){
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <Loading />
                    </div>
                </div>
            );
        }
        return(
            <div class="row">
                {this.props.deals.deals.map((deal) => {
                    return(
                        RenderDeal(deal = {deal})
                    );
                })}
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Deals));;