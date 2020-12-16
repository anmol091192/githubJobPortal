import React from 'react';
import { useLocation } from 'react-router';

export default function ApplyJob() {
    const location = useLocation();
    
    return (
        <div>
            Job details of {location.state.company}
        </div>
    )
}
