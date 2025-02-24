// import "./FreakShakes.css";
import "./Menu.css";

const freakShakesMenu = [
  {
    name: "Oreo Obsession",
    price: 249,
    image:
      "https://www.simplystacie.net/wp-content/uploads/2015/07/oreo-milkshake-4.jpg",
  },
  {
    name: "Chocolate Compassion",
    price: 239,
    image:
      "https://cdn.tasteatlas.com//Images/Dishes/df9d45c39a824a4ca45de3adba014ed8.jpg",
  },
  {
    name: "Mud Coffee",
    price: 229,
    image:
      "https://img.freepik.com/premium-photo/cold-coffee-with-ice-cream_57665-1525.jpg",
  },
  {
    name: "Krazy KitKat",
    price: 259,
    image:
      "https://www.rakshaaskitchen.com/wp-content/uploads/2020/05/Kitkat-milkshake.jpg",
  },
  {
    name: "Nifty Nutella",
    price: 269,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/nutella-milkshake-1631211625.jpg",
  },
  {
    name: "Fruits and Nuts",
    price: 279,
    image:
      "https://img.freepik.com/free-photo/fruit-milkshake-with-nuts_1220-4794.jpg",
  },
];

function FreakShakes() {
  const handleAddToCart = (shakeName) => {
    alert(`${shakeName} added to cart!`);
  };

  return (
    <div className="menu-container">
      <h2>FreakShakes Menu 🥤</h2>
      <div className="menu-grid">
        {freakShakesMenu.map((shake, index) => (
          <div className="menu-card" key={index}>
            <img src={shake.image} alt={shake.name} />
            <h3>{shake.name}</h3>
            <p>₹{shake.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(shake.name)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreakShakes;
