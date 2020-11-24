import React from 'react'
import "./JobCard.css";
import "../JobCardHeader/JobCardHeader";
import JobCardHeader from '../JobCardHeader/JobCardHeader';
import JobCardFooter from "../JobCardFooter/JobCardFooter";

function JobCard({logoUrl, companyName, newPost, featuredPost, position}) {
    return (
        <div className="job-card">
            <img className="job-card__image" 
                src={logoUrl} 
                alt="Company logo" 
            />
            <div className="job-card__description">
                <JobCardHeader 
                    companyName={companyName} 
                    newPost={newPost}
                    featuredPost={featuredPost}
                />
                <div className="job-card__description-job-title-sect">
                    <h2 className="job-card__description-job-title">
                        {position}
                    </h2>
                </div>
                <JobCardFooter />
            </div>
            <div className="job-card__tags">

            </div>
        </div>
    )
}

export default JobCard
