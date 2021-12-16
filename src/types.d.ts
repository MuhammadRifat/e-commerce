interface IProduct {
    id?: string;
    product_name: string;
    weight: string;
    price: number;
    description: string;
    imageURL: string;
    category: string;
}

interface ICategory {
    id?: string;
    category_name: string;
}
