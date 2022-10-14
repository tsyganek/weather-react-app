import React, { useState } from "react";

export default function Cities() {
  return (
    <div>
      <ul className="cityList">
        <li>
          <a href="#" className="stockholm">
            Stockholm
          </a>
        </li>
        <li>
          <a href="#" className="kyiv">
            Kyiv
          </a>
        </li>
        <li>
          <a href="#" className="valencia">
            Valencia
          </a>
        </li>
        <li>
          <a href="#" className="tokyo">
            Tokyo
          </a>
        </li>
      </ul>
    </div>
  );
}
