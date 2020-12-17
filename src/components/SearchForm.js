import React, { useState } from 'react';
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import style from '../style.css';

export default function SearchForm({
    setPage,
    setParams,
}) {
    const [description, setDescription] = useState('');
    const [isFullTime, setIsFullTime] = useState(false);
    const [location, setLocation] = useState('');

    const handleSearch = (event) => {
        setPage(1);
        setParams({
            description,
            full_time: isFullTime,
            location,
        });
        event.preventDefault();
    }

    return (
        <Form className="mb-4 formWrapper">
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroupDescription" srOnly>
                        Description
                    </Form.Label>
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                            id="inlineFormInputGroupDescription" 
                            name="description" 
                            onChange={(event) => setDescription(event.target.value)}
                            placeholder="Description"
                            type="text"
                            value={description} 
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroupLocation" srOnly>
                        Location
                    </Form.Label>
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                            id="inlineFormInputGroupLocation" 
                            name="location"
                            onChange={(event) => setLocation(event.target.value)}
                            placeholder="Location"
                            type="text"
                            value={location}
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Form.Check
                        className="mb-1"
                        id="full-time"
                        label="Full Time Only"
                        name="full_time"
                        onChange={() => setIsFullTime(!isFullTime)} 
                        value={isFullTime}    
                        type="checkbox"
                    />
                </Col>
                <Col xs="auto">
                    <Button
                        type="submit"
                        className="mb-1"
                        onClick={(event) => handleSearch(event)}
                    >
                        Search
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}
