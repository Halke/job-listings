import React, {useEffect, useState} from 'react'
import Header from "../../Header/Header";
import JobCard from "../Card/JobCard";
import Bar from "../../TagsBar/Bar/Bar";
import "./Page.css";

function Page() {

    //const jsonFilePath = "data.json";

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("data.json", {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
           }
        })
        .then(res => res.json())
        .then(data => setJobs(data))
        .catch(err => console.log("ERROR: ", err))
    }, []);

    return (
        <div className="page">
            <Header />
            <div className="page__bar-section">
                <Bar />
            </div>

            {jobs.map((job, index) => (
                <JobCard 
                    key={index}
                    jobInfo={job}
                />
            ))}

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
