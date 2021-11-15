import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Item from '../../components/common/Items/Item';
import useAsync from '../../hooks/useAsync';
import ProductService from '../../services/ProductService';


const Category = () => {
    const { categoryName } = useParams();
    // const [products, setProducts] = useState<IProduct[]>([]);

    const { data, isLoading, isError, isSuccess } = useAsync<IProduct[]>(() => ProductService.getProductByCategory(`${categoryName}`))

    return (
        <Container>
            <h4 className="text-center border-bottom">{categoryName} </h4>
            {
                isLoading && <p className="text-center">Loading...</p>
            }
            <Row>
                {
                    isSuccess && data?.map((product: IProduct) => <Item product={product} isLoading={isLoading} key={product._id} />)
                }
                {
                    isError && <p className="text-danger text-center">Product not found</p>
                }
            </Row>
        </Container>
    );
};

export default Category;