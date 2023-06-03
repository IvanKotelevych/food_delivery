'use strict';

const foods = {
  pizza: [
    {
      name: "pizza #1",
      price: 15,
      weight: 400,
      diameter: 30,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 1,
      quantity: 0
    },
    {
      name: "pizza #2",
      price: 17,
      weight: 440,
      diameter: 30,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 2,
      quantity: 0
    },
    {
      name: "pizza #3",
      price: 20,
      weight: 600,
      diameter: 30,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 3,
      quantity: 0
    },
    {
      name: "pizza #4",
      price: 8,
      weight: 250,
      diameter: 30,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 4,
      quantity: 0
    },
    {
      name: "pizza #5",
      price: 18,
      weight: 500,
      diameter: 30,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 5,
      quantity: 0
    },
    {
      name: "pizza #6",
      price: 12,
      weight: 350,
      diameter: 30,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 6,
      quantity: 0
    },
  ],
  burger: [
    {
      name: "burger #1",
      price: 25,
      weight: 760,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 1,
      quantity: 0
    },
    {
      name: "burger #2",
      price: 30,
      weight: 810,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 2,
      quantity: 0
    },
    {
      name: "burger #3",
      price: 23,
      weight: 580,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 3,
      quantity: 0
    },
    {
      name: "burger #4",
      price: 20,
      weight: 500,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 4,
      quantity: 0
    },
    {
      name: "burger #5",
      price: 18,
      weight: 470,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 5,
      quantity: 0
    },
    {
      name: "burger #6",
      price: 28,
      weight: 650,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 6,
      quantity: 0
    },
  ],
  asian: [
    {
      name: "asian #1",
      price: 12,
      weight: 270,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 1,
      quantity: 0
    },
    {
      name: "asian #2",
      price: 17,
      weight: 320,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 2,
      quantity: 0
    },
    {
      name: "asian #3",
      price: 10,
      weight: 240,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 3,
      quantity: 0
    },
    {
      name: "asian #4",
      price: 25,
      weight: 666,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 4,
      quantity: 0
    },
    {
      name: "asian #5",
      price: 23,
      weight: 620,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 5,
      quantity: 0
    },
    {
      name: "asian #6",
      price: 19,
      weight: 490,
      composition: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis eos ad nesciunt totam consectetur!",
      image: 6,
      quantity: 0
    },
  ],
};

let cart = {
  pizza: [],
  burger: [],
  asian: [],
};

let value = 0;

const body = document.querySelector('.page__body');
const bodyBasket = document.querySelector('.page__body--basket');

render();

