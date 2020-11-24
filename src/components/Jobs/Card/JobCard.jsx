import React from 'react'
import "./JobCard.css";
import "../JobCardHeader/JobCardHeader";
import JobCardHeader from '../JobCardHeader/JobCardHeader';

function JobCard({logoUrl, companyName, newPost, featuredPost}) {
    return (
        <div className="job-card">
            <img className="job-card__image" 
                src={logoUrl} 
                alt="Company logo" 
            />
            <div className="job-card__description">
                <div className="job-card__description-head">
                    <JobCardHeader 
                        companyName={companyName} 
                        newPost={newPost}
                        featuredPost={featuredPost}
                    />
                </div>
                <div className="job-card__description-job-title">

                </div>
            </div>
            <div className="job-card__tags">

            </div>
        </div>
    )
}

export default JobCard
