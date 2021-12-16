import { Col, Container, Navbar } from 'react-bootstrap';
import { faPhoneAlt, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import logo from '../../assets/images/default-monochrome.svg';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';

const Header = () => {
    const cart: IProduct[] = useSelector((state: AppState) => state.cart);

    const handleCart = () => {

    }

    return (
        <>
            {/* Top Navigation */}
            <div className="bg-lightPrimary">
                <Container fluid className="d-flex justify-content-between py-1" style={{ fontSize: '14px' }}>
                    <div>
                        <b><Icon icon={faPhoneAlt} /> Call us: </b>
                        <a href="callto:0123456789" className="text-decoration-none mx-2 text-light">0123456789</a>
                    </div>
                    <div>
                        <NavLink to="/blog" className={(navInfo) => (navInfo.isActive ? "activeNav mx-3 hide" : "text-decoration-none mx-3 text-light hide")}>Blog</NavLink>
                        <NavLink to="/contact" className={(navInfo) => (navInfo.isActive ? "activeNav mx-3 hide" : "text-decoration-none mx-3 text-light hide")}>Contact Us</NavLink>
                        <NavLink to="/login" className={(navInfo) => (navInfo.isActive ? "activeNav mx-3 hide" : "text-decoration-none mx-3 text-light hide")}>Login / SignUp</NavLink>
                        <span>|</span>
                        <a href="#" className="text-decoration-none mx-2 text-light"><Icon icon={faFacebook} /></a>
                        <a href="#" className="text-decoration-none mx-1 text-light"><Icon icon={faTwitter} /></a>
                    </div>
                </Container>
            </div>


            <form className="d-none search-form bg-primary pt-2 px-3 show">
                <input type="text" name="search" className="" placeholder="Search..." id="search" />
                <button type="submit" className=""><Icon icon={faSearch} /></button>
            </form>

            {/* Main Navigation */}
            <Navbar bg="primary" variant="dark" className="sticky-top">
                <Container fluid className="py-1">
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
                    <Col md={3} className="d-flex justify-content-end">
                        <div className="text-white pe-4 position-relative">
                            <span className="fs-3 cursor-pointer" onClick={handleCart}><Icon icon={faShoppingCart} /></span>
                            {!!cart.length && <small className="bg-warning fw-bold rounded-circle px-2 position-absolute" style={{ right: 12, color: 'black' }}>{cart.length}</small>}
                        </div>
                        <span className="text-white fs-3 mx-2"><Icon icon={faUser} /></span>
                    </Col>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;