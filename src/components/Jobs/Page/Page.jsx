import React, {useEffect, useState} from 'react'
import Header from "../../Header/Header";
import JobCard from "../Card/JobCard";
import Bar from "../../TagsBar/Bar/Bar";
import "./Page.css";

function Page() {

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

            {jobs !== undefined ? 
            jobs.map((job) => (
                <JobCard 
                    key={job.id}
                    jobInfo={job}
                />
            ))
            :
            null} 
        </div>
    )
}

export default Page
