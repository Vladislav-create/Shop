async function fetchData() {
  try {
    const response = await fetch("items-data.json");
    console.log(response);
    if (!response.ok) {
      throw new Error("Не удалось получить данные с item-data.json");
    }

    const data = await response.json();
    console.log(data);

    const cartsBox = document.querySelector(".cards");

    data.forEach(({ image, name, description, price }) => {
      const product = `
            <div class="card">
                <img src="${image}" alt="">
                <div class="overlay">
                    <button class="card__btn">
                        <div class="btn__padding">
                            <img class="btn__truck" src="img/truck.svg" alt="truck">
                            <p class="btn__text">Add to Cart</p>
                        </div>
                    </button>
                </div>
                <div class="card__info">
                    <a href="product.html" class="card__info__title">${name}</a>
                    <p class="card__info__text">${description}</p>
                    <span class="card__info__price">$${price}</span>
                </div>
            </div>
            `;
      cartsBox.insertAdjacentHTML("afterbegin", product);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData();
