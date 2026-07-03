const BASE_URL="https://fakestoreapi.com";
export const fetchProducts = async() => {
    const response = await fetch (
        `${BASE_URL}/products`
    );
    // fetch returns promise that resolves or rejects 
    if(!response.ok) {
        throw new Error("Failed to fetch");
    }

    return response.json();
};

export const fetchProduct= async(id) => {
    const response = await fetch (
        `${BASE_URL}/products/${id}`
    );
    // fetch returns promise that resolves or rejects 
    if(!response.ok) {
        throw new Error("Failed to fetch");
    }

    return response.json();
};
