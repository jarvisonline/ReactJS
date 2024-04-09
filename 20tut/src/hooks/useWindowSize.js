import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowsize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowsize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); //cleanup function will run when the component unmounts
  }, []);
  return windowSize;
};

export default useWindowSize;
