const fetchProducts = async () => {
  try {
    // fetch the products from the API
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
    console.log(data);
    return data;
  } catch (err) {
    console.error("Unable to fetch products", err.message);
  }
};

export { fetchProducts };
