import {useState} from 'react';
import './App.css'
import Navbar from "./public components/Navbar"
import Events from "./public components/Events";
import SignupForm from "./public components/SignupForm";

function App() {
    const [searchTerm, setSearchTerm] = useState("")
    const handleNavbarSearch = (term) => {
        setSearchTerm(term)
    };

    return (
        <>
            <Navbar onSearch={handleNavbarSearch}/>
            <Events searchTerm={searchTerm}/>
            <SignupForm/>
        </>
    )
}

export default App
