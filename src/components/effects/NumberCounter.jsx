import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NumberCounter = ({ amount = 1, number = 25 }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const isInView = useInView(ref, { amount });

  useEffect(() => {
    if (!start) return;
    let num = 0;
    const speed = 2 / number;
    const interval = setInterval(() => {
      setCount(num);
      num++;
      if (num >= number) {
        clearInterval(interval);
      }
    }, speed * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  useEffect(() => {
    if (start) return;
    setStart(true);
  }, [isInView]);

  return (
    <>
      <span className="inline-block" ref={ref}>
        {count}
      </span>
    </>
  );
};

export default NumberCounter;
