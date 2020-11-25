import React from 'react'
import "./JobCard.css";
import "../JobCardHeader/JobCardHeader";
import JobCardHeader from '../JobCardHeader/JobCardHeader';
import JobCardFooter from "../JobCardFooter/JobCardFooter";
import Tag from "../../TagsBar/Tag/Tag";

function JobCard({logoUrl, companyName, newPost, featuredPost, position, tags}) {
    return (
        <div className="job-card">
            <div className="job-card__description">
                <img className="job-card__description-image" 
                    src={logoUrl} 
                    alt="Company logo" 
                />
                <div className="job-card__description-info">
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
                    <JobCardFooter 
                        postedAt="5 Days ago"
                        contract="Part time"
                        location="Europe"
                    />
                </div>
            </div>
            <div className="job-card__tags">
                {tags.map((tag, index) => (
                    <Tag 
                        className="job-card__tags-tag"
                        key={index} title={tag} 
                        removeable={false}
                    />
                    )
                )}
            </div>
        </div>
    )
}

export default JobCard
