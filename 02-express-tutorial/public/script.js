document.addEventListener("DOMContentLoaded", () => {
    const getProductsBtn = document.getElementById("getProducts");
    const clearProductsBtn = document.getElementById("clearProducts");
    const productSection = document.getElementById("productSection");
    // Fetch products and display them
    getProductsBtn.addEventListener("click", async () => {
        try {
            const response = await fetch("/api/v1/products");
            if (!response.ok) throw new Error("Failed to fetch products.");
            
            const products = await response.json();
            productSection.innerHTML = ""; // Clear previous content
            //loop over total products
            products.forEach((product) => {
                const productDiv = document.createElement("div");
                //Add data
                productDiv.innerHTML = `<p>${product.name} - $${product.price} </p>
                <p>Description: ${product.desc}</p> <br> `;
                //Append to HTML
                productSection.appendChild(productDiv);
            });
        } catch (error) {
            console.error(error);
            productSection.innerHTML = "<p>Failed to load products.</p>";
        }
    });

    // Clear the product section when "Delete" button is clicked
    clearProductsBtn.addEventListener("click", () => {
        productSection.innerHTML = "";
    });
});