import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function Header() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["aman", "terpercaya", "anti ribet", "mudah"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <span ref={el} />
    </>
  );
}
