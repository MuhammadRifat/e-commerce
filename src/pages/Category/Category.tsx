import { Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import Item from '../../components/common/Items/Item';

const Category = () => {
    const navigate = useNavigate();
    const { categoryName } = useParams();
    return (
        <Container>
            <h4 className="text-center border-bottom">{categoryName} </h4>
            <Row>
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

export default Category;