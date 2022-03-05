import React from 'react'

import { FaTrashAlt } from "react-icons/fa";

const Tasklist = (props) => {
    return (
        <>
            <div class="task">
                <div className="donebtn"><i className="fa-solid fa-circle-check"></i></div>
                <div className="taskcontent">{props.text}</div>
                <button className="delbtn" onClick={() => {
                    props.onSelect(props.id)
                }}>  <FaTrashAlt /> </button>
            </div>
        </>
    )
}
export default Tasklist;

