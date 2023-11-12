import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/jobs/${id}`);
        setJobDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!jobDetails) {
    return <div className="text-center font-medium text-lg p-10">Loading job details...</div>;
  }

  const { Company } = jobDetails;

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <a href="/jobs" className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition duration-300">
          ← Back to Job List
        </a>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={jobDetails.imgUrl} alt={jobDetails.title} className="w-full object-cover object-center h-64" />
        
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{jobDetails.title}</h1>
          
          {Company && (
            <div className="company-details mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{Company.name}</h2>
              <img src={Company.companyLogo} alt={Company.name} className="mb-4 w-32 h-32 object-cover object-center rounded-full" />
              <p className="text-gray-700 mb-1"><strong>Job Type:</strong> {jobDetails.jobType}</p>
              <p className="text-gray-700 mb-1"><strong>Location:</strong> {Company.location}</p>
              <p className="text-gray-700 mb-1"><strong>Email:</strong> {Company.email}</p>
              <p className="text-gray-700">{Company.description}</p>
            </div>
          )}

          <div className="job-description border-t pt-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h3>
            <p className="text-gray-700 whitespace-pre-line">{jobDetails.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
