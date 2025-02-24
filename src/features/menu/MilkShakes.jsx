// import "./Milkshakes.css";
import "./Menu.css";
const milkshakeMenu = [
  {
    name: "Oreo Shake",
    price: 149,
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Oreo-Milkshake-Recipe.jpg",
  },
  {
    name: "Shamam Shake",
    price: 139,
    image: "https://images.unsplash.com/photo-1559847844-5315695dada1",
  },
  {
    name: "Mixed Fruits Shake",
    price: 129,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/fruit-smoothie-recipe.jpg",
  },
  {
    name: "Chikoo Shake",
    price: 119,
    image:
      "https://www.secondrecipe.com/wp-content/uploads/2022/03/chikoo-milkshake.jpg",
  },
  {
    name: "Anjeer Shake",
    price: 159,
    image:
      "https://i.ndtvimg.com/i/2017-06/fig-milkshake_620x330_51497794492.jpg",
  },
  {
    name: "Nutella Oreo Shake",
    price: 169,
    image:
      "https://www.cookclickndevour.com/wp-content/uploads/2021/03/nutella-milkshake-3.jpg",
  },
  {
    name: "Fruits n Nuts Shake",
    price: 179,
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Fruit_and_Nut_Milkshake.jpg",
  },
  {
    name: "Vanilla Shake",
    price: 119,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2018/02/vanilla-milkshake-recipe-1.jpg",
  },
  {
    name: "Chocolate Shake",
    price: 139,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/chocolate-milkshake.jpg",
  },
  {
    name: "Choco Dry Fruit Shake",
    price: 179,
    image:
      "https://spicesnflavors.com/wp-content/uploads/2020/12/chocolate-milkshake-1.jpg",
  },
  {
    name: "Brownie Elegance Chocolate",
    price: 199,
    image:
      "https://thebigmansworld.com/wp-content/uploads/2022/08/brownie-milkshake2.jpg",
  },
  {
    name: "Nutella KitKat Shake",
    price: 189,
    image:
      "https://delightfuldeliciousdelovelyblog.files.wordpress.com/2016/08/8-22-16-116.jpg",
  },
  {
    name: "Nutty Nutella Shake",
    price: 179,
    image:
      "https://whiskaffair.com/wp-content/uploads/2021/05/Nutella-Milkshake-2-3.jpg",
  },
  {
    name: "Roasted Almond Shake",
    price: 169,
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Sibyl_sunitha/Badam_Milk_Recipe.jpg",
  },
  {
    name: "Sitaphal Shake",
    price: 149,
    image:
      "https://1.bp.blogspot.com/-Ygkx0NVTNXc/YQSxBdYNUII/AAAAAAAAL6c/_KNoC07EpFcDCGNF_kFk_7sbAFpMcwl9gCLcBGAsYHQ/s16000/Sitaphal-Milkshake-Recipe.JPG",
  },
  {
    name: "Mango Shake",
    price: 129,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2018/06/Mango-Milkshake.jpg",
  },
];

function Milkshakes() {
  const handleAddToCart = (shakeName) => {
    alert(`${shakeName} added to cart!`);
  };

  return (
    <div className="menu-container">
      <h2>Milkshake Menu 🥤</h2>
      <div className="menu-grid">
        {milkshakeMenu.map((shake, index) => (
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

export default Milkshakes;
