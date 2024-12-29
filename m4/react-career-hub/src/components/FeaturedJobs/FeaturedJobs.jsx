import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div className="text-center">
            <h2 className="text-4xl py-8">This is featured jobs: {jobs.length}</h2>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? "hidden" : ""}>
                <button 
                onClick={() => setDataLength(jobs.length)}
                className="btn btn-outline btn-success m-4">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;