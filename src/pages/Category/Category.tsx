import { useCallback } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Item from '../../components/common/Items/Item';
import useAsync from '../../hooks/useAsync';
import CategoryService from '../../services/CategoryService';
import ProductService from '../../services/ProductService';

const Category = () => {
    const { categoryId } = useParams();

    //load category name by category id
    const getCategoryName = useCallback(() => {
        return CategoryService.getCategoryById(`${categoryId}`);
    }, [categoryId]);

    const category = useAsync<ICategory>(getCategoryName);

    //load all products by category id
    const getProduct = useCallback(() => {
        return ProductService.getProductByCategory(`${categoryId}`);
    }, [categoryId])

    const { data, isLoading, isSuccess } = useAsync<IProduct[]>(getProduct);

    return (
        <Container fluid>
            <h4 className="text-center border-bottom">{ category?.data?.category_name }</h4>
            {/* {
                isLoading &&
                <div className="text-center mt-5"><Spinner animation="border" variant="primary" /></div>
            } */}
            <Row>
                {
                    isSuccess && data?.map((product: IProduct) => <Item product={product} isLoading={isLoading} key={product.id} />)
                }
            </Row>
        </Container>
    );
};

export default Category;