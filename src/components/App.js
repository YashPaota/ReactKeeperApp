import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "../index.css";
import notes from "../Notes";



const App = () => {
    return (
        <>
            <Header />
            {notes.map(noteItem => (
                <Note
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            ))}
            <Footer />
        </>
    );
};
export default App;
