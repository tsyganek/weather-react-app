import React from "react";

export default function Footer() {
  return (
    <p>
      The project is designed by{" "}
      <a
        href="https://ua.linkedin.com/in/kateryna-tsygankova-15a429244?trk=public_profile_browsemap"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kateryna Tsygankova
      </a>
      , open-sourced on
      <a
        href="https://github.com/tsyganek/weather-react-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        GitHub
      </a>
      , and hosted on{" "}
      <a
        href="https://startling-chimera-8abb22.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
    </p>
  );
}
