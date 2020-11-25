import React from 'react'
import Header from "../../Header/Header";
import JobCard from "../Card/JobCard";
import Bar from "../../TagsBar/Bar/Bar";
import "./Page.css";

function Page() {
    return (
        <div className="page">
            <Header />
            <div className="page__bar-section">
                <Bar />
            </div>
            <JobCard 
                companyName="Photosnap"
                newPost={true}
                featuredPost={true}
                position="Senior Frontend Developer"
                tags={["Senior", "Frontend", "HTML", "CSS", "JavaScript"]}
            />
            <JobCard 
                companyName="Insure"
                newPost={true}
                featuredPost={false}
                position="Senior Frontend Developer"
                tags={["Senior", "Frontend", "HTML", "CSS", "JavaScript"]}
            />
        </div>
    )
}

export default Page
