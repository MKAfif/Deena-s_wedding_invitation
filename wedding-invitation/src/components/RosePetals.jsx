import { useEffect } from "react";
import rose from '../assets/rose.png';

export default function RosePetals() {
  useEffect(() => {
    const container = document.getElementById("petals");

    for (let i = 0; i < 25; i++) {
      const petal = document.createElement("img");

      petal.src = rose;
      petal.className = "petal";

      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = 5 + Math.random() * 5 + "s";
      petal.style.opacity = Math.random();

      container.appendChild(petal);
    }
  }, []);

  return (
    <div
      id="petals"
      className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-20"
    ></div>
  );
}