import React, { useState } from 'react'
import Tasklist from './Tasklist';
import { FaPlus } from "react-icons/fa";


export default function Input() {
    const [inputList, setInputList] = useState();
    const [items, setitems] = useState([]);
    const itemevent = (event) => {
        setInputList(event.target.value);
    };
    const listOfItems = () => {
        if (inputList.length > 0) {
            setitems((olditems) => {
                return [...olditems, inputList];
            });
            setInputList("");
        }
        else {
            alert("Please Enter the task first!");
        }
    }
    const deltask = (id) => {
        setitems((olditems) => {
            return olditems.filter((arrelem, index) => {
                return index !== id;
            }
            )
        })
    }
    return (
        <>
        <br/>
        <hr/>
        <hr/>
            <div className='page'>
                <div className='header'>
                    <h1 className='dolist'>To-Do APP</h1>
                    <div className='addtask'>
                        <input type="text" className="input" placeholder="Add Your Task....." value={inputList} onChange={itemevent} />
                        <span className="addbtn" onClick={listOfItems}><FaPlus /></span>
                    </div>
                </div>
                <hr className='line' />
                <h2>Tasks</h2>
                <hr className='line'></hr>
                <div class="tasklist">
                    {items.map((itemval, index) => {
                        return (
                            <Tasklist key={index} id={index} onSelect={deltask} text={itemval}></Tasklist>)
                    }
                    )}
                </div>
            </div>
        </>
    )
}