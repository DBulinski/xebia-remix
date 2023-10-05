import type { LinksFunction } from "@remix-run/node";
import { useState } from "react";
import itemsCss from "../items.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: itemsCss },
];

const items = new Array(5000).fill("");

export default function Items() {
  const [lastItemSelected, setLastItemSelected] = useState<number | null>(null);

  return (
    <>
      {lastItemSelected !== null && (
        <strong>Last item selected: {lastItemSelected + 1}</strong>
      )}
      <div className="items-container">
        {items.map((_, index) => (
          <div className="item" key={index}>
            <button
              disabled={lastItemSelected === index}
              onClick={() => setLastItemSelected(index)}
            >
              Item {index + 1}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
