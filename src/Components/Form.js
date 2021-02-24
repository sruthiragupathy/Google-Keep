import React,{useDebugValue, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack} from '@fortawesome/free-solid-svg-icons'

import {colors} from "./variables/color"


const Form = ({notes,setNotes,tags,setTags}) => {
    const [note,setNote] = useState({
        titleNote:"",
        noteNote:"",
        colorNote:{
            lightColor:"#FEF3C7",
            darkColor:"#F59E0B"
        },
        tagsNote:[],
        pinNote:false
    })

    const [show,setShow] = useState ({
        color:false,
        tags:false
    })

    const [error,setError] = useState("");

    // const [tags,setTags] = useState (tagsData.sort())

    const RemoveTag = (e,item) => {
        e.preventDefault();
        setNote({...note,tagsNote:note.tagsNote.filter(i=>i!==item)})
    }

    const openColorPalette = () =>{
        return <div className = "palette">
             {
                 colors.map ((color,index) => {
                     if (color.darkColor === note.colorNote.darkColor){
                     return <div style={{border:"3px solid black",borderRadius:"50%"}}>
                         <div key={index} style={{background:color.darkColor,margin:"0.15rem"}} className="colorList" onClick = {()=>setNote({...note,colorNote:{lightColor:color.lightColor,darkColor:color.darkColor}})}></div>
                        </div>

                     }
                     return <div key={index} style={{background:color.darkColor}} className="colorList" onClick = {()=>setNote({...note,colorNote:{lightColor:color.lightColor,darkColor:color.darkColor}})}></div>
                 })
             }
        </div>
    }

    const showTags = () => {
        return <ul className = "tagsList">
            <li style={{display:"flex",justifyContent:"flex-end",marginRight:"1rem"}}>
                <button style={{background:"#DC2626",color:"#FFF"}} onClick={()=>setShow({...show,tags:false})}>x</button>
            </li>
            {tags.sort().map((item,index) => {
                return <li key={index} className = "tagDropdown"> 
                <span onClick={()=>setNote({...note,tagsNote:[...note.tagsNote,item]})} value={note.tagsNote} className="span">{item}</span>
                <button onClick = {(e)=>RemoveTag(e,item)}>Remove</button>
                </li>
            })
        }

        </ul>
    }


    const addNoteHandler = (e) => {
        e.preventDefault();

        if(note.titleNote === ""){
            setError("Title Field is Empty")
        }
        else if(note.noteNote === ""){
            setError("Note Field is Empty")
        }
        else{
        setNotes([{id:uuidv4(),
            title : note.titleNote,
            notes:note.noteNote,
            color:note.colorNote,
            tags:note.tagsNote,
            pin:note.pinNote},...notes])

        setNote({
            titleNote:"",
            noteNote:"",
            colorNote: {
                lightColor:"#FEF3C7",
                darkColor:"#F59E0B"
            },
            tagsNote:[]
        })

        setError("")
    }
    }

    function getBorderColor() {
        if(note.pinNote){
            return "#DC2626"
        }
        return "#6B7280"

    }
    // console.log(note.titleNote,note.noteNote)
    // console.log(show);
    // console.log(note.note)
    // console.log(tags)
    // console.log(note)
    return (
        
        <form className = "form">
            {error && 
            <div className="error">
            <p style = {{marginBlockStart:0,marginBlockEnd:0}}>{error}</p>
            <button className = "x" onClick = {(e) => {
                e.preventDefault();
                setError("")
            }}>x</button>
            </div>
            }
            <div className = "pin-title">
            <label htmlFor="title" style = {{marginBottom:0}}>Title</label>
            {/* <button  className = "pin-btn" onClick = {(e)=>{
                e.preventDefault();
                setNote({...note,pinNote:!note.pinNote})
            }}>{note.pinNote?"Unpin":"Pin"}</button> */}
            <div className = "thumbtack"  onClick = {()=>{
               setNote({...note,pinNote:!note.pinNote})
           }} 
           style = {{border:`1px solid ${getBorderColor()}`}}>
             <FontAwesomeIcon icon={faThumbtack} style = {{color:getBorderColor()}} size = {note.pinNote?"lg":""}/> 
            </div>
            </div>
            <input type="text" value={note.titleNote} onChange = {(e)=>setNote({...note,titleNote:e.target.value})}></input>
            <label htmlFor="note">Note</label>
            <textarea type="text" value = {note.noteNote} onChange = {(e)=>setNote({...note,noteNote:e.target.value})} style = {{height:"7rem"}} ></textarea>
            <label htmlFor="note">Tags</label>
            <input type="text" onFocus = {()=>{setShow({...show,tags:true})}} value={note.tagsNote}></input>
            {show.tags && showTags()}
            
            <div className = "form-btns">
            {/* <div style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>   
            <span className = "color"
                    style = {show.color?{background:"green",color:"white"}:{}}
                    >
                        Color
            </span>
            <span className = "currentColor" style={{background:note.colorNote,cursor:"pointer"}} onClick = {(e)=>{
                        e.preventDefault();
                        setShow({color:!show.color,tags:false})
                    }}></span>
            </div> */}
            {openColorPalette()}

                
            <button className = "add-note" onClick = {addNoteHandler}>
                Add Note
            </button>
            </div>
            
        </form>
        
        
    )
}

export default Form;