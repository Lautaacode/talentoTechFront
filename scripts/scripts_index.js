
document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");
    const reviewsContainer = document.getElementById("reviews");

    function fetchProducts() {
        fetch("https://dummyjson.com/products?limit=20")
            .then((response) => response.json())
            .then((data) => {
                const products = data.products;

                productsContainer.innerHTML = "";

                products.forEach((product) => {
                    const cardDiv = document.createElement("div");

                    cardDiv.innerHTML = `
                <article class="card">
                <div class="card-img">
                    <img src="${product.thumbnail}" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    </div>
                <div class="d-flex justify-content-between m-4">
                <p><b>${product.price}</b></p>
                    <button href="#" class="btn btn-secondary btn-buy">Agregar</button>
                </div>
            </article>
            `;

                    const addButton = cardDiv.querySelector("button");
                    addButton.addEventListener("click", () => {
                        addToCart(product);
                    });

                    productsContainer.appendChild(cardDiv);
                });
            })
            .catch((error) => console.error("Error", error));
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.title} ha sido agregado al carrito!`);
    }

    function fetchReviews() {
        fetch("https://dummyjson.com/products?limit=10")
            .then((response) => response.json())
            .then((data) => {
                const products = data.products;

                reviewsContainer.innerHTML = "";

                products.forEach((product) => {
                    product.reviews.slice(-1).forEach((review) => {
                        const cardDiv = document.createElement("div");

                        cardDiv.innerHTML = `
                <article class="review-comments container-fluid my-lg-3" id="review-comments">
                <div class="row align-items-end">
                    <img src="${product.thumbnail}" class="avatar col-auto">
                    <h5 class="col">${product.title}<h5>
                </div>
                <p class="comments-box col-lg-4">${review.comment}</p>
            </article>
            `;

                        reviewsContainer.appendChild(cardDiv);
                    })
                });
            })
    }

    fetchProducts();
    fetchReviews();
});
