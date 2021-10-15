import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";

export default function Card({ children, classname }) {
  const ref = useRef();
  const [isHovered, setHovered] = useState(false);
  const [animatedProps, setanimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: {
        mass: 10,
        tension: 100,
        friction: 40,
        precision: 0.00001,
      },
    };
  });
  return (
    <animated.div
      ref={ref}
      className={`card shadow shadow-lg ${classname}`}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));
        const dampen = 100; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen,
          (x - ref.current.clientWidth / 2) / dampen,
          1.07,
        ];

        setanimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setanimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
}
