import PropTypes from 'prop-types';
import JobCard from './JobCard';
import { Link } from 'react-router-dom';

const JobList = ({ jobs }) => {
  if (!Array.isArray(jobs)) {
    console.log("jobs is not an array");
    return <div className="text-center text-lg text-gray-600 mt-10">Loading jobs...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {jobs.map((job) => {
          return (
            <Link to={`/job/${job.id}`} key={job.id} className="focus:outline-none">
              <div className="transform transition duration-300 hover:scale-105" style={{ width: '100%', height: '100%' }}>
                <JobCard job={job} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default JobList;
