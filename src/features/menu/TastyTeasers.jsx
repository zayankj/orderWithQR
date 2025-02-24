// import "./TastyTeasers.css";
import "./Menu.css";

const tastyTeasersMenu = [
  {
    name: "French Fries (Salted)",
    price: 99,
    image: "https://i.ytimg.com/vi/BTdjDF2SgQM/maxresdefault.jpg",
  },
  {
    name: "Peri Peri Fries",
    price: 119,
    image: "https://static.toiimg.com/thumb/53109843.cms?width=1200&height=900",
  },
  {
    name: "Cheesy Fries",
    price: 139,
    image:
      "https://b.zmtcdn.com/data/dish_photos/261/3d41f2a814a4110a53ae63dc2f4d6261.jpg",
  },
  {
    name: "Masala Cheesy Fries",
    price: 149,
    image:
      "https://b.zmtcdn.com/data/dish_photos/97e/7d87244b0e18c4de07d594aebc8e697e.jpg",
  },
  {
    name: "Cheesy Burst Fries",
    price: 159,
    image:
      "https://img.freepik.com/free-photo/cheese-loaded-fries-with-herbs_114579-5085.jpg",
  },
  {
    name: "Mini Loaded Fries",
    price: 129,
    image:
      "https://b.zmtcdn.com/data/dish_photos/e1b/9c9383db585c1a8d815138da1c77ae1b.jpg",
  },
  {
    name: "Loaded Fries",
    price: 179,
    image:
      "https://b.zmtcdn.com/data/dish_photos/a91/812282a94c2f2ac51426f9a2e7e3ba91.jpg",
  },
  {
    name: "Popcorn Chicken",
    price: 169,
    image:
      "https://www.kfc.com.au/Content/OnlineOrderingImages/Items/Thumb/popcorn-chicken.jpg",
  },
  {
    name: "Chicken Nuggets",
    price: 149,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Chicken-nuggets-e02ec4c.jpg",
  },
  {
    name: "Chicken Strips",
    price: 179,
    image:
      "https://www.allrecipes.com/thmb/qppUrcXZWX8zDWXtE8bt6_KWjwQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-easy-chicken-strips-hero-4x3-5b7f50d8eacb4d30a69da68127b49f49.jpg",
  },
  {
    name: "Steamed Momos",
    price: 129,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Veg-Momos.jpg",
  },
  {
    name: "Fried Momos",
    price: 139,
    image: "https://static.toiimg.com/thumb/54510236.cms?width=1200&height=900",
  },
  {
    name: "BBQ Fingers",
    price: 189,
    image: "https://static.toiimg.com/photo/53110049.cms",
  },
];

function TastyTeasers() {
  const handleAddToCart = (itemName) => {
    alert(`${itemName} added to cart!`);
  };

  return (
    <div className="menu-container">
      <h2>Tasty Teasers Menu 🍟</h2>
      <div className="menu-grid">
        {tastyTeasersMenu.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(item.name)}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TastyTeasers;
