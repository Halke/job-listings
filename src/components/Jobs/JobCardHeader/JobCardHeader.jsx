import React from 'react'
import "./JobCardHeader.css";

function JobCardHeader({companyName, newPost, featuredPost}) {
    return (
        <div className="job-card-header">
            <h5 className="job-card__description-head-company">
                {companyName}
            </h5>
            {newPost ? 
                <h5 className="job-card__description-head-new">
                    NEW!
                </h5> 
                : 
                null
            }
            {featuredPost ? 
                <h5 className="job-card__description-head-featured">
                    FEATURED
                </h5> 
                : 
                null
            }
        </div>
    )
}

export default JobCardHeader
