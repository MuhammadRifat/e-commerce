import requests from "./httpService";

class CategoryService {
    getCategories(): Promise<ICategory[]> {
        return requests.get('/categories.php')
    }
    getCategoryById(id: string): Promise<ICategory> {
        return requests.get(`/categories.php?id=${id}`);
    }

}

export default new CategoryService();