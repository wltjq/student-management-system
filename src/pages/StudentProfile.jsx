import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function StudentProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // In a real app, thisis gonna would wanna fetch from an API or context
  // For now, we will use local storage or pass state
  const [students] = useState(() => {
    const stored = localStorage.getItem('students')
    return stored ? JSON.parse(stored) : [
      {
        id: 1,
        name: '심지섭',
        email: 'jisub@example.com',
        course: 'Computer Science',
        level: 'Year 4'
      },
      {
        id: 2,
        name: '이서연',
        email: 'seoyeon@example.com',
        course: 'Business',
        level: 'Year 1'
      },
      {
        id: 3,
        name: '박민준',
        email: 'minjun@example.com',
        course: 'Engineering',
        level: 'Year 3'
      }
    ]
  })

  const student = students.find(s => s.id === parseInt(id))

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ← 뒤로 가기
          </button>
          <div className="bg-white p-6 rounded border border-gray-200">
            <p className="text-gray-600">Student not found</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ← 뒤로 가기
        </button>

        <div className="bg-white p-8 rounded border border-gray-200">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">{student.name}</h1>

          <div className="space-y-4">
            <div className="border-b pb-3">
              <p className="text-gray-600 font-semibold">Student ID</p>
              <p className="text-gray-800">{student.id}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-gray-600 font-semibold">Email</p>
              <p className="text-gray-800">{student.email}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-gray-600 font-semibold">Course</p>
              <p className="text-gray-800">{student.course}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-gray-600 font-semibold">Level</p>
              <p className="text-gray-800">{student.level}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile
