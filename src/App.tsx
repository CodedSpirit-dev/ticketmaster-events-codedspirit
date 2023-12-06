import {SetStateAction, useState} from 'react';
import './App.css'
import Navbar from "./public components/Navbar"
import Events from "./public components/Events";

function App() {
    const [searchTerm, setSearchTerm] = useState("")
    const handleNavbarSearch = (term) => {
        setSearchTerm(term)
    };

    return (
        <>
            <Navbar onSearch={handleNavbarSearch}/>
            <Events searchTerm={searchTerm}/>
        </>
    )
}

export default App
