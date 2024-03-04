import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Étudiant EN BTS SIO SLAM",
          "Vous avez devant vous la définition du terme passionné"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
        delay: 15, // Ajoutez cette ligne
      }}
    />
  );
}

export default Type;