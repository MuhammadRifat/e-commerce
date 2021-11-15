import { useState } from 'react';
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

const SideNav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="positionSticky hide">
                <h5 className="text-center">Category</h5>
                <ListGroup className="mt-1">
                    <NavLink to="/category/Rice Shop"><ListGroup.Item className="categoryNav">Rice Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Vegetables Shop"><ListGroup.Item className="categoryNav">Vegetables Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Grocery Shop"><ListGroup.Item className="categoryNav">Grocery Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Fish market"><ListGroup.Item className="categoryNav">Fish market</ListGroup.Item></NavLink>
                    <NavLink to="/category/Chicken Shop"><ListGroup.Item className="categoryNav">Chicken Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Beef Shop"><ListGroup.Item className="categoryNav">Beef Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Mutton Shop"><ListGroup.Item className="categoryNav">Mutton Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Eggs Shop"><ListGroup.Item className="categoryNav">Eggs Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Fruits Shop"><ListGroup.Item className="categoryNav">Fruits Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Cosmetics Shop"><ListGroup.Item className="categoryNav">Cosmetics Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Beverage & Foods Shop"><ListGroup.Item className="categoryNav">Beverage & Foods Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Medicine Shop"><ListGroup.Item className="categoryNav">Medicine Shop</ListGroup.Item></NavLink>
                </ListGroup>
            </div>

            <div className="d-none show">
                <button className="border-0 bg-primary mt-1 px-3 py-1 text-white" onClick={handleShow}>
                    <Icon icon={faBars} /> Category
                </button>

                <Offcanvas show={show} onHide={handleClose} style={{width: "220px"}}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Category</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ListGroup className="mt-1" onClick={handleClose}>
                        <NavLink to="/category/Rice Shop"><ListGroup.Item className="categoryNav">Rice Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Vegetables Shop"><ListGroup.Item className="categoryNav">Vegetables Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Grocery Shop"><ListGroup.Item className="categoryNav">Grocery Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Fish market"><ListGroup.Item className="categoryNav">Fish market</ListGroup.Item></NavLink>
                    <NavLink to="/category/Chicken Shop"><ListGroup.Item className="categoryNav">Chicken Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Beef Shop"><ListGroup.Item className="categoryNav">Beef Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Mutton Shop"><ListGroup.Item className="categoryNav">Mutton Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Eggs Shop"><ListGroup.Item className="categoryNav">Eggs Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Fruits Shop"><ListGroup.Item className="categoryNav">Fruits Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Cosmetics Shop"><ListGroup.Item className="categoryNav">Cosmetics Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Beverage & Foods Shop"><ListGroup.Item className="categoryNav">Beverage & Foods Shop</ListGroup.Item></NavLink>
                    <NavLink to="/category/Medicine Shop"><ListGroup.Item className="categoryNav">Medicine Shop</ListGroup.Item></NavLink>
                        </ListGroup>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    );
};

export default SideNav;