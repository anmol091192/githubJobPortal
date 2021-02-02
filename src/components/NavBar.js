import { React, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { LocationContext } from '../context/LocationContext';

export default function NavBar() {
    const data = useContext(LocationContext);

    function changetheme(){
       
        if(data.theme.main === 'dark'){
            data.setTheme({main:'light'});
        }else {
            data.setTheme({main:'dark'});
        }
    }

    return (
        <div className="container-fluid header">
            <h1 className="mb-4">devjobs</h1>
            <Button className="themeButton" onClick={() => changetheme()}> Toggle Theme </Button>
        </div>
    )
}
