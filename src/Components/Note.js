import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack} from '@fortawesome/free-solid-svg-icons'

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


const Note = ({item,notesData,setNotes}) => {

    const {id,title,notes,color,tags,pin} = item

    const colorHandler =(item) =>{
       setNotes(prev => 
           prev.map(note => {
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

    const openColorPalette = () =>{
        return <div className = "palette">
             {
                 colors.map ((item,index) => {
                     if (item.darkColor === color.darkColor){
                     return <div style={{border:"3px solid black",borderRadius:"50%"}}>
                         <div key={index} style={{background:item.darkColor,margin:"0.15rem"}} className="colorList" onClick = {() => setNotes({...notesData,color:{lightColor:item.lightColor,darkColor:item.dar}})}></div>
                        </div>

                     }
                     return <div key={index} style={{background:item.darkColor}} className="colorList" onClick = {() => colorHandler(item)}></div>
                 })
             }
        </div>
    }
    
    return <div className = "card" style = {{background:color.lightColor,border:`2px solid ${color.darkColor}`}}>
        <div style = {{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
        <h2>{item.title}</h2>
        {
    
            pin && 
            
            <FontAwesomeIcon icon={faThumbtack} style = {{color:color.darkColor}}/>
            
        }
        </div>
        <p>{item.notes}</p>
        <div>
        {
            tags.map ((tag,index) => {
                return <span style={{display:"inline"}}>#{tag} </span>
            })
        }
        </div>
        <div style = {{width:"100%",display:"flex" , justifyContent:"space-between"}}>
            <div>
                {openColorPalette()}
            </div>
            {
                pin ? <button className = "pin-btn" style = {{color:color.darkColor,border:`2px solid ${color.darkColor}`}}>Unpin</button> : <button>Pin</button>
            }
            <button className = "pinned">Delete</button>
        </div>

    </div>
}

export default Note;