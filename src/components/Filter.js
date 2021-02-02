import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function Filter() {
    const [ select, setSelect ] = useState("Full time");
    

    function handleSelect(arg) {
        setSelect(arg);
    }


    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {select}
                </Dropdown.Toggle>
            
                <Dropdown.Menu>
                <Dropdown.Item onSelect={() => handleSelect("Full Time")} >Full time</Dropdown.Item>
                <Dropdown.Item onSelect={() => handleSelect("Part Time")} >Part Time</Dropdown.Item>
                <Dropdown.Item onSelect={() => handleSelect("Contract")} >Contract</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
