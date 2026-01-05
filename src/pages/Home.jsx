import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [sec, setSec] = useState(0);
  const countRef = useRef(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);
  function handleClick() {
    countRef.current += 1;
    console.log("ref:", countRef.current);
  }
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        count : {count}
      </button>
      <p>{sec}s</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default Home;
