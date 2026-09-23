import {Link} from "react-router";


function ProductCard({ product }) {
  return (
    <div className="font-family-Inter shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />
      <h2 className="text-sm font-semibold line-clamp-2">{product.title}</h2>
      <p className="text-xs text-gray-500 capitalize">{product.category}</p>
      <p className="text-lg font-bold text-blue-600 mt-2">${product.price}</p>
      <p className="text-xs text-gray-600 mt-1 line-clamp-3">{product.description}</p>
      <Link
      to={`/products/${product.id}`}
      className="mt-4 mx-auto block w-2/3 text-center bg-blue-600 text-white text-sm py-2 rounded-xl hover:bg-blue-700"
         >
         View Details
       </Link>
  
    </div>
  );
}

export default ProductCard;