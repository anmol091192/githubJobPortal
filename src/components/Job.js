import React, { useState } from 'react';
import { Badge, Card, Button, Collapse, Image } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";
import style from '../style.css';

export default function Job({ job }) {
    const [ open, setOpen ] = useState(false);
    const [state, setState] = useState(job);


    return (
        <Card className="mb-3 cardWrapper">
            <Card.Header>
                <Image className="d-none d-md-block" height="50" width="70" alt={job.company} src={job.company_logo} />
            </Card.Header>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title className="cardTitle">
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">
                            {job.type}
                        </Badge>
                        <Badge variant="secondary">{job.location}</Badge>
                    </div>
                </div>
                <Card.Text>
                    <Link
                        className="btn btn-primary"
                        to={{
                            pathname: "/applyjob",
                            state
                        }}
                        >
                        View Job
                    </Link>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkdown source={job.description} />
                        <ReactMarkdown source={job.how_to_apply} />
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}
