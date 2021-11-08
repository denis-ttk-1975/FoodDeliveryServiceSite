const cart = () => {
  const buttonCart = document.getElementById("cart-button"),
    modalCart = document.querySelector(".modal-cart"),
    close = modalCart.querySelector(".close");

  buttonCart.addEventListener("click", () => {
    modalCart.classList.add("is-open");
  });

  close.addEventListener("click", () => {
    modalCart.classList.remove("is-open");
  });
};

cart();
