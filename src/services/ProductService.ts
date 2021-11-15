import requests from "./httpService";

class ProductService {
    getProducts(): Promise<IProduct[]> {
        return requests.get('/products')
    }

    getProductById(id: string): Promise<IProduct> {
        return requests.get(`/product/${id}`);
    }

    getProductByCategory(category: string): Promise<IProduct[]> {
        return requests.get(`/products/${category}`);
    }

}

export default new ProductService();