import {useState} from "react";
import Header from "./Components/Header"
import Form from "./Components/Form"
// import { v4 as uuidv4 } from 'uuid';
import './App.css';

const data = [
  {
  id : 1,
  title : "lorem ipsum",
  notes:"t sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. ",
  color:"",
  tags:[]

  }

]

function App() {
  const [notes,setNotes] = useState([data])
  return (
    <div className="App">
      <Header/>
      <div className="form-div">
      <Form notes={notes} setNotes={(val)=>setNotes(val)}/>
      </div>
    </div>
  );
}

export default App;
