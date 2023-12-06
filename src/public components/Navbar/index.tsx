import {SetStateAction, useState} from "react";

const Navbar = ({onSearch}) => {
    const [search, setSearch] = useState("");

    const handleInputChange = (evt: { target: { value: SetStateAction<string>; }; }) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt: { key: string; }) => {
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
