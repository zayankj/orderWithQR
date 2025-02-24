// import "./Burgers.css";
import "./Menu.css";
import { useCart } from "../cart/CartContext";

const burgerMenu = [
  {
    name: "Chicken Broasted Burger",
    price: 199,
    image:
      "https://i.ytimg.com/vi/gvxU9Jv6qRw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDY_rbkWd-91OiTmu_Pvy8FI17RDQ",
  },
  {
    name: "Veg Patty Burger",
    price: 80,
    image: "https://4.imimg.com/data4/JP/FG/GLADMIN-15458743/3-500x500.png",
  },
  {
    name: "Chicken Broasted Burger with Chees",
    price: 179,
    image: "https://cdn.uengage.io/uploads/6670/image-811279-1677054193.jpeg",
  },
  {
    name: "Tikka Burger",
    price: 179,
    image:
      "https://img.freepik.com/fotos-premium/hamburguesa-pollo-picante-tikka-mejor-comida-rapida-fotografia-imagenes-pollo-tikka_1020697-116380.jpg",
  },
  {
    name: "Strips Burger",
    price: 179,
    image:
      "https://www.marionskitchen.com/wp-content/uploads/2022/06/Thai-Red-Curry-Fried-Chicken-Burger-01.jpg",
  },
  {
    name: "Double Broasted Burger",
    price: 199,
    image:
      "https://www.shutterstock.com/image-photo/double-chicken-burger-ketchup-cheese-600nw-2264302791.jpg",
  },
  {
    name: "Ground Burger",
    price: 199,
    image: "https://media.timeout.com/images/105260229/750/422/image.jpg",
  },
  {
    name: "Double Melt Burger",
    price: 199,
    image:
      "https://i2-prod.coventrytelegraph.net/incoming/article25694479.ece/ALTERNATES/s615b/0_Classic-Dbl-Cheese-Melt-UK.png",
  },
  {
    name: "Jumbo Burger",
    price: 199,
    image:
      "https://media.istockphoto.com/id/627797774/photo/deluxe-quadruple-cheeseburger.jpg?s=612x612&w=0&k=20&c=-5GSfuQrE9qq93u5yaMF8WxwPQ_puxkuf2TrW7pDYws=",
  },
  {
    name: "Nashville Burger",
    price: 229,
    image: "https://i.ytimg.com/vi/fbz9R-WYx5k/maxresdefault.jpg",
  },
];

function Burgers() {
  const { dispatch } = useCart();
  const handleAddToCart = (burger) => {
    dispatch({ type: "ADD_TO_CART", payload: burger });
    alert(`${burger.name} added to cart!`);
  };

  return (
    <div className="menu-container">
      <h2>Burgers Menu 🍔</h2>
      <div className="menu-grid">
        {burgerMenu.map((burger, index) => (
          <div className="menu-card" key={index}>
            <img src={burger.image} alt={burger.name} />
            <h3>{burger.name}</h3>
            <p>₹{burger.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(burger)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Burgers;
