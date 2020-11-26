import React, {useEffect, useState, useContext} from 'react'
import Header from "../../Header/Header";
import JobCard from "../Card/JobCard";
import Bar from "../../TagsBar/Bar/Bar";
import TagsContext from "../../context/TagsContext";
import "./Page.css";

function Page() {

    const context = useContext(TagsContext);

    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

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

            {(jobs !== undefined && filteredJobs.length === 0) ? 
            jobs.map((job) => (
                <JobCard 
                    key={job.id}
                    jobInfo={job}
                />
            ))
            :
            filteredJobs.map((job) => (
                <JobCard 
                    key={job.id}
                    jobInfo={job}
                />
            ))} 
        </div>
    )
}

export default Page
