function SearchBar({ searchTerm, onSearchChange, filterCourse, onFilterChange, courses }) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Search by Name
        </label>
        <input
          type="text"
          placeholder="Enter student name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Course
        </label>
        <select
          value={filterCourse}
          onChange={(e) => onFilterChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:border-blue-500"
        >
          <option value="">All Courses</option>
          {courses.map(course => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SearchBar
