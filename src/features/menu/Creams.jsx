// import "./Creams.css";
import "./Menu.css";

const creamMenu = [
  {
    name: "Nutella Cream",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1599785209707-46e7c7b2d3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Chocolate Cream",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Strawberry Cream",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1620999929470-e6c9b0a7a23d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Vanilla Cream",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1625996070366-b436f8dc6b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Mango Cream",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1621375271054-685c19cc83b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Blueberry Cream",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1616787029393-65f3156f8c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Pistachio Cream",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1634145127357-2a2b720849cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Coffee Cream",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1602093796820-9b27652a44af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Oreo Cream",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1629905501031-80fa1da9834c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Hazelnut Cream",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1594756206316-8b6f92d0f2ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

function Creams() {
  const handleAddToCart = (creamName) => {
    alert(`${creamName} added to cart!`);
  };

  return (
    <div className="menu-container">
      <h2>Creams Menu 🍨</h2>
      <div className="menu-grid">
        {creamMenu.map((cream, index) => (
          <div className="menu-card" key={index}>
            <img src={cream.image} alt={cream.name} />
            <h3>{cream.name}</h3>
            <p>₹{cream.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(cream.name)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creams;
