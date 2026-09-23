const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.error("Unable to fetch products:", err.message);
    throw err;
  }
};

export { fetchProducts };

export async function fetchProductById(id) {
  try {
    const responce= await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!responce.ok) {
        throw new Error(`HTTP error: ${responce.status}`);
      }

      const data =await responce.json();
      return data;
    } catch (err) {
      console.error("Unable to fetch product:", err.message);
      throw err;
    }

    }
  

