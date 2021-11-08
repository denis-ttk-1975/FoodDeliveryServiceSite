const menu = () => {
  const cardMenu = document.querySelector(".cards-menu");
  const title = document.querySelector(".restaurant-title");
  const rating = document.querySelector(".rating");
  const price = document.querySelector(".price");
  const category = document.querySelector(".category");

  const changeTitle = (restaurant) => {
    title.textContent = restaurant.name;
    console.log(rating);
    rating.textContent = restaurant.stars;
    price.textContent = `От ${restaurant.price}₽`;
    category.textContent = restaurant.kitchen;
  };

  if (localStorage.getItem("restaurant")) {
    const restaurant = JSON.parse(localStorage.getItem("restaurant"));
    fetch(
      `https://delivery-e00a4-default-rtdb.europe-west1.firebasedatabase.app/db/${restaurant.products}`
    )
      .then((responce) => responce.json())
      .then((data) => renderItems(data))
      .catch((error) => console.log(error));
    changeTitle(restaurant);
  } else {
    window.location.href = "/index.html";
  }

  const renderItems = (data) => {
    data.forEach(({ description, id, image, name, price }) => {
      const card = document.createElement("div");

      card.classList.add("card");
      card.innerHTML = `
          <img src=${image} alt=${name} class="card-image" />
            <div class="card-text">
            <div class="card-heading">
            <h3 class="card-title card-title-reg">${name}</h3>
        </div>
        <div class="card-info">
            <div class="ingredients">${description}</div>
        </div>
        <div class="card-buttons">
            <button class="button button-primary button-add-cart">
            <span class="button-card-text">В корзину</span>
            <span class="button-cart-svg"></span>
            </button>
            <strong class="card-price-bold">${price} ₽</strong>
        </div>
        </div>`;
      cardMenu.append(card);
    });
  };
};

menu();
