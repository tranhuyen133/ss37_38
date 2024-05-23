import { useEffect, useRef, useState } from "react";


export default function UseRef() {
    const [count,setCount]=useState<number>(0);
    let index=0;
    const refCurrent=useRef<HTMLInputElement>();//ref={current:1}
    
    useEffect(()=>{
        refCurrent.current?.focus();
    },[])
    // toán tử optinal change
    // let a={
    //     number:1
    // }
    /* 
        useRef là 1 hàm nhận vào tham số là giá trị khởi tạo
        useRef() trả về 1 đối tượng hay 1 object, bên trong object này
        sẽ có 1 key(current) với giá trị là giá trị tham số truyền vào!
        khi mỗi lần component re-render thì useRef sẽ không tạo ra tham
        chiếu mới.
        Khi muốn focus vào ô input khi muốn nhập dữ liệu 
     */
    // console.log("giá trị của ref ",ref);
    
    const handleClick=()=>{
        // a.number=++a.number
    
        index++;
        console.log("giá trị index khi click",index);
        setCount(count+1);
    }
    // console.log("giá trị a",a);
    // console.log("giá trị biến ref sau khi click",ref);
    
    
  return (
    <div>
            UseRef
        <p> giá trị count :{count}</p>
        <button onClick={handleClick}> click </button> <br />
         <input
              ref={refCurrent}
          type="text" placeholder="nhập email" 
          />
    </div>
  )
}
