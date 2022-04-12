import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes.js";

function notesIndex(){
    return (
    <Note />);
}

function App(){
    return <div>
        <Header />
        {notes.map(notesIndex)}
        <Footer />
    </div>
    
}

export default App;