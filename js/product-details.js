document.addEventListener("DOMContentLoaded", async () => {
  const singlePage = document.getElementById("productDetails");
  const param = new URLSearchParams(window.location.search);
  const productId = param.get("id");

  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/" + productId
    );
    const product = await response.json();

    singlePage.innerHTML = `<div class="container">
      <div class="singleProduct">
      <div class="singleProductImage">
      <img src="${product.image}" alt="${product.title}" />
      </div>
      <div class="singleProductDetails">
      <h1>${product.title}</h1>
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Category:</strong> ${product.category}</p>
      </div>
      </div>
      </div>`;
    loadRelatedProducts(product.id, product.category);
  } catch (error) {
    singlePage.innerHTML = "<p>Failed to load product details.</p>";
    console.error(error);
  }

  async function loadRelatedProducts(productId, category) {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const allProducts = await response.json();
      const relatedProducts = allProducts.filter(
        (product) => product.category === category && product.id !== productId
      );
      displayAdditionalRelated(relatedProducts.slice(0, 4));
    } catch (error) {
      console.error("Error loading related products:", error);
    }
  }

  function displayAdditionalRelated(products) {
    const addProducts = document.getElementById("additionalProducts");
    const heading = document.createElement("h1");
    heading.classList.add("container");
    heading.innerText = "Additional Products";
    addProducts.appendChild(heading);

    const addproductsContainer = document.createElement("div");
    addproductsContainer.classList.add("container");
    products.forEach((product) => {
      const prductDiv = document.createElement("div");
      prductDiv.classList.add("Product");

      prductDiv.innerHTML = `
      <img src="${product.image}" alt="" />
      <h3>${product.title}</h3>
      <span class="cat">${product.category}</span>
      <span className="price">$${product.price}</span>
      <p>${product.description}</p>
      <a href="product-details.html?id=${product.id}">View Product</a>
      `;
      addproductsContainer.appendChild(prductDiv);
    });
    addProducts.appendChild(addproductsContainer);
  }
});
