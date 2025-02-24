import "./Pizza.css";
import { useCart } from "../cart/CartContext";

const pizzaMenu = [
  {
    name: "Margherita",
    price: 199,
    image: "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
  },
  {
    name: "Corn & Onion",
    price: 229,
    image: "https://www.dominos.co.in//files/items/Corn_&_Onion.jpg",
  },
  {
    name: "Veg Exotica",
    price: 259,
    image: "https://www.dominos.co.in//files/items/Veg_Extravaganza.jpg",
  },
  {
    name: "Double Cheese",
    price: 249,
    image:
      "https://www.dominos.co.in//files/items/Double_Cheese_Margherita.jpg",
  },
  {
    name: "Chicken Tikka",
    price: 279,
    image: "https://www.dominos.co.in//files/items/Chicken_Tikka.jpg",
  },
  {
    name: "Broasted Chicken",
    price: 299,
    image: "https://i.ytimg.com/vi/gvxU9Jv6qRw/hq720.jpg",
  },
  {
    name: "Pepper Garlic Chicken",
    price: 289,
    image: "https://www.dominos.co.in//files/items/Chicken_Pepperoni.jpg",
  },
  {
    name: "Hit N Spicy",
    price: 269,
    image: "https://www.dominos.co.in//files/items/Peri_Peri_Chicken.jpg",
  },
  {
    name: "Peri Peri Pizza",
    price: 279,
    image: "https://www.dominos.co.in//files/items/Peri_Peri_Chicken.jpg",
  },
  {
    name: "Schezwan Chicken",
    price: 289,
    image: "https://www.dominos.co.in//files/items/Schezwan_Chicken.jpg",
  },
  {
    name: "Barbeque",
    price: 299,
    image: "https://www.dominos.co.in//files/items/Chicken_Golden_Delight.jpg",
  },
  {
    name: "Dominator",
    price: 349,
    image: "https://www.dominos.co.in//files/items/Non-Veg_Supreme.jpg",
  },
  {
    name: "Signature",
    price: 369,
    image: "https://www.dominos.co.in//files/items/Indi_Tandoori_Paneer.jpg",
  },
];

function Pizza() {
  const { dispatch } = useCart();
  const handleAddToCart = (pizza) => {
    dispatch({ type: "ADD_TO_CART", payload: pizza });
    alert(`${pizza.name} added to cart!`);
  };

  return (
    <div className="pizza-menu">
      <h2>Pizzas Menu 🍕</h2>
      <div className="pizza-grid">
        {pizzaMenu.map((pizza, index) => (
          <div className="pizza-card" key={index}>
            <img src={pizza.image} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>₹{pizza.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(pizza)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pizza;
