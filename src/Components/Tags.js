import React,{useState} from "react";


const Tags = ({tags,setTags,notes,setNotes}) => {
    const [show,setShow] = useState(true)
    const [newTag, setNewTag] = useState("")

    const showTags = () => {
        return <div className = "bordered-container">
        <form className = "tag-form">
            <input placeholder = "Enter a tag name" className = "tag-input" value={newTag} onChange = {(e)=>setNewTag(e.target.value)}></input>
            <button className = "add-tag" onClick = {(e) => {
                e.preventDefault();
                setTags([...tags,newTag.toLowerCase()]);
                setNewTag("");
            }
            }>Add Tag</button>
        </form>   
        <div className = "tags-flex">
            {
                tags.sort().map((tag,index) => {
                    return <button key={index} className = "tag-btn" onClick = {(e) => tagClickHandler(e,tag)}>#{tag}</button>
                })

            }
            
            
        </div>       
        </div>
    }

    
    const tagClickHandler = (e,tag) => {
        e.preventDefault();
        // console.log(tag)

        const arr  = notes.filter (note => {
            // console.log(note.tags)
            return note.tags.includes(`${tag}`)
        })

        const newArr = notes.filter (note => {
            // console.log(note.tags)
            return !note.tags.includes(`${tag}`)
        })

        setNotes([...arr,...newArr])
       
        // console.log(arr);
    }

    return <div className = "tags-container">
        <button className="add-note primary-btn" onClick = {() => {setShow((prev)=>!prev)}}>{show?"Hide":"Show"} Tags</button>
        {
            show && showTags()
        }
    </div>
}

export default Tags;