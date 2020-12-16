import React from 'react';
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import style from '../style.css';

export default function SearchForm({ params, onParamChange }) {
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
                            onChange={onParamChange}
                            placeholder="Description"
                            type="text"
                            value={params.description} 
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
                            onChange={onParamChange}
                            placeholder="Location"
                            type="text"
                            value={params.location}
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Form.Check
                        className="mb-1"
                        id="full-time"
                        label="Full Time Only"
                        name="full_time"
                        onChange={onParamChange} 
                        value={params.full_time}    
                        type="checkbox"
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit" className="mb-1">
                        Search
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}
