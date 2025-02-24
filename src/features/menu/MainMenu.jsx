import { useNavigate } from "react-router-dom";
function MainMenu() {
  const navigate = useNavigate();
  return (
    <div className="MainMenu">
      <div
        className="starters tasty-teasers"
        onClick={() => navigate("/tastyteasers")}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLetnQTeyzm8StHzS_UpZDjW5m9M1uP4uPxg&s"
          alt="Fries"
        />
        <button>Tasty Teasers</button>
      </div>
      <div className="starters burger" onClick={() => navigate("/burgers")}>
        <img
          src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
          alt="Burger"
        />
        <button>Burgers</button>
      </div>
      <div
        className="starters freakshake"
        onClick={() => navigate("/freakshakes")}
      >
        <img
          src="https://media-cdn2.greatbritishchefs.com/media/g4fnom43/img63566.whqc_768x512q80.jpg"
          alt="Freakshake"
        />
        <button>Freakshake</button>
      </div>
      <div className="starters pizza" onClick={() => navigate("/pizza")}>
        <img
          src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU="
          alt="Pizza"
        />
        <button>Pizza</button>
      </div>
      <div
        className="starters milkshake"
        onClick={() => navigate("/milkshake")}
      >
        <img
          src="https://bakingmischief.com/wp-content/uploads/2022/03/coffee-milkshake-square.jpg"
          alt="Milkshake"
        />
        <button>Milkshake</button>
      </div>
      <div className="starters rolls" onClick={() => navigate("/rolls")}>
        <img
          src="https://media.istockphoto.com/id/1421688556/photo/beef-shawarma-on-a-dark-background-shawarma-with-beef-in-pita-bread.jpg?s=612x612&w=0&k=20&c=wAhnmKwTKhukglXVPQBR2FI0w4h07mwpgz0QSTY99e0="
          alt="Rolls"
        />
        <button>Rolls</button>
      </div>
      <div className="starters juice" onClick={() => navigate("/juice")}>
        <img
          src="https://sandhyahariharan.co.uk/wp-content/uploads/2011/05/homemade-pineapple-juice-7-of-7.jpg"
          alt="Juice"
        />
        <button>Juice</button>
      </div>
      <div className="starters lemonade" onClick={() => navigate("/lemonade")}>
        <img
          src="https://www.simplejoy.com/wp-content/uploads/2024/04/mojito.jpg"
          alt="Lemonade"
        />
        <button>Lemonade</button>
      </div>
      <div className="starters slushy" onClick={() => navigate("/slushy")}>
        <img
          src="https://emergencyice.com/wp-content/uploads/2024/04/koolaid-ice-slushy-scaled-1.jpg"
          alt="Slushy"
        />
        <button>Slushy</button>
      </div>
      <div
        className="starters icefrappes"
        onClick={() => navigate("/icefrappes")}
      >
        <img
          src="https://www.thehungrybites.com/wp-content/uploads/2023/06/coffee-ice-cream-frappe-frappuccino-3.jpg"
          alt="Ice Frappes"
        />
        <button>Ice Frappes</button>
      </div>
      <div className="starters cream" onClick={() => navigate("/creams")}>
        <img
          src="https://flourdeliz.com/wp-content/uploads/2022/08/nutella-whipped-cream-featured-image-2.jpg"
          alt="Cream"
        />
        <button>Cream</button>
      </div>
      <div className="starters pasta" onClick={() => navigate("/pasta")}>
        <img
          src="https://www.indianveggiedelight.com/wp-content/uploads/2023/01/white-sauce-pasta.jpg"
          alt="Pasta"
        />
        <button>Pasta</button>
      </div>
    </div>
  );
}

export default MainMenu;
