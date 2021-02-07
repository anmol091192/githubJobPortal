import React, { useState } from 'react';
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import { MdSearch, MdLocationOn } from 'react-icons/md';
import useGetLocation from '../hooks/useGetLocation';

const SearchForm = ({ setParams }) => {
    const latlong = useGetLocation();
    const [description, setDescription] = useState('');
    const [isFullTime, setIsFullTime] = useState(false);
    const [location, setLocation] = useState('');

    const handleSearch = (event) => {
        let lat, long;
        if(location !== null){
            lat=null;
            long=null;
        }else if(latlong.cordinates) {
            lat = latlong.cordinates.lat;
            long = latlong.cordinates.lng;
        }else {
            lat=null;
            long=null;
        }

        setParams({
            description,
            full_time: isFullTime,
            location,
            lat,
            long,
        });
        event.preventDefault();
    }

    return (
        <Form className="mb-4 formWrapper">
            <Form.Row className="formRowWrapper">
                <Col xs={12} md={4}>
                    <InputGroup className="description">
                        <MdSearch className="icon" />
                        <Form.Control 
                            id="inlineFormInputGroupDescription" 
                            className="inputField"
                            name="description" 
                            onChange={(event) => setDescription(event.target.value)}
                            placeholder="Filter by title, companies, expertise..."
                            type="text"
                            value={description} 
                        />
                    </InputGroup>
                </Col>
                <Col xs={12} md={4}>
                    <InputGroup className="location">
                        <MdLocationOn className="icon"/>
                        <Form.Control 
                            id="inlineFormInputGroupLocation" 
                            className="inputField"
                            name="location"
                            onChange={(event) => setLocation(event.target.value)}
                            placeholder="Location"
                            type="text"
                            value={location}
                        />
                    </InputGroup>
                </Col>
                <Col xs={12} md={2} style={{fontSize:"8px",justifyContent:"center"}}>
                    <Form.Check
                        custom
                        inline
                        label="Full time Only"
                        type="checkbox"
                        id="checkbox-fulltime"
                        onClick={() => setIsFullTime(!isFullTime)}
                    />
                </Col>
                <Col xs={12} md={2}>
                    <Button
                        type="submit"
                        className="buttonClass"
                        onClick={(event) => handleSearch(event)}
                    >
                        Search
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
};

export default SearchForm;
