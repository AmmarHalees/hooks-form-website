import { useRef } from "react";
const useRenderCounter = label => {
  const counter = useRef(0);
  counter.current++;

   return `${label} rendered ${counter.current} times`;
};
export default useRenderCounter;