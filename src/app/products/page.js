import ProductList from "@/components/ProductList/ProductList";
import products from "../../data/products.json"

const page = () => {

    return (
        <div>
            <ProductList productList={products} />
        </div>
    )
}

export default page;