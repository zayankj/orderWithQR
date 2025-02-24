import { useCart } from "./CartContext";
import "./Cart.css";

function Cart() {
  const { cart, dispatch } = useCart();

  const handleRemove = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const handleOrder = () => {
    if (cart.items.length === 0) {
      alert("Your cart is empty. Add items to place an order!");
      return;
    }

    // Order processing logic (for now just show a success message)
    alert("🎉 Your order has been placed successfully!");
    // Optionally clear the cart after ordering:
    // cart.items.forEach((item) =>
    //   dispatch({ type: "REMOVE_FROM_CART", payload: item })
    // );
  };

  const totalAmount = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart 🛒</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.items.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>
                  Price: ₹{item.price} x {item.quantity}
                </p>
              </div>
              <button onClick={() => handleRemove(item)}>Remove ❌</button>
            </div>
          ))}
          <h3>Total: ₹{totalAmount}</h3>
          <button className="order-button" onClick={handleOrder}>
            Order Now 🛍️
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
