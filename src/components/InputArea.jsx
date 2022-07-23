import React, { useState } from 'react';
import Note from './Note';
import AddTaskSharpIcon from '@mui/icons-material/AddTaskSharp';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea() {
    const [note,setNote] = useState({
        title:"",
        content:""
    })
    const [notes,setNotes] = useState([]);
    const [isExpanded,setIsExpanded] = useState(false);

    function handleEvent(event){
        setNotes([...notes,note]);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();

    }
    function handleContentChange(event){
        const newValue = event.target.value;
        const name = event.target.name;
        setNote({
            ...note,
            [name]:newValue
            
        })
    }
    function deleteNote(id){
            setNotes(pValue =>{
                return pValue.filter((item,index)=>{
                    return index!==id
                })
            })
        }
    return (
        <div>
            <form className='create-note'>
                {isExpanded && <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleContentChange}/>}
                {isExpanded ? <textarea onChange={handleContentChange} name="content" placeholder="Take a note..." rows="3" value={note.content}  />:<textarea onChange={handleContentChange} name="content" placeholder="Take a note..." rows="1" value={note.content}  onClick={()=> setIsExpanded(true)} />}
                <Zoom in={isExpanded}><Fab onClick={handleEvent}><AddTaskSharpIcon /></Fab></Zoom>
            </form>
            {notes.map((note,index)=>{
                return <Note 
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
                />
            })}
        </div>
    );
}

export default CreateArea;
