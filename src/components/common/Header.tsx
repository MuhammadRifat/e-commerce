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
            {/* Top Navigation */}
            <Container className="d-flex justify-content-between py-1" style={{ fontSize: '14px' }}>
                <div>
                    <b><Icon icon={faPhoneAlt} /> Call us: </b>
                    <a href="callto:0123456789" className="text-decoration-none mx-2 text-dark">0123456789</a>
                </div>
                <div>
                    <NavLink to="/blog" className={(navInfo) => (navInfo.isActive ? "activeNav mx-3 hide" : "text-decoration-none mx-3 text-dark hide")}>Blog</NavLink>
                    <NavLink to="/contact" className={(navInfo) => (navInfo.isActive ? "activeNav mx-3 hide" : "text-decoration-none mx-3 text-dark hide")}>Contact Us</NavLink>
                    <NavLink to="/login" className={(navInfo) => (navInfo.isActive ? "activeNav mx-3" : "text-decoration-none mx-3 text-dark")}>Login / SignUp</NavLink>
                    <span>|</span>
                    <a href="#" className="text-decoration-none mx-2 text-dark"><Icon icon={faFacebook} /></a>
                    <a href="#" className="text-decoration-none mx-1 text-dark"><Icon icon={faTwitter} /></a>
                </div>
            </Container>

            
            <form className="d-none search-form bg-primary pt-2 px-3 show">
                <input type="text" name="search" className="" placeholder="Search..." id="search" />
                <button type="submit" className=""><Icon icon={faSearch} /></button>
            </form>

            {/* Main Navigation */}
            <Navbar bg="primary" variant="dark" className="sticky-top">
                <Container className="py-1">
                    <Col md={4}>
                        <Navbar.Brand>
                            <Link to="/">
                                <img src={logo} alt="Logo" width="180" />
                            </Link>
                        </Navbar.Brand>
                    </Col>
                    <Col md={5}>
                        <form className="d-flex search-form hide">
                            <input type="text" name="search" className="" placeholder="Search..." id="search" />
                            <button type="submit" className=""><Icon icon={faSearch} /></button>
                        </form>
                    </Col>
                    <Col md={3} className="text-end">
                        <span className="text-white fs-3 me-4"><Icon icon={faShoppingCart} /></span>
                        <span className="text-white fs-3 mx-2"><Icon icon={faUser} /></span>
                    </Col>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;