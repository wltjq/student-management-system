import { useState, useEffect } from 'react'

function StudentForm({ onSubmit, editingStudent, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    level: ''
  })

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent)
    } else {
      setFormData({
        name: '',
        email: '',
        course: '',
        level: ''
      })
    }
  }, [editingStudent])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.course || !formData.level) {
      alert('Please fill all fields')
      return
    }

    onSubmit(formData)
    setFormData({
      name: '',
      email: '',
      course: '',
      level: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student name"
          className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Course
        </label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="e.g., Computer Science"
          className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Level
        </label>
        <input
          type="text"
          name="level"
          value={formData.level}
          onChange={handleChange}
          placeholder="e.g., Year 1"
          className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600"
        >
          {editingStudent ? '학생 정보 수정' : '새로운 학생 등록'}
        </button>
        {editingStudent && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-gray-400 text-white rounded font-medium hover:bg-gray-500"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default StudentForm
