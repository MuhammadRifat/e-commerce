import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-bootstrap';
import Icon from '../Icon';

const Item = () => {
    return (
        <Col xs={6} lg={4} xl={3} className="p-2">
            <div className="border rounded shadow-sm">
                <div className="text-center">
                    <img src="https://i.ibb.co/YkhvhB4/Beef-Premium.webp" width="150" alt="" />
                    
                    <h5 className="mt-1">Beef Premium</h5>
                    <h4>&#2547; 550</h4>
                </div>
                <div className="p-2 text-center">
                    <select name="" id="" className="w-75 my-2">
                        <option value="1">1 Kg</option>
                        <option value=".5">0.5 Kg</option>
                    </select>
                    <button className="addBtn mt-1"><Icon icon={faPlus} /> Add to Cart</button>
                </div>
            </div>
        </Col>
    );
};

export default Item;