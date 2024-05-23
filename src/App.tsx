import { useCallback, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import UseContext from "./components/UseContext";
import ThemeContext from "./components/SS37/Bài1+2+3+4/ThemeContext";
import "./App.css";
import Counter from "./components/ss38/Bài1/Counter";
import UserList from "./components/ss38/Bài2/UserList";
import ColorPicker from "./components/ss38/Bài3/ColorPicker";
import RandomNumberGenerator from "./components/ss38/Bài4/RandomNumberGenerator";
import TodoList from "./components/ss38/Bài5/TodoList";
import LoginForm from "./components/ss38/Bài6/LoginForm";
import ProductList from "./components/ss38/Bài7+8/ProductList ";
export default function App() {
  const [active,setActive]= useState<boolean>(false);
  const [count,setCount]=useState<number>(0);
  const handleClick=()=>{
   
    setCount(count+1);
  }
 let result= useCallback(()=>{
     const getIdProduct = () => {
    }
    return getIdProduct;
  },[])
  console.log("component App re-render khi click!");
  /* 
    Khi component App được re-render thì các component con
    cũng re-render theo.
   */
  /* 
    nếu active là true thì hiển thị thẻ p với nội dung là xin chào!
    nếu active là false thì không hiển thị gì cả!
   */
    const [name, setName] = useState<string>("blue");
      return (

    <div>
     <div className="content">SS37
      <h1>Bài 1 + 2 + 3 + 4</h1>
      <SetUseContext.Provider value={name}>
        <ThemeContext />
      </SetUseContext.Provider>
      <h1>Bài 5</h1>
      
      <h1>Bài 6</h1>

      <h1>Bài 7</h1>

      <h1>Bài 8</h1>

      <h1>Bài 9</h1>

      <h1>Bài 10</h1>
    <p>------------------------------------------------------------------------------------------------------------------------------------------</p>
    <div className="content">SS38
      <h1>Bài 1</h1>
      <Counter />
      <h1>Bài 2</h1>
      <UserList/>
      <h1>Bài 3</h1>
      <ColorPicker/>
      <h1>Bài 4</h1>
      <RandomNumberGenerator/>
      <h1>Bài 5</h1>
      <TodoList/>
      <h1>Bài 6</h1>
      <LoginForm/>
      <h1>Bài 7 + 8</h1>
      <ProductList/>
      <h1>Bài 9</h1>

      <h1>Bài 10</h1>
    </div>
      <p>================================================================================================================================================================</p>
      App
      {active ? <p>xin chào</p>:""}
      <UseRef></UseRef>
      <Header count={active}></Header>
      <Main getIdProduct={result}></Main>
      <button onClick={handleClick}> click active </button>
      <p>*****************************</p>
      <UseReducer></UseReducer>
      <p>***********</p>
      <UseContext></UseContext>

  
  )
}
}
}
