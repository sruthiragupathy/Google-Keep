import React,{useDebugValue, useState} from "react";

const colors = [
    {
        id:1,
        lightColor:"#F3F4F6",
        darkColor:"#374151"
    },
    {
        id:2,
        lightColor:"#FEE2E2",
        darkColor:"#B91C1C"
    },
    {
        id:3,
        lightColor:"#FEF3C7",
        darkColor:"#F59E0B"
    },
    {
        id:4,
        lightColor:"#DBEAFE",
        darkColor:"#2563EB"
    },
    {
        id:5,
        lightColor:"#E0E7FF",
        darkColor:"#4338CA"
    }
]


const tagsData = [
    "react",
    "javascript",
    "css",
    "html5",
    "technology",
    "science"
]





const Form = ({notes,setNotes}) => {
    const [note,setNote] = useState({
        titleNote:"",
        noteNote:"",
        colorNote:"",
        tagsNote:[]
    })

    const [show,setShow] = useState ({
        color:false,
        tags:false
    })

    const [tags,setTags] = useState (tagsData.sort())

    const RemoveTag = (e,item) => {
        e.preventDefault();
        setNote({...note,tagsNote:note.tagsNote.filter(i=>i!==item)})
    }

    const openColorPalette = () =>{
        return <div className = "palette">
             {
                 colors.map ((color,index) => {
                     return <div key={index} style={{background:color.darkColor,height:"1rem",width:"1rem",borderRadius:"50%"}}></div>
                 })
             }
        </div>
    }

    const showTags = () => {
        return <ul className = "tagsList">
            <li style={{display:"flex",justifyContent:"flex-end",marginRight:"1rem"}}>
                <button style={{background:"#DC2626",color:"#FFF"}} onClick={()=>setShow({...show,tags:false})}>x</button>
            </li>
            {tags.map((item,index) => {
                return <li key={index}> 
                <span onClick={()=>setNote({...note,tagsNote:[...note.tagsNote,item]})} value={note.tagsNote} className="span">{item}</span>
                <button onClick = {(e)=>RemoveTag(e,item)}>Remove</button>
                </li>
            })
        }

        </ul>
    }
    // console.log(note.titleNote,note.noteNote)
    // console.log(show);
    console.log(tags)
    return (
        
        <form className = "form">
            
            <label htmlFor="title">Title</label>
            <input type="text" value={note.titleNote} onChange = {(e)=>setNote({...note,titleNote:e.target.value})}></input>
            <label htmlFor="note" value={note.noteNote}>Note</label>
            <input type="text" onChange = {(e)=>setNote({...note,noteNote:e.target.value})}></input>
            <label htmlFor="note" value={note.noteNote}>Tags</label>
            <input type="text" onFocus = {()=>{setShow({...show,tags:true})}} value={note.tagsNote}></input>
            {show.tags && showTags()}
            
            <div className = "form-btns">
                
            <button className = "color"
                    style = {show.color?{background:"green",color:"white"}:{}}
                    onClick = {(e)=>{
                        e.preventDefault();
                        setShow({color:!show.color,tags:false})
                    }}>
                        Color
            </button>
                
            <button className = "add-note">
                Add Note
            </button>
            </div>
            {show.color && openColorPalette()}
        </form>
        
        
    )
}

export default Form;