import {useState,useEffect} from "react";
import {Link,useParams} from "react-router";
import{fetchProductById} from "../services/productService.js";
import {useCartStore} from "../store/cartStore.js";



function ProductDetail() {
    const {id} = useParams();

    const addToCart = useCartStore((state)=> state.addToCart);

    const[product,setProduct] = useState(null);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);


useEffect(()=> {
    fetchProductById(id)
    .then((data)=> {
        setProduct(data);
    })
    .catch((err)=> setError(err.message))
    .finally(()=> setLoading(false));
},[id]);
 if(loading)
    return(
<div className="flex item-center justify-center py-20">
    <p className="text-gray-500 text-lg animate-pulse">
        Loading product...
    </p>
</div>
    );
    if(error)
        return(
    <div className="flex items-center justify-center py-20">
        <p className="text-red-500 text-lg font-medium">
            Something went wrong. Please try again.
        </p>
    </div>
    );

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <Link to="/products" className="text-blue-600 hover:underline text-sm">
                    ← Back to Products
            </Link>

            <div className="flex flex-col md:flex-row gap-8 mt-6">
                <div className="md:w-1/2 flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
                    <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-80 object-contain"/>
                
                </div>

                <div className="md:w-1/2">
                    <p className="text-sm text-gray-500 capitalize mb-2">{product.category}</p>
                    <h1 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h1>
                    <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price}</p>
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
                    >
                     Add to Cart
                    </button>              
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;