import { useNavigate } from 'react-router-dom'

function StudentList({ students, onEdit, onDelete }) {
  const navigate = useNavigate()

  if (students.length === 0) {
    return (
      <div className="p-4 bg-gray-50 rounded border border-dashed border-gray-300">
        <p className="text-gray-600 text-center">No students found</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-300 bg-gray-100">
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Course</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Level</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700">Email</th>
            <th className="px-4 py-3 text-center font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3 text-gray-800">{student.name}</td>
              <td className="px-4 py-3 text-gray-800">{student.course}</td>
              <td className="px-4 py-3 text-gray-800">{student.level}</td>
              <td className="px-4 py-3 text-gray-600 text-sm">{student.email}</td>
              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => navigate(`/student/${student.id}`)}
                  className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 mr-2"
                >
                  상세
                </button>
                <button
                  onClick={() => onEdit(student.id)}
                  className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600 mr-2"
                >
                  편집
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure?')) {
                      onDelete(student.id)
                    }
                  }}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
