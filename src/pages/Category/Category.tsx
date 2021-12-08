import { useCallback } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Item from '../../components/common/Items/Item';
import useAsync from '../../hooks/useAsync';
import ProductService from '../../services/ProductService';

interface IParams{
    categoryName: string;
}

const Category = () => {
    const { categoryName } = useParams();
    const getProduct = useCallback( () => {
        return ProductService.getProductByCategory(`${categoryName}`);
    }, [categoryName])

    const { data, isLoading, isError, isSuccess } = useAsync<IProduct[]>(getProduct);

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
                    !isLoading && !data?.length && <p className="text-danger text-center">Product not found</p>
                }
            </Row>
        </Container>
    );
};

export default Category;