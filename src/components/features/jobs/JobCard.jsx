// src/components/features/jobs/JobCard.jsx
import PropTypes from 'prop-types';

const JobCard = ({ job }) => {
  return (
    <div className="flex flex-col h-full border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="w-full h-32 sm:h-48 bg-gray-100">
        <div style={{ backgroundImage: `url(${job.imgUrl})` }} className="w-full h-full bg-center bg-cover"></div>
      </div>
      <div className="flex-1 flex flex-col p-4">
        <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
        <p className="flex-1 text-gray-600 mt-2 text-sm">{job.description}</p>
        <p className="text-gray-700 font-semibold text-sm mt-2">{job.jobType}</p>
        <div className="mt-4">
          <span className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 cursor-pointer">Details</span>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
