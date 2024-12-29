import { Link } from "react-router-dom";
import location1 from "../../../public/assets/icons/Location.png";
import dollar from "../../../public/assets/icons/money.png";

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl border p-2">
            <figure>
                <img
                    src={logo}
                    alt={company_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-2">
                    <button className="btn btn-outline btn-secondary">{remote_or_onsite}</button>
                    <button className="btn btn-outline btn-secondary">{job_type}</button>
                </div>
                <div className="flex gap-3">
                    <div className="flex justify-start items-center">
                        <img className="mr-1" src={location1} alt='profile' ></img>
                        <h2>{location}</h2>
                    </div>
                    <div className="flex justify-start items-center">
                        <img className="mr-1" src={dollar} alt='profile' ></img>
                        <h2>{salary}</h2>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;