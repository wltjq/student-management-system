import { useState , useEffect } from 'react'
import StudentForm from '../components/StudentForm'
import StudentList from '../components/StudentList'
import SearchBar from '../components/SearchBar'

const dummyStudents = [
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

function HomePage() {
  const [students, setStudents] = useState(() => {
    const stored = localStorage.getItem('students')
    return stored ? JSON.parse(stored) : dummyStudents
  })
  const [editingId, setEditingId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCourse, setFilterCourse] = useState('')

  useEffect(() => {
    localStorage.setItem('students' , JSON.stringify(students))
  }, [students])

  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: Math.max(...students.map(s => s.id), 0) + 1
    }
    setStudents([...students, newStudent])
  }

  const updateStudent = (id, updatedStudent) => {
    setStudents(students.map(s => s.id === id ? { ...updatedStudent, id } : s))
    setEditingId(null)
  }

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id))
  }

  const filteredStudents = students.filter(student => {
    const nameMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase())
    const courseMatch = filterCourse === '' || student.course === filterCourse
    return nameMatch && courseMatch
  })

  const courses = [...new Set(students.map(s => s.course))]

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-0">학생 관리 시스템</h1>
        <p className="mb-8 text-blue-400">학생을 등록하고, 검색하고, 관리할 수 있는 페이지입니다.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded border border-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              {editingId ? '학생 정보 수정' : '새로운 학생 등록'}
            </h2>
            <StudentForm
              onSubmit={(student) => {
                if (editingId) {
                  updateStudent(editingId, student)
                } else {
                  addStudent(student)
                }
              }}
              editingStudent={editingId ? students.find(s => s.id === editingId) : null}
              onCancel={() => setEditingId(null)}
            />
          </div>

          <div className="bg-white p-6 rounded border border-gray-400">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Search & Filter</h2>
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filterCourse={filterCourse}
              onFilterChange={setFilterCourse}
              courses={courses}
            />
            <div className="mt-4 text-sm text-gray-600">
              Found: <span className="font-bold">{filteredStudents.length}</span> student(s)
              / 전체 <span className="font-bold">{students.length}</span>명
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded border border-gray-400">
          <h2 className="text-xl font-bold mb-4 text-gray-700">전체 학생 목록</h2>
          <StudentList
            students={filteredStudents}
            onEdit={(id) => setEditingId(id)}
            onDelete={deleteStudent}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
