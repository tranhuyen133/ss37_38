import React, { useReducer, useState } from 'react'

export default function UseReducer() {
    // const [count,setCount]=useState<number>(0);
    let initial={
        product:{},
        products:[],
        isLoading:false,
    }
    const reducer=(state:any,action:any)=>{
        switch (action) {
            case "increase":
               return state+1
            default:
                return state;
        }
    }
    let initialCount=0;
    const [state, dispatch] = useReducer(reducer,initialCount);//[0,f]
    // destructoring
    const handleClick=()=>{
        dispatch("increase")
    }
  return (
    <div>
        UseReducer
        {/* 
            đây là 1 hook hay còn gọi là hàm!
            dùng để quản lý các state phức tạp,
            đối với những state đơn giản thì có dùng useReducer được 
            không? ==> được
            nhưng mà các state đơn giản thì nên dùng useState.
            + đầu vào useReducer nhận vào 2 tham số
                + tham số thứ 1 là 1 cái hàm reducer-đặt tên gì cũng được
                + tham số thứ 2 là 1 giá trị khởi tạo
            
            Nắm được luồng chạy của useReducer bài học sau sẽ học redux(thư viện quản 
                lý state.
            
            )
         */}
         <p> giá trị biến count:{state} </p>
         <button onClick={handleClick}>Increase</button>
    </div>
  )
}
