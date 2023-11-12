import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPagination, searchJob } from '../api/jobs';
import JobList from '../components/features/jobs/JobList';
import SearchBar from '../components/common/SearchBar';
import Pagination from '../components/common/Pagination';
import Filtering from '../components/common/Filtering';

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('asc'); // Changed from sortOrder to sort
  const [jobType, setJobType] = useState('all'); 
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let response;
        const jobsPerPage = 10;

        if (searchQuery) {
          response = await searchJob(searchQuery, currentPage, jobsPerPage, sort, jobType);
        } else {
          response = await getPagination(currentPage, jobsPerPage, sort, jobType);
        }

        if (response && response.data && Array.isArray(response.data.rows)) {
          setJobs(response.data.rows);
          setTotalPages(Math.ceil(response.data.count / jobsPerPage));
        } else {
          console.error('Data is not in the expected format:', response);
        }
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };

    fetchJobs();
  }, [searchQuery, currentPage, sort, jobType]);

  const handleSearch = (query) => {
    setSearchParams({ search: query });
    setCurrentPage(1);
  };

  const handleJobTypeChange = (type) => {
    console.log('Job Type Changed:', type);
    setJobType(type);
  };

  const handleSortChange = (newSort) => {
    console.log('Sort Changed:', newSort);
    setSort(newSort);
  };

  

  return (
    <div className="container mx-auto p-4 ring-offset-gray-950">
      <h1 className="text-3xl font-bold mb-4">Job List</h1>
      <div className="flex justify-between mb-4">
      <Filtering 
          onFilterChange={handleJobTypeChange} 
          onSortChange={handleSortChange}
          filter={jobType}
          sort={sort} 
        />
        <SearchBar onSearch={handleSearch} />
      </div>
      <JobList jobs={jobs} />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={(page) => setCurrentPage(page)} 
      />
    </div>
  );
};

export default JobPage;
