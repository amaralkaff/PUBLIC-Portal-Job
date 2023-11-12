import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPagination, searchJob } from '../api/jobs';
import JobList from '../components/features/jobs/JobList';
import SearchBar from '../components/common/SearchBar';
import Pagination from '../components/common/Pagination';
import Filtering from '../components/common/Filtering';
import { debounce } from 'lodash';

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const searchQuery = searchParams.get('search') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const sort = searchParams.get('sort') || 'asc';
  const jobType = searchParams.get('filter') || 'all';
  
  const updateJobs = useCallback(async () => {
    try {
      const jobsPerPage = 10;
      const response = searchQuery
        ? await searchJob(searchQuery, page, jobsPerPage, sort, jobType)
        : await getPagination(page, jobsPerPage, sort, jobType);

      if (response && response.data && Array.isArray(response.data.rows)) {
        setJobs(response.data.rows);
        setTotalPages(Math.ceil(response.data.count / jobsPerPage));
      } else {
        console.error('Data is not in the expected format:', response);
      }
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  }, [searchQuery, page, sort, jobType]);

  useEffect(() => {
    updateJobs();
  }, [updateJobs]);

  const debouncedSearch = useCallback(
    debounce((query) => {
      setSearchParams({ search: query, page: 1, sort, filter: jobType });
    }, 300),
    [setSearchParams, sort, jobType]
  );
  
  const handleSearch = (query) => {
    debouncedSearch(query);
  };

  const handleJobTypeChange = (newFilter) => {
    setSearchParams({ search: searchQuery, page: 1, sort, filter: newFilter });
  };

  const handleSortChange = (newSort) => {
    setSearchParams({ search: searchQuery, page: 1, sort: newSort, filter: jobType });
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
        currentPage={page} 
        totalPages={totalPages} 
        onPageChange={(newPage) => setSearchParams({ search: searchQuery, page: newPage, sort, filter: jobType })} 
      />
    </div>
  );
};

export default JobPage;
