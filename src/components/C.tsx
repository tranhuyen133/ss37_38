import { useContext } from "react";
import { context } from "./A";

export default function C() {
    let result= useContext(context);
  return (
    <div>C
        <p>xin chào!  {result}</p>
    </div>
  )
}
