import requests from "./httpService";

class ProductService {
    getProducts(): Promise<IProduct[]> {
        return requests.get('/products.php')
    }

    getProductById(id: string): Promise<IProduct> {
        return requests.get(`/products.php?productId=${id}`);
    }

    getProductByCategory(categoryId: string): Promise<IProduct[]> {
        return requests.get(`/products.php?categoryId=${categoryId}`);
    }

}

export default new ProductService();