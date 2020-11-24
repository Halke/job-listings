import React from 'react'
import "./JobCardHeader.css";

function JobCardHeader({companyName, newPost, featuredPost}) {
    return (
        <div className="job-card-header">
            <h4 className="job-card__description-head-company">
                {companyName}
            </h4>
            {newPost ? 
                <h4 className="job-card__description-head-new">
                    NEW
                </h4> 
                : 
                null
            }
            {featuredPost ? 
                <h4 className="job-card__description-head-featured">
                    FEATURED
                </h4> 
                : 
                null
            }
        </div>
    )
}

export default JobCardHeader
