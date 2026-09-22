const fetchProducts = async () => {
  try {
<<<<<<< Updated upstream
=======
    // fetch the products from the API
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

    return data;
  } catch (err) {
    console.error("Unable to fetch products:", err.message);
    throw err;
=======
    console.log(data);
    return data;
  } catch (err) {
    console.error("Unable to fetch products", err.message);
>>>>>>> Stashed changes
  }
};

export { fetchProducts };
