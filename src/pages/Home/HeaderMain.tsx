import { Carousel, Container } from 'react-bootstrap';

const HeaderMain = () => {
    return (
        <Container className="mt-1">
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
        </Container>
    );
};

export default HeaderMain;