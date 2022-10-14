import React, { useState } from "react";
import axios from "axios";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

export default function Cities() {
  function handleCityLink(event) {
    event.preventDefault();
  }
  return (
    <div>
      <ul className="cityList">
        <li>
          <a href="#" onClick={handleCityLink}>
            Stockholm
          </a>
        </li>
        <li>
          <a href="#" onClick={handleCityLink}>
            Kyiv
          </a>
        </li>
        <li>
          <a href="#" onClick={handleCityLink}>
            Valencia
          </a>
        </li>
        <li>
          <a href="#" onClick={handleCityLink}>
            Tokyo
          </a>
        </li>
      </ul>
    </div>
  );
}
