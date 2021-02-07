import { React, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { LocationContext } from '../context/LocationContext';
import { BiSun, BiMoon } from 'react-icons/bi';

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
            <Form className="themeButton" >
                <BiSun />
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    className="themeCheck"
                    onClick={() => changetheme()}
                />
                <BiMoon />
            </Form>
        </div>
    )
}
