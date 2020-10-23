import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Carousel from './CarouselComponent';
import Deals from './DealComponent';
import Footer from './Footer';

function Header() {
    return (
        <div className="container-fluid p-3">
            <div className="row justify-content-center">
                <h1>Loot Deals</h1>
            </div>
        </div>
    );
}

class Main extends Component {
    render() {
        return( 
            <div>
                <Header />
                <Carousel />
            </div>
        );
    }
}

export default withRouter(Main);