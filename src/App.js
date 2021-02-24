import {useState} from "react";
import Header from "./Components/Header"
import Form from "./Components/Form"
import Tags from "./Components/Tags"
import Notes from "./Components/Notes";
// import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Footer from "./Components/Footer/Footer";

const data = [
  {
  id : 1,
  title : "Declarative",
  notes:"React sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. ",
  color:{
    lightColor:"#FEF3C7",
    darkColor:"#F59E0B"
  },
  tags:["react","html5"],
  pin:false

  },
  {
    id : 2,
    title : "Higher order functions",
    notes:"A function that accepts and/or returns another function is called a higher-order function. Some of those functions include map(), filter(), reduce(), sort()... ",
    color:{

      lightColor:"#DBEAFE",
      darkColor:"#2563EB"
    },
    tags:["javascript"],
    pin:true
  
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

  // console.log(notes)
  return (
    <div className="App">
      <Header/>
      <div className="form-div">
      <Form notes={notes} setNotes={(val)=>setNotes(val)} tags = {tags} setTags = {(val) => setTags(val)}/>
      <Tags tags = {tags} setTags = {(val) => setTags(val)} notes = {notes} setNotes = {(val) => setNotes(val)}/>
      <Notes notes = {notes} setNotes = {(val) => setNotes(val)}/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
