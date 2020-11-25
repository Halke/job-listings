import React from 'react'
import "./JobCard.css";
import "../JobCardHeader/JobCardHeader";
import JobCardHeader from '../JobCardHeader/JobCardHeader';
import JobCardFooter from "../JobCardFooter/JobCardFooter";
import Tag from "../../TagsBar/Tag/Tag";
import Image from "../Image/Image";
//import logo from "../../../images/photosnap.svg";

function JobCard({jobInfo}) {
   
    console.log(jobInfo);

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
                <Image companyName={company} />
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
                        postedAt="5D ago"
                        contract="Part time"
                        location="Europe"
                    />
                </div>
            </div>
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
