import propTypes from 'prop-types';

const Filtering = ({ onFilterChange, onSortChange, filter, sort }) => {
  console.log('Filtering Props:', { filter, sort, onSortChange });
  
  return (
    <div className="flex justify-center items-center mt-4">
      <span className="mx-3 text-lg">Filter by:</span>
      <select
        className="border border-gray-300 rounded px-4 py-2 mr-4"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="fulltime">Full Time</option>
        <option value="parttime">Part Time</option>
      </select>
      <span className="mx-3 text-lg">Sort by:</span>
      <select
        className="border border-gray-300 rounded px-4 py-2"
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

Filtering.propTypes = {
  onFilterChange: propTypes.func.isRequired,
  onSortChange: propTypes.func.isRequired,
  filter: propTypes.string.isRequired,
  sort: propTypes.string.isRequired,
};

export default Filtering;
