import { useState, useRef, MouseEvent } from "react";
import { gsap } from "gsap";

export const useMagnetic = <T extends HTMLElement>() => {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseMove = (e: MouseEvent<T>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(ref.current, { x: x * 0.5, y: y * 0.5, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      gsap.to(ref.current, { x: 0, y: 0, duration: 0.3 });
    }
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return {
    ref,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter,
    isHovering,
  };
};
