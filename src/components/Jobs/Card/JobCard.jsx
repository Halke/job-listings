import React from 'react'
import "./JobCard.css";
import "../JobCardHeader/JobCardHeader";
import JobCardHeader from '../JobCardHeader/JobCardHeader';
import JobCardFooter from "../JobCardFooter/JobCardFooter";
import Tag from "../../TagsBar/Tag/Tag";
import Image from "../Image/Image";

function JobCard({jobInfo}) {

    const {
        company, 
        new: isNew, 
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools} = jobInfo;
    
    
    const tags = [role, level, ...languages, ...tools];

    const featuredPostStyle = jobInfo.featured ?
    {
        borderLeft: "5px solid var(--primary-dark_red)"
    }
    :
    null;

    return (
        <div className="job-card" style={featuredPostStyle}>
            <div className="job-card__description">
                {/* <img className="job-card__description-image" 
                    src={require("../../../images/" + logoSource)} 
                    alt="Company logo" 
                /> */}
                <Image className="job-card__description-image" companyName={company} />
                <div className="job-card__description-info">
                    <JobCardHeader 
                        companyName={company} 
                        newPost={isNew}
                        featuredPost={featured}
                    />
                    <div className="job-card__description-job-title-sect">
                        <h2 className="job-card__description-job-title">
                            {position}
                        </h2>
                    </div>
                    <JobCardFooter 
                        postedAt={postedAt}
                        contract={contract}
                        location={location}
                    />
                </div>
            </div>
            <hr className="job-card__horizontal-line" />
            <div className="job-card__tags">
                {tags.map((tag, index) => (
                    <Tag
                        className="job-card__tags-tag"
                        isDisabled={false}
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
