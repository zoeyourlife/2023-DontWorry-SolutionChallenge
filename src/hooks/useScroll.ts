import { useRef, useState, useEffect } from "react";

function useScroll() {
  const scrollPositionRef = useRef(0);
  const [scrollTop, setScrollTop] = useState<boolean>(true);
  const [scrollDown, setScrollDown] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = () => {
      const currentScrollPosition = window.scrollY;
      setScrollTop(currentScrollPosition < 25);
      setScrollDown(scrollPositionRef.current < currentScrollPosition);
      scrollPositionRef.current = currentScrollPosition;
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return {
    scrollDown,
    scrollTop,
  };
}

export default useScroll;
