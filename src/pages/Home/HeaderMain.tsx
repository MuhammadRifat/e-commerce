import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <Container className="mt-1">
            <Row>
                <Col lg={3}>
                    <ListGroup className="fixed-start">
                        <NavLink to="/category/Rice Shop"><ListGroup.Item>Rice Shop</ListGroup.Item></NavLink>
                        <NavLink to="/category/Vegetables Shop"><ListGroup.Item>Vegetables Shop</ListGroup.Item></NavLink>
                        <NavLink to="/category/Grocery Shop"><ListGroup.Item>Grocery Shop</ListGroup.Item></NavLink>
                        <NavLink to="/category/Fish market"><ListGroup.Item>Fish market</ListGroup.Item></NavLink>
                        <NavLink to="/category/Meat Shop"><ListGroup.Item>Meat Shop</ListGroup.Item></NavLink>
                        <NavLink to="/category/Eggs Shop"><ListGroup.Item>Eggs Shop</ListGroup.Item></NavLink>
                        <NavLink to="/category/Fruits Shop"><ListGroup.Item>Fruits Shop</ListGroup.Item></NavLink>
                        <NavLink to="/category/Cosmetics Shop"><ListGroup.Item>Cosmetics Shop</ListGroup.Item></NavLink>
                        <NavLink to="/category/Beverage & Foods Shop"><ListGroup.Item>Beverage & Foods Shop</ListGroup.Item></NavLink>
                        <NavLink to="/category/Medicine Shop"><ListGroup.Item>Medicine Shop</ListGroup.Item></NavLink>
                    </ListGroup>
                </Col>
                <Col lg={9}>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                height="320"
                                src="https://icms-image.slatic.net/images/ims-web/29720204-a542-4591-bae0-dba939367d08.jpg_1200x1200.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                height="320"
                                src="https://icms-image.slatic.net/images/ims-web/29720204-a542-4591-bae0-dba939367d08.jpg_1200x1200.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderMain;