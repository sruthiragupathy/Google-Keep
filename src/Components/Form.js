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
        colorNote:{
            lightColor:"#FEE2E2",
            darkColor :"#B91C1C"
        },
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
            {tags.map((item,index) => {
                return <li key={index}> 
                <span onClick={()=>setNote({...note,tagsNote:[...note.tagsNote,item]})} value={note.tagsNote} className="span">{item}</span>
                <button onClick = {(e)=>RemoveTag(e,item)}>Remove</button>
                </li>
            })
        }

        </ul>
    }


    const addNoteHandler = (e) => {
        e.preventDefault();
        setNotes([...notes,{id:2,
            title : note.titleNote,
            notes:note.noteNote,
            color:note.colorNote,
            tags:note.tagsNote}])

        setNote({
            titleNote:"",
            noteNote:"",
            colorNote:"#B91C1C",
            tagsNote:[]
        })
    }
    // console.log(note.titleNote,note.noteNote)
    // console.log(show);
    // console.log(note.note)
    // console.log(tags)
    console.log(note)
    return (
        
        <form className = "form">
            
            <label htmlFor="title">Title</label>
            <input type="text" value={note.titleNote} onChange = {(e)=>setNote({...note,titleNote:e.target.value})}></input>
            <label htmlFor="note" value={note.noteNote}>Note</label>
            <textarea type="text" onChange = {(e)=>setNote({...note,noteNote:e.target.value})} style = {{height:"7rem"}}></textarea>
            <label htmlFor="note" value={note.noteNote}>Tags</label>
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