import React from 'react'
import "./JobCardFooter.css";

function JobCardFooter({postedAt, contract, location}) {
    return (
        <div className="job-card-footer">
            <h6>{postedAt}</h6>
            <h6>&#183;</h6>
            <h6>{contract}</h6>
            <h6>&#183;</h6>
            <h6>{location}</h6>
        </div>
    )
}

export default JobCardFooter
