import React, { useState } from 'react';
import './index.css'
import web from './images/image1.svg';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo, removeAllTodo, editTodo} from './actions/action'
const Todo = () =>{
    const list = useSelector((state) => state.todoReduce.list)
    const newId= useSelector((state) => state.todoReduce.newId)

    const dispatch = useDispatch();
    const [input, setInput] = useState('')
    const [toggle,setToggle] = useState(true);
console.log(newId);
    return<>
        <div className='main-div'>
            <div className='child-div'>
            <figure>
              <img src={web} alt='web'/>  
              <figcaption>Add Your List Here ✌️</figcaption>
            </figure>

            <div className='addItems'>

                <input type='text' 
                value={input}
                onChange={(event) =>{
                    setInput(event.target.value);
                }}

                placeholder='✍️ Add Items...'/>
                    {toggle ? <i onClick={()=>{ dispatch(addTodo(input,toggle,newId)); setInput('')}} className="fas fa-plus add-btn" title='Update Item'></i> :
                        <i onClick={()=>{ dispatch(addTodo(input,toggle,newId)); setToggle(true); setInput('')}} className="fas fa-edit add-btn" title='Update Item'></i>
                    }
            </div>


            <div className='showItems'>
                {list.map((value)=>{
                    return(<div key={value.id} className='eachItem'>
                        <h3>{value.data}</h3>
                        <div className='todo-btn'>
                        <i onClick={() => {dispatch(editTodo(value.id)); setInput(value.data); setToggle(false)}} className='far fa-edit add-btn' title='Edit Item'></i>
                        <i onClick={() => {dispatch(removeTodo(value.id))}} className='far fa-trash-alt add-btn' title='Delete Item'></i>
                        </div>
                    </div>)
                })}
                
            </div>

            <div className='showItems'>
                <button onClick={()=> dispatch(removeAllTodo())} className='btn effect04' data-sm-link-text='Remove All'><span> Check List</span></button>
            </div>
            </div>
        </div>
    </>

}

export default Todo;