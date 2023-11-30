import { useState } from "react";
import { IconButton } from '@chakra-ui/react';
import { BiSolidEdit, BiSolidXSquare, BiTrash, BiSolidCheckSquare  } from "react-icons/bi";

export function Task (props){
    const { currentTask, currentDescription, currentId, onHandleEdit, onHandleDeleteTask } = props;
    const [editing, setEditing] = useState(false);
    const [displayedTask, setDisplayedTask] = useState(currentTask);
    const [displayedDescription, setDisplayedDescription] = useState(currentDescription);

    let viewMode= {};
    let editMode= {};

    if (editing){
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    return (
    <div className="task">
        <div>
            <input type="radio" />
            <label htmlFor="" style={viewMode}>{ currentTask } </label>
            <input type="text" value={displayedTask} style={editMode} onChange={(e) => {
                setDisplayedTask(e.target.value);
            }}/>
            <IconButton colorScheme="orange" icon={<BiSolidEdit />} onClick={() =>{
                setEditing(true);
            }} style={viewMode}/>
            <IconButton colorScheme="orange" icon={<BiSolidCheckSquare />} onClick={() => {
                onHandleEdit(currentId, displayedTask, displayedDescription);
                setEditing(false);
            }} style={editMode}/>
            <IconButton colorScheme="orange" icon={<BiSolidXSquare />} onClick={() => {
                setEditing(false);
                setDisplayedTask(currentTask);
                setDisplayedDescription(currentDescription);
            }} style={editMode}/>
            <IconButton colorScheme="orange" icon={<BiTrash />} onClick={() =>{
                onHandleDeleteTask(currentId);
            }} style={viewMode}/>
            {/* <button onClick={() =>{
                setEditing(true);
            }} style={viewMode}>✏️</button>
            <button onClick={() => {
                onHandleEdit(currentId, displayedTask, displayedDescription);
                setEditing(false);
            }} style={editMode}>✔️</button> */}
            {/* <button onClick={() => {
                setEditing(false);
                setDisplayedTask(currentTask);
                setDisplayedDescription(currentDescription);
            }} style={editMode}>✖️</button>
            <button onClick={() =>{
                onHandleDeleteTask(currentId);
            }} style={viewMode}>🗑️</button> */}
        </div>
        <p style={viewMode}>{ currentDescription }</p>
        <input type="text" value={displayedDescription} style={editMode} onChange={(e) => {
            setDisplayedDescription(e.target.value)
        }}/>
    </div>
    );
};