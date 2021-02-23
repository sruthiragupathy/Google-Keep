import React,{useState} from "react";
import Note from "./Note"

const Notes = ({notes,setNotes}) => {
    console.log(notes)
    return <div className = "container">
        <span className = "add-note primary-btn">
            Notes
        </span>
        <div className = "notes-container">
            <span className = "add-note primary-btn">Pinned Notes</span>
            {console.log("inside notes")}
            <div className = "allnotes">

            
            {
                
                notes.filter(item=>item.pin).map(item => {
                    return <Note item = {item} notes = {notes} setNotes = {setNotes}/>
                })
            }
        </div>
        </div>

    </div>
}


export default Notes;