function render() {
  let resultPrice = 0;

  for (let i  = 0; i < cart.pizza.length; i++) {
    resultPrice += cart.pizza[i].quantity * cart.pizza[i].price;
  }

  for (let i  = 0; i < cart.burger.length; i++) {
    resultPrice += cart.burger[i].quantity * cart.burger[i].price;
  }

  for (let i  = 0; i < cart.asian.length; i++) {
    resultPrice += cart.asian[i].quantity * cart.asian[i].price;
  }

  const header = `
    <header class="page__section header">
      <div class="container">
        <div class="header__content">
          <div class="header__top">
            <a href="#menu" class="icon icon--menu"></a>

            <a href="#" class="logo">
              <p class="logo__title">FOOD de.ry</p>
            </a>

            <a
              href="#basket"
              class="icon icon--basket"
              onclick="renderBasket()"
            >
            </a>
          </div>

          <a href="#pizza-menu" class="header__title">
            ORDER NOW
          </a>
        </div>
      </div>
    </header>
  `;

  const navMenu = `
    <nav class="page__menu menu" id="menu">
      <div class="container">
        <div class="menu__content">
          <div class="menu__top">
            <a href="#" class="logo">
              <p class="logo__title">FOOD de.ry</p>
            </a>

            <a
              href="#"
              class="icon icon--arrow-right"
            ></a>
          </div>

          <ul class="menu__list">
            <li class="menu__item">
              <a href="#" class="menu__link">Home</a>
            </li>
            <li class="menu__item">
              <a href="#pizza-menu" class="menu__link">Pizza menu</a>
            </li>
            <li class="menu__item">
              <a href="#burger-menu" class="menu__link">Burger menu</a>
            </li>
            <li class="menu__item">
              <a href="#asian-cuisine-menu" class="menu__link">Asian cuisine menu</a>
            </li>
            <li class="menu__item">
              <a href="#contact-us" class="menu__link">Contacts</a>
            </li>
          </ul>

          <a
            href="tel:+1 234 5555-55-55"
            class="menu__call menu__call--phone"
          >
            +1 234 555-55-55
          </a>
          <a
            href="tel:+1 234 5555-55-55"
            class="menu__call menu__call--action"
          >
            Vacancies in the institution
          </a>
        </div>
      </div>
    </nav>
  `;

  const navBasket = `
    <nav class="page__basket basket" id="basket">
      <div class="container">
        <div class="basket__content">
          <form id="user-form">
            <div class="basket__top">
              <a
                href="#"
                class="icon icon--arrow-left"
                onclick="renderHome()"
              ></a>

              <a
                href="#"
                class="logo"
                onclick="renderHome()"
              >
                <p class="logo__title">FOOD de.ry</p>
              </a>
            </div>

            <div class="basket__container">
              <div class="basket__user-info">
                <iframe class="user-info__map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20309.075323923767!2d30.4721233!3d50.4851493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1685790998517!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div class="user-info__input">
                  <label class="user-info__input-label" for="name">Name:</label>
                  <br>
                  <input class="user-info__input-form" type="text" name="name" id="name" placeholder="your name">
                </div>

                <div class="user-info__input">
                  <label class="user-info__input-label" for="email">Email:</label>
                  <br>
                  <input class="user-info__input-form" type="email" name="email" id="email" placeholder="your email">
                </div>

                <div class="user-info__input">
                  <label class="user-info__input-label" for="phone">Phone:</label>
                  <br>
                  <input class="user-info__input-form" type="tel" name="phone" id="phone" placeholder="your phone">
                </div>

                <div class="user-info__input">
                  <label class="user-info__input-label" for="address">Address:</label>
                  <br>
                  <input class="user-info__input-form" type="text" name="address" id="address" placeholder="your adress">
                </div>
              </div>

              <div class="basket__result-price basket__result-price--mobile">total price: $ ${resultPrice}</div>

              <div class="basket__user-cart">
                ${
                  cart.pizza.map((e, i) => `
                    <div class="user-food">
                      <div class="user-food__photo--container">
                        <img
                          src="images/foods/pizza/${e.image}.png"
                          alt="Place ${i + 1}"
                          class="user-food__photo"
                        >
                      </div>
        
                      <div class="user-food__container">
                        <h1 class="user-food__title">
                          ${e.name}
                        </h1>
        
                        <p class="user-food__price">price: $ ${e.price}</p>
        
                        <div class="user-food__quantity">
                          <button
                            class="user-food__quantity-button user-food__quantity-button--minus"
                            onclick="minusQuantityPizzaToCart(${i})"
                          >-</button>
                          <input
                            type="text"
                            class="user-food__quantity-number"
                            value="${e.quantity}"
                            onchange="changeQuantityPizzaToCart(${i}, event.target.value)"
                          >
                          <button
                            class="user-food__quantity-button user-food__quantity-button--plus"
                            onclick="plusQuantityPizzaToCart(${i})"
                          >+</button>
                        </div>
                      </div>

                      <div class="user-food__basket-container">
                        <img
                          src="images/basket_delete.svg"
                          alt="Place ${i + 1}"
                          class="user-food__basket-delete"
                          onclick="deletePizza(${i})"
                        >
                      </div>
                    </div>
                  `).join('')
                }

                ${
                  cart.burger.map((e, i) => `
                    <div class="user-food">
                      <div class="user-food__photo--container">
                        <img
                          src="images/foods/burger/${e.image}.png"
                          alt="Place ${i + 1}"
                          class="user-food__photo"
                        >
                      </div>
        
                      <div class="user-food__container">
                        <h1 class="user-food__title">
                          ${e.name}
                        </h1>
        
                        <p class="user-food__price">price: $ ${e.price}</p>
        
                        <div class="user-food__quantity">
                          <button
                            class="user-food__quantity-button user-food__quantity-button--minus"
                            onclick="minusQuantityBurgerToCart(${i})"
                          >-</button>
                          <input
                            type="text"
                            class="user-food__quantity-number"
                            value="${e.quantity}"
                            onchange="changeQuantityBurgerToCart(${i}, event.target.value)"
                          >
                          <button
                            class="user-food__quantity-button user-food__quantity-button--plus"
                            onclick="plusQuantityBurgerToCart(${i})"
                          >+</button>
                        </div>
                      </div>

                      <div class="user-food__basket-container">
                        <img
                          src="images/basket_delete.svg"
                          alt="Place ${i + 1}"
                          class="user-food__basket-delete"
                          onclick="deleteBurger(${i})"
                        >
                      </div>
                    </div>
                  `).join('')
                }

                ${
                  cart.asian.map((e, i) => `
                    <div class="user-food">
                      <div class="user-food__photo--container">
                        <img
                          src="images/foods/asian_cuisine/${e.image}.png"
                          alt="Place ${i + 1}"
                          class="user-food__photo"
                        >
                      </div>
        
                      <div class="user-food__container">
                        <h1 class="user-food__title">
                          ${e.name}
                        </h1>
        
                        <p class="user-food__price">price: $ ${e.price}</p>
        
                        <div class="user-food__quantity">
                          <button
                            class="user-food__quantity-button user-food__quantity-button--minus"
                            onclick="minusQuantityAsianToCart(${i})"
                          >-</button>
                          <input
                            type="text"
                            class="user-food__quantity-number"
                            value="${e.quantity}"
                            onchange="changeQuantityAsianToCart(${i}, event.target.value)"
                          >
                          <button
                            class="user-food__quantity-button user-food__quantity-button--plus"
                            onclick="plusQuantityAsianToCart(${i})"
                          >+</button>
                        </div>
                      </div>

                      <div class="user-food__basket-container">
                        <img
                          src="images/basket_delete.svg"
                          alt="Place ${i + 1}"
                          class="user-food__basket-delete"
                          onclick="deleteAsian(${i})"
                        >
                      </div>
                    </div>
                  `).join('')
                }
              </div>
            </div>

            <div class="basket__result">
              <div class="basket__result-price basket__result-price--tablet">total price: $ ${resultPrice}</div>

              <div class="basket__submit-container">
                <input
                  type="submit"
                  class="basket__result-submit"
                  value="Submit"
                  onclick="submitForm()"
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  `;

  const main = `
    <main class="main">
      <div class="container-icon">
        <a
          href="#menu"
          class="icon icon--menu icon--menu-order"
        >
        </a>

        <a
          href="#basket"
          class="icon icon--basket icon--basket-order"
          onclick="renderBasket()"
        >
        </a>
      </div>

      <section class="page__section" id="pizza-menu">
        <div class="container">
          <h2 class="page__section-title">
            Pizza
          </h2>

          <div class="gallery__foods">
            <div class="foods">
              <div class="grid">
                ${foods.pizza.map((pizza, i) => `
                  <div class="
                    grid__item
                    grid__item-food
                    grid__item--mobile-1-2
                    grid__item--tablet-2-5
                    grid__item--desktop-${
                      i % 3 === 0
                        ? '1-4'
                        : i % 3 === 1
                          ? '5-8'
                          : '9-12'
                    }"
                  >
                    <div class="foods__photo--container">
                      <img
                        src="images/foods/pizza/${pizza.image}.png"
                        alt="Place ${i + 1}"
                        class="foods__photo"
                      >
                    </div>

                    <h1 class="foods__title">
                      ${pizza.name}
                    </h1>

                    <p class="foods__size">${pizza.weight}g ${pizza.diameter}cm</p>

                    <p class="foods__composition">
                      ${pizza.composition}
                    </p>

                    <div class="foods__price">
                      $ ${pizza.price}
                    </div>

                    <button
                      class="foods__add"
                      onclick="addPizzaToCart(${i})"
                    >
                      add to Cart
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page__section" id="burger-menu">
        <div class="container">
          <h2 class="page__section-title">
            Burger
          </h2>

          <div class="gallery__foods">
            <div class="grid">
              ${foods.burger.map((burger, i) => `
                <div class="
                  grid__item
                  grid__item-food
                  grid__item--mobile-1-2
                  grid__item--tablet-2-5
                  grid__item--desktop-${
                    i % 3 === 0
                      ? '1-4'
                      : i % 3 === 1
                        ? '5-8'
                        : '9-12'
                  }"
                >
                  <div class="foods__photo--container">
                    <img
                      src="images/foods/burger/${burger.image}.png"
                      alt="Place ${i + 1}"
                      class="foods__photo"
                    >
                  </div>

                  <h1 class="foods__title">
                    ${burger.name}
                  </h1>

                  <p class="foods__size">${burger.weight}g</p>

                  <p class="foods__composition">
                    ${burger.composition}
                  </p>

                  <div class="foods__price">
                    $ ${burger.price}
                  </div>

                  <button
                    class="foods__add"
                    onclick="addBurgerToCart(${i})"
                  >
                    add to cart
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="page__section" id="asian-cuisine-menu">
        <div class="container">
          <h2 class="page__section-title">
            Asian cuisine
          </h2>

          <div class="gallery__foods">
            <div class="grid">
              ${foods.asian.map((asian, i) => `
                <div class="
                  grid__item
                  grid__item-food
                  grid__item--mobile-1-2
                  grid__item--tablet-2-5
                  grid__item--desktop-${
                    i % 3 === 0
                      ? '1-4'
                      : i % 3 === 1
                        ? '5-8'
                        : '9-12'
                  }"
                >
                  <div class="foods__photo--container">
                    <img
                      src="images/foods/asian_cuisine/${asian.image}.png"
                      alt="Place ${i + 1}"
                      class="foods__photo"
                    >
                  </div>

                  <h1 class="foods__title">
                    ${asian.name}
                  </h1>

                  <p class="foods__size">${asian.weight}g</p>

                  <p class="foods__composition">
                    ${asian.composition}
                  </p>

                  <div class="foods__price">
                    $ ${asian.price}
                  </div>

                  <button
                    class="foods__add"
                    onclick="addAsianToCart(${i})"
                  >
                    add to cart
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="page__section contact-us" id="contact-us">
        <div class="container">
          <h2 class="page__section-title contact-us__title">
            Contact us
          </h2>

          <div class="grid grid--tablet grid--desktop">
            <div class="
              grid__item
              grid__item--tablet-1-3
              grid__item--desktop-1-5"
            >
              <form action="#">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  class="contact-us__field form-field"
                >
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  class="contact-us__field form-field"
                >
                <textarea
                  name="message"
                  placeholder="Message"
                  class="
                    contact-us__field
                    contact-us__field--last
                    form-field
                    form-field--textarea"
                ></textarea>

                <button class="button button--primary">
                  Consultation
                </button>
              </form>
            </div>

            <div class="
              grid__item
              grid__item--tablet-4-6
              grid__item--desktop-8-10"
            >
              <div class="contact-us__info">
                <div class="contact-us__info-title">
                  Phone
                </div>

                <a
                  href="tel:+1 234 5555-55-55"
                  class="contact-us__info-link"
                >
                  +1 234 5555-55-55
                </a>
              </div>

              <div class="contact-us__info">
                <div class="contact-us__info-title">
                  Email
                </div>

                <a
                  href="mailto:name@domain.com"
                  class="contact-us__info-link"
                >
                  name@domain.com
                </a>
              </div>

              <div class="contact-us__info contact-us__info--last">
                <div class="contact-us__info-title">
                  Address
                </div>

                <a
                  href="https://goo.gl/maps/DPwMTMeJSEu7hoQH8"
                  class="contact-us__info-link"
                >
                  255 S State St,
                  <br>
                  Salina, UT 84654
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;

  const footer = `
    <footer class="footer"></footer>
  `;

  const userResultPrice = `total price: $ ${!!resultPrice ? (resultPrice + `<br>+ $ ${Math.floor(150 / resultPrice + 5)} de.ry`) : resultPrice}`;

  const userBasket = `
    ${
      cart.pizza.map((e, i) => `
        <div class="user-food">
          <div class="user-food__photo--container">
            <img
              src="images/foods/pizza/${e.image}.png"
              alt="Place ${i + 1}"
              class="user-food__photo"
            >
          </div>

          <div class="user-food__container">
            <h1 class="user-food__title">
              ${e.name}
            </h1>

            <p class="user-food__price">price: $ ${e.price}</p>

            <div class="user-food__quantity">
              <button
                class="user-food__quantity-button user-food__quantity-button--minus"
                onclick="minusQuantityPizzaToCart(${i})"
              >-</button>
              <input
                type="text"
                class="user-food__quantity-number"
                value="${e.quantity}"
                onchange="changeQuantityPizzaToCart(${i}, event.target.value)"
              >
              <button
                class="user-food__quantity-button user-food__quantity-button--plus"
                onclick="plusQuantityPizzaToCart(${i})"
              >+</button>
            </div>
          </div>

          <div class="user-food__basket-container">
            <img
              src="images/basket_delete.svg"
              alt="Place ${i + 1}"
              class="user-food__basket-delete"
              onclick="deletePizza(${i})"
            >
          </div>
        </div>
      `).join('')
    }

    ${
      cart.burger.map((e, i) => `
        <div class="user-food">
          <div class="user-food__photo--container">
            <img
              src="images/foods/burger/${e.image}.png"
              alt="Place ${i + 1}"
              class="user-food__photo"
            >
          </div>

          <div class="user-food__container">
            <h1 class="user-food__title">
              ${e.name}
            </h1>

            <p class="user-food__price">price: $ ${e.price}</p>

            <div class="user-food__quantity">
              <button
                class="user-food__quantity-button user-food__quantity-button--minus"
                onclick="minusQuantityBurgerToCart(${i})"
              >-</button>
              <input
                type="text"
                class="user-food__quantity-number"
                value="${e.quantity}"
                onchange="changeQuantityBurgerToCart(${i}, event.target.value)"
              >
              <button
                class="user-food__quantity-button user-food__quantity-button--plus"
                onclick="plusQuantityBurgerToCart(${i})"
              >+</button>
            </div>
          </div>

          <div class="user-food__basket-container">
            <img
              src="images/basket_delete.svg"
              alt="Place ${i + 1}"
              class="user-food__basket-delete"
              onclick="deleteBurger(${i})"
            >
          </div>
        </div>
      `).join('')
    }

    ${
      cart.asian.map((e, i) => `
        <div class="user-food">
          <div class="user-food__photo--container">
            <img
              src="images/foods/asian_cuisine/${e.image}.png"
              alt="Place ${i + 1}"
              class="user-food__photo"
            >
          </div>

          <div class="user-food__container">
            <h1 class="user-food__title">
              ${e.name}
            </h1>

            <p class="user-food__price">price: $ ${e.price}</p>

            <div class="user-food__quantity">
              <button
                class="user-food__quantity-button user-food__quantity-button--minus"
                onclick="minusQuantityAsianToCart(${i})"
              >-</button>
              <input
                type="text"
                class="user-food__quantity-number"
                value="${e.quantity}"
                onchange="changeQuantityAsianToCart(${i}, event.target.value)"
              >
              <button
                class="user-food__quantity-button user-food__quantity-button--plus"
                onclick="plusQuantityAsianToCart(${i})"
              >+</button>
            </div>
          </div>

          <div class="user-food__basket-container">
            <img
              src="images/basket_delete.svg"
              alt="Place ${i + 1}"
              class="user-food__basket-delete"
              onclick="deleteAsian(${i})"
            >
          </div>
        </div>
      `).join('')
    }
  `;

  if (value === 2) {
    document.querySelector('.basket__user-cart').innerHTML = userBasket;
    document.querySelectorAll('.basket__result-price')[0].innerHTML = userResultPrice;
    document.querySelectorAll('.basket__result-price')[1].innerHTML = userResultPrice;

    return;
  }

  value === 0
    ? body.innerHTML = `
        ${header}
        ${navMenu}
        ${main}
        ${footer}
      `
    : body.innerHTML = navBasket;

}

function deletePizza(id) {
  cart.pizza.splice(id, 1);

  value = 2;

  render();
}

function deleteBurger(id) {
  cart.burger.splice(id, 1);

  value = 2;

  render();
}

function deleteAsian(id) {
  cart.asian.splice(id, 1);

  value = 2;

  render();
}

function renderBasket() {
  value = 1;
  render();
}

function renderHome() {
  value = 0;
  render();
}

function submitForm() {
  cart = {
    pizza: [],
    burger: [],
    asian: [],
  };

  render();
}

function plusQuantityPizzaToCart(id) {
  cart.pizza[id].quantity++;

  value = 2;

  render();
}

function minusQuantityPizzaToCart(id) {
  if (cart.pizza[id].quantity > 0) {
    cart.pizza[id].quantity--;
  }

  value = 2;

  render()
}

function changeQuantityPizzaToCart(id, number) {
  if (number >= 0) {
    cart.pizza[id].quantity = number;
  }

  value = 2;

  render()
}

function plusQuantityBurgerToCart(id) {
  cart.burger[id].quantity++;

  value = 2;

  render();
}

function minusQuantityBurgerToCart(id) {
  if (cart.burger[id].quantity > 0) {
    cart.burger[id].quantity--;
  }

  value = 2;

  render();
}

function changeQuantityBurgerToCart(id, number) {
  if (number >= 0) {
    cart.burger[id].quantity = number;
  }

  value = 2;

  render()
}

function plusQuantityAsianToCart(id) {
  cart.asian[id].quantity++;

  value = 2;

  render();
}

function minusQuantityAsianToCart(id) {
  if (cart.asian[id].quantity > 0) {
    cart.asian[id].quantity--;
  }

  value = 2;

  render();
}

function changeQuantityAsianToCart(id, number) {
  if (number >= 0) {
    cart.asian[id].quantity = number;
  }

  value = 2;

  render();
}

function addPizzaToCart(id) {
  if (cart.pizza.includes(foods.pizza[id])) {
    return;
  }

  cart.pizza.push(foods.pizza[id]);

  render();
}

function addBurgerToCart(id) {
  if (cart.burger.includes(foods.burger[id])) {
    return;
  }

  cart.burger.push(foods.burger[id]);
  render();
}

function addAsianToCart(id) {
  if (cart.asian.includes(foods.asian[id])) {
    return;
  }

  cart.asian.push(foods.asian[id]);
  render();

  console.log(cart);
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
