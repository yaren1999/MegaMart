import ProductList from "@/components/ProductList/ProductList";
import products from "../../../data/products.json"
import categories from "../../../data/categories.json"

const page = ({ params }) => {
    const categoryId = parseInt(params.categoryId);
    const filteredProducts = products.filter(product => product.categoryId === categoryId);

    const category = categories.find((c) => c.categoryId === categoryId);

    return (
        <div>
            <div style={{ textAlign: "center", fontSize: "32px" }}>{category.categoryName}</div>
            <ProductList productList={filteredProducts} />
        </div>
    )
}

export default page;
