import React, { useCallback } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Item from '../../components/common/Items/Item';
import useAsync from '../../hooks/useAsync';
import ProductService from '../../services/ProductService';

const Popular = () => {
    //load all products
    const getPopularProducts = useCallback(() => {
        return ProductService.getProducts();
    }, [])

    const { data, isLoading, isSuccess } = useAsync<IProduct[]>(getPopularProducts);

    return (
        <Container fluid className="my-3">
            <h3 className="text-center">Popular Items</h3>
            {
                isLoading &&
                <div className="text-center mt-5"><Spinner animation="border" variant="primary" /></div>
            }
            <Row>
                {
                    isSuccess && data?.map((product: IProduct) => <Item product={product} isLoading={isLoading} key={product.id} />)
                }
            </Row>
        </Container>
    );
};

export default Popular;