import { faCompress, faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Col, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';
import { AppState } from '../../redux/store';
import Icon from './Icon';

interface IProps {
    name: string;
}

const RightCart = ({ name, ...props }: IProps) => {
    const cart: IProduct[] = useSelector((state: AppState) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id:any) => {
        dispatch(removeFromCart(id));
    }
    // count total amount in cart
    let totalAmount = 0;
    cart?.map(product => {
        totalAmount += Number(product.price);
    })

    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let index = 1;
    return (
        <>
            <button className="addBtn" onClick={handleShow}>
                <Icon icon={faShoppingBag} size="lg" /><br />
                <b>{cart.length}</b> {cart.length > 1 ? "Items" : "Item"}<br />
                <b className="text-warning fs-5">৳ {totalAmount}</b>
            </button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton  className="bg-lightPrimary text-white">
                    <Offcanvas.Title>
                        Shoping Cart
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cart?.map(product =>
                            <Row className="border-bottom align-items-center" key={product.id}>
                                <Col>
                                    {index++}
                                </Col>
                                <Col>
                                    <img src={product?.imageURL} alt={product?.product_name} width="40" height="40" />
                                </Col>
                                <Col>
                                    <small>{product?.product_name}</small>
                                </Col>
                                <Col>
                                    <span>৳ {product?.price}</span>
                                </Col>
                                <Col className=" text-end">
                                    <button onClick={() => handleRemove(product.id)} className="bg-danger text-white rounded border"><Icon icon={faTimes} /></button>
                                </Col>
                            </Row>
                        )
                    }
                    <button className="w-100 btn btn-primary fs-4 placeOrderBtn"><Icon icon={faCompress} /> Place Order | ৳ <span className="text-warning">{totalAmount}</span></button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default RightCart;