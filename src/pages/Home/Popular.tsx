import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from '../../components/common/Items/Item';

const Popular = () => {
    return (
        <Container className="my-3">
            <h3 className="text-center">Popular Items</h3>
            <Row>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Row>
        </Container>
    );
};

export default Popular;