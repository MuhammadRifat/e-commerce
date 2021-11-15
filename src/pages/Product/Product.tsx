import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Product = () => {
    const {id} = useParams();
    return (
        <Container>
            <h3>Product Details for {id}</h3>
        </Container>
    );
};

export default Product;