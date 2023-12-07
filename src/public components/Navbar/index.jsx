import { useState, useEffect } from "react";

const Navbar = ({onSearch}) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log("1010 effecto");
    }, [search, onSearch]);

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === "Enter") {
            onSearch(search);
        } 
    };

    return (
        <div>
            <p>Eventos</p>
            <input type="text" placeholder="Buscar eventos"
                   onChange={handleInputChange}
                   onKeyDown={handleInputKeyDown}
                   value={search}
            />
        </div>
    );
};

export default Navbar;
