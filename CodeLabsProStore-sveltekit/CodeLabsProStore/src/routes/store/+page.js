export const load = async ({ fetch }) => {
    const productsResponse = await fetch('https://dummyjson.com/products?limit=20');
    const productsData = await productsResponse.json()
    const products = productsData.products;
    return {
        products: products
    }
}