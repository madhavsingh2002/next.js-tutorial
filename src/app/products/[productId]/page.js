import { Metadata } from "next";

export const generateMetadata = ({ params }) => {
    return {
        title: `Product ${params.productId}`
    };
};

const ProductDetails = ({ params }) => {
    return <h1>Details about Product {params.productId}</h1>;
};

export default ProductDetails;
