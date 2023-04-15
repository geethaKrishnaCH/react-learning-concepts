import { Children, useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

function ExpandableText({ children, maxChars = 40 }: Props) {
  const [isExpanded, setExpand] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  let text = children;
  if (!isExpanded) text = children.substring(0, maxChars);

  return (
    <>
      <p>
        {text}
        {isExpanded ? " " : "... "}
        <span
          style={{
            cursor: "pointer",
            border: "1px solid black",
            borderRadius: "2px",
            backgroundColor: "#f2f2f2",
            padding: "0 2px",
          }}
          onClick={() => setExpand((prev) => !prev)}
        >
          {isExpanded ? "less" : "more"}
        </span>
      </p>
    </>
  );
}

export default ExpandableText;
