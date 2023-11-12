// src/components/common/Pagination.jsx
import propTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <button 
        className={`px-4 py-2 mx-1 rounded text-white ${
          currentPage <= 1 ? 'bg-gray-300' : 'bg-gray-500 hover:bg-gray-800'
        }`} 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage <= 1}
      >
        &laquo; Prev
      </button>

      <span className="mx-3 text-lg">
        Page {currentPage} of {totalPages}
      </span>

      <button 
        className={`px-4 py-2 mx-1 rounded text-white ${
          currentPage >= totalPages ? 'bg-gray-300' : 'bg-gray-500 hover:bg-gray-800'
        }`} 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage >= totalPages}
      >
        Next &raquo;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  totalPages: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;
