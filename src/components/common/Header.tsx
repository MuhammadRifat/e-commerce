import { Col, Container, Navbar } from 'react-bootstrap';
import { faPhoneAlt, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import logo from '../../assets/images/default-monochrome.svg';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Container className="d-flex justify-content-between py-1" style={{ fontSize: '14px' }}>
                <div>
                    <b><Icon icon={faPhoneAlt} /> Call us: </b>
                    <a href="callto:0123456789" className="text-decoration-none mx-2 text-dark">0123456789</a>
                </div>
                <div>
                    <NavLink to="/blog" className={(navInfo) => (navInfo.isActive ? "activeNav mx-3" : "text-decoration-none mx-3 text-dark")}>Blog</NavLink>
                    <NavLink to="/contact" className={(navInfo) => (navInfo.isActive ? "activeNav mx-3" : "text-decoration-none mx-3 text-dark")}>Contact Us</NavLink>
                    <NavLink to="/login" className={(navInfo) => (navInfo.isActive ? "activeNav mx-3" : "text-decoration-none mx-3 text-dark")}>Login / SignUp</NavLink>
                    <span>|</span>
                    <a href="#" className="text-decoration-none mx-2 text-dark"><Icon icon={faFacebook} /></a>
                    <a href="#" className="text-decoration-none mx-1 text-dark"><Icon icon={faTwitter} /></a>
                </div>
            </Container>

            <Navbar bg="primary" variant="dark" className="sticky-top">
                <Container className="py-1">
                    <Col md={3}>
                        <Navbar.Brand>
                            <Link to="/">
                                <img src={logo} alt="Logo" width="180" />
                            </Link>
                        </Navbar.Brand>
                    </Col>
                    <Col md={5} className="d-flex">
                        <input type="text" name="search" className="form-control" placeholder="Search..." id="search" />
                        <button className="btn btn-light"><Icon icon={faSearch} /></button>
                    </Col>
                    <Col md={4} className="text-end">
                        <button className="btn btn-light"><Icon icon={faShoppingCart} /></button>
                        <button className="btn btn-light ms-2"><Icon icon={faUser} /></button>
                    </Col>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;