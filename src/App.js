import {useState} from "react";
import Header from "./Components/Header"
import Form from "./Components/Form"
import Tags from "./Components/Tags"
import Notes from "./Components/Notes";
// import { v4 as uuidv4 } from 'uuid';
import './App.css';

const data = [
  {
  id : 1,
  title : "Declarative",
  notes:"React sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. ",
  color:{
    lightColor:"#FEF3C7",
    darkColor:"#F59E0B"
  },
  tags:["React","html5"],
  pin:true

  },
  {
    id : 2,
    title : "Declarative",
    notes:"React sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. ",
    color:{

      lightColor:"#DBEAFE",
      darkColor:"#2563EB"
    },
    tags:["React","html5"],
    pin:true
  
    },
    {
      id : 3,
      title : "Declarative",
      notes:"React sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. ",
      color:{
        
        lightColor:"#E0E7FF",
        darkColor:"#4338CA"
      },
      tags:["React","html5"],
      pin:false
    
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


function App() {
  const [notes,setNotes] = useState(data)
  const [tags,setTags] = useState(tagsData);

  console.log(notes)
  return (
    <div className="App">
      <Header/>
      <div className="form-div">
      <Form notes={notes} setNotes={(val)=>setNotes(val)}/>
      <Tags tags = {tags} setTags = {(val) => setTags(val)}/>
      <Notes notes = {notes} setNotes = {(val) => setNotes(val)}/>
      </div>
    </div>
  );
}

export default App;
