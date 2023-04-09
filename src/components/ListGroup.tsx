import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // (item) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // const items: string[] = [];
  const message = !items || items.length === 0 ? <p>No item found</p> : null;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${
              selectedIndex === index ? "active" : ""
            }`}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
