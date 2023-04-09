import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/MyButton";

function App() {
  const items = ["New York", "London", "Mumbai"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClose = () => {
    setAlertVisibility(false)
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={handleClose}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility((prev) => true)}>
        Submit
      </Button>
    </div>
  );
}

export default App;
