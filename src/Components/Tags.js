import React,{useState} from "react";


const Tags = ({tags,setTags}) => {
    const [show,setShow] = useState(true)
    const [newTag, setNewTag] = useState("")

    const showTags = () => {
        return <div className = "bordered-container">
        <form className = "tag-form">
            <input placeholder = "Enter a tag name" className = "tag-input" value={newTag} onChange = {(e)=>setNewTag(e.target.value)}></input>
            <button className = "add-tag" onClick = {(e) => {
                e.preventDefault();
                setTags([...tags,newTag]);
                setNewTag("");
            }
            }>Add Tag</button>
        </form>   
        <div className = "tags-flex">
            {
                tags.sort().map((tag,index) => {
                    return <button key={index} className = "tag-btn">{tag}</button>
                })

            }
            
            
        </div>       
        </div>
    }

    

    return <div className = "tags-container">
        <button className="add-note primary-btn" onClick = {() => {setShow((prev)=>!prev)}}>{show?"Hide":"Show"} Tags</button>
        {
            show && showTags()
        }
    </div>
}

export default Tags;