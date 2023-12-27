import React,{useState} from "react";
import style from "../../styles/TodoInput.module.css"




//yaha hum props me wo data de gy jo hum ny TodoApp se as a props mangwaya hai 
const TodosInput = ({addTodo}) => {
  // yaha addTodo ko argument do or A=addTodo ko call kr do

  // us k bd data ko mangwana he tw use kry gy 
  // Handlin Input in react
  const [text, setText] = useState("");
  

  return (
    <>
      <div>
        <div className={style.input_div}>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Your Todo" />
          <button onClick={()=>addTodo(text)} style={{backgroundColor:"teal"}}>Add Todo</button>
         
        </div>
      </div>
    </>
  );
};

export default TodosInput;
