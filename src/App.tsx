import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  const items = ["New York", "London", "Mumbai"];
  const [alertVisible, setAlertVisibility] = useState(false);
  const [liked, setLiked] = useState(false);

  const [count, setCount] = useState(0);

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const incrementQuantity = (id: number) => {
    console.log("+ clicked");

    const newItems = cart.items.map((p) => {
      if (p.id === id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setCart({ ...cart, items: [...newItems] });
  };
  const decrementQuantity = (id: number) => {
    console.log("- clicked");

    const newItems = cart.items.map((p) => {
      if (p.id === id) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setCart({ ...cart, items: [...newItems] });
  };

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClose = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
