const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.products);
    return data.products;
  } catch (err) {
    console.error("Unable to fetch products:", err.message);
    throw err;
  }
};

export { fetchProducts };

export async function fetchProductById(id) {
  try {
    const responce = await fetch(`https://dummyjson.com/products/${id}`);
    if (!responce.ok) {
      throw new Error(`HTTP error: ${responce.status}`);
    }

    const data = await responce.json();
    return data;
  } catch (err) {
    console.error("Unable to fetch product:", err.message);
    throw err;
  }
}
