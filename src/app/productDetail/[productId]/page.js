import ProductDetail from "@/components/ProductDetail/ProductDetail";
import products from "../../../data/products.json"

const page = ({ params }) => {
    const product = products.find(p => p.productId === Number(params.productId));

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    )
}

export default page;

