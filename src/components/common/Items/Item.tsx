import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/actions/cartAction';
import Icon from '../Icon';

interface IProps {
    product: IProduct;
    isLoading: boolean;
}

const Item = ({ product }: IProps) => {
    const dispatch = useDispatch();
    return (
        <Col sm={6} lg={4} xl={3} className="p-2">
            <div className="rounded shadow bg-white">
                <Link to={`/product/${product._id}`}>
                    <div className="text-center">
                        <img src={product.imageURL} width="150" height="140" alt="" />

                        <h5 className="mt-1">{product.pName}</h5>
                        <h4>&#2547; {product.price}</h4>
                    </div>
                </Link>
                <div className="p-2 text-center">
                    <select name="" id="" className="w-75 my-2">
                        <option value="1">1 Kg</option>
                        <option value=".5">0.5 Kg</option>
                    </select>
                    <button onClick={() => dispatch(addToCart(product))} className="addBtn mt-1"><Icon icon={faPlus} /> Add to Cart</button>
                </div>
            </div>
        </Col>
    );
};

export default Item;