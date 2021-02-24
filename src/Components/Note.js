import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack} from '@fortawesome/free-solid-svg-icons'

import {colors} from "./variables/color"


const Note = ({item,notesData,setNotes}) => {
    

    const {id,title,notes,color,tags,pin} = item

    const [inEditMode,setInEditMode] = useState(false);
    const [editNote , setEditNote] = useState(notes);
    


    const colorHandler =(item) =>{
       setNotes(prev => 
           prev.map((note,index) => {
            if(note.id === id){
                return {...note,color:{
                    lightColor : item.lightColor,
                    darkColor : item.darkColor

                }}
            }
            return note
        }
            )
       )
        
    }

    const pinHandler = () => {
        setNotes(prev => 
            prev.map ((note,index) => {
                if(note.id ===id){
                    return {...note,pin:!pin}
                }
                return note
            })
        )
    }

    const deleteHandler = () => {
        setNotes(prev => 
            prev.filter(note=>{
                return note.id!==id
            }))
    }

    const editHandler = (e) => {
       e.preventDefault();
       setInEditMode(prev=>!prev);
       setNotes(prev => prev.map ((note,index)=>{
            if(note.id === id){
                return {...item,notes:editNote}
            }
            return note
       }))

    }

    const openColorPalette = () =>{
        return <div className = "palette">
             {
                 colors.map ((item,index) => {
                     if (item.darkColor === color.darkColor){
                     return <div style={{border:"3px solid black",borderRadius:"50%"}} key={index} >
                         <div style={{background:item.darkColor,margin:"0.15rem"}} className="colorList" onClick = {() => setNotes({...notesData,color:{lightColor:item.lightColor,darkColor:item.dar}})}></div>
                        </div>

                     }
                     return <div key={index} style={{background:item.darkColor}} className="colorList" onClick = {() => colorHandler(item)}></div>
                 })
             }
        </div>
    }
    
    return <div className = "card" style = {{background:color.lightColor,border:`2px solid ${color.darkColor}`}}>
        <div style = {{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
        <h3 style = {{width:"50%",textAlign:"left"}}>{item.title}</h3>
        <button style = {{background : color.darkColor, color:"white" , padding:"0.5rem"}} onClick={editHandler}>{inEditMode?"Update":"Edit"}</button>
        {
    
            pin && 
            
            <FontAwesomeIcon icon={faThumbtack} style = {{color:color.darkColor}} size = "lg"/>
            
        }
        </div>
        {inEditMode ? <textarea className="textarea" value = {editNote} onChange = {(e)=>setEditNote(e.target.value)}></textarea> : <p onClick = {() => setInEditMode(prev=>!prev)}>{item.notes}</p> }
        <div style = {{marginBottom:"0.5rem"}}>
        {
            tags.map ((tag,index) => {
                return <span key={index} style={{display:"inline"}}>#{tag} </span>
            })
        }
        </div>
        <div style = {{width:"100%",display:"flex" , justifyContent:"space-between"}}>
            <div>
                {openColorPalette()}
            </div>
            {
                pin ? <button className = "pin-btn" style = {{color:color.darkColor,border:`2px solid ${color.darkColor}`}} onClick = {pinHandler}>Unpin</button> : <button style = {{color:color.darkColor,border:`2px solid ${color.darkColor}`}} className = "pin-btn" onClick = {pinHandler}>Pin</button>
            }
            <button className = "pinned" onClick = {deleteHandler}>Delete</button>
        </div>

    </div>
}

export default Note;