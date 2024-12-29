import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../utility/localstorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
    }

    return (
        <div>
            {/* <h2>Job Details of: {id}</h2> */}
            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3 ">
                    <p><span className="font-semibold">Job Description: </span>{job.job_description}</p>
                    <p><span className="font-semibold">Job Responsibility: </span></p>
                    <p><span className="font-semibold">Educational Requirements: </span></p>
                    <p><span className="font-semibold">Experiences: </span></p>
                </div>
                <div className="">
                    <h3 className="border-b-2">Job Details </h3>
                    <p><span className="font-semibold">Salary: {salary}</span></p>
                    <p><span className="font-semibold">Job Title: </span>{job_title}</p>
                    <h3 className="border-b-2">Contact Information</h3>
                    <p><span className="font-semibold">Phone: </span></p>
                    <p><span className="font-semibold">Email: </span></p>
                    <p><span className="font-semibold">Address: </span></p>
                    <button onClick={handleApplyJob} className="btn btn-info btn-outline w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;