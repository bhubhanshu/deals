import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const items = [
    {
        src: 'https://cdn1.desidime.com/cdn-cgi/image/fit=contain,f=auto,onerror=redirect,w=640,h=360,q=90/ddb/sale/oct20/Flipakrt-The-Big-Billion-Days-Oct-2020-2.jpg',
        altText: 'Flipkart',
        key: '1'
    },
    {
        src: 'https://cdn1.desidime.com/cdn-cgi/image/fit=contain,f=auto,onerror=redirect,w=640,h=360,q=90/ddb/sale/oct20/myntra-sale-Oct2020.jpg',
        altText: 'Myntra',
        key: '2'
    },
    {
        src: 'https://cdn3.desidime.com/cdn-cgi/image/fit=contain,f=auto,onerror=redirect,w=640,h=360,q=80/ddb/sale/oct20/Amazon-GIF-Oct2020-3.jpg',
        altText: 'Amazon',
        key: '3'
    }
];

const Carousels = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <a href="https://www.flipkart.com" target="_blank"><img
                    className="d-block w-100"
                    src="https://cdn1.desidime.com/cdn-cgi/image/fit=contain,f=auto,onerror=redirect,w=640,h=360,q=90/ddb/sale/oct20/Flipakrt-The-Big-Billion-Days-Oct-2020-2.jpg"
                    alt="Flipkart"
                /></a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://www.myntra.com" target="_blank"><img
                    className="d-block w-100"
                    src="https://cdn1.desidime.com/cdn-cgi/image/fit=contain,f=auto,onerror=redirect,w=640,h=360,q=90/ddb/sale/oct20/myntra-sale-Oct2020.jpg"
                    alt="Myntra"
                /></a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://www.amazon.in" target="_blank"><img
                    className="d-block w-100"
                    src="https://cdn3.desidime.com/cdn-cgi/image/fit=contain,f=auto,onerror=redirect,w=640,h=360,q=80/ddb/sale/oct20/Amazon-GIF-Oct2020-3.jpg"
                    alt="Amazon"
                /></a>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;