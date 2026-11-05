## Student Management System
원본 : [Sanayo01/student-management-system](https://github.com/Sanayo01/student-management-system)

**선택 이유**
- 여러 주제 중 지금까지 진행한 과제와 유사한 Open Source Project를 찾던 중 React가 익숙하지 않은 상태에서 코드를 보았을 때 분석하는 난이도가 적당할 것 같아서 선택했습니다. 

** 주요 기능**
1. 학생 추가 / 수정 / 삭제
2. 이름 검색 + filter
3. 학생 View 페이지

## Clone & Run
```bash
git clone https://github.com/wltjq/student-management-system.git
cd student-management-system
npm install
npm run dev
```
## Source Code Exploration
`src/main.jsx` 
- App이 시작되는 화면으로 #root에 붙여서 실행

`src/App.jsx`
- 주소에 따라 어떤 페이지를 보여줄지 정함

`src/pages/HomePage.jsx`
- 메인 화면으로 학생 데이터를 관리하고, 필요한 값을 전달 

## React Component
`StudentForm.jsx` 
- 학생 정보를 입력하는 폼
- 수정할 때 기존 값이 미리 채워짐

`StudentList.jsx`
- 학생 배열을 받아 테이블로 보여줌
- 목록이 비면 "No students found"를 표시함
- View 버튼을 누르면 `useNavigate`로 상세 페이지로 이동 

`SearchBar.jsx`
- 검색창과 과정 필터를 보여 주는 컴포넌트
- 입력값을 부모(HomePage)에 전달하면, HomePage가 조건에 맞는 학생만 걸러서 보여줌

## Code Analysis
`src/pages/HomePage.jsx`
```jsx
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
```
- `updateStudent` : students.map()으로 배열을 순회하면서, id가 같은 학생만 정보를 바꾸고 나머지는 그대로 유지하여 변환하도록 한다. 그리고 setEditingId(null)로 수정 모드를 끝냄
- `deleteStudent` : students.filter()로 삭제할 학생의 id와 다른 학생들만 남겨서 새로운 배열을 생성함 
- `filteredStudents` : 학생의 이름과 검색어로 입력된 이름을 대소문자 상관없이 처리하여 포함되는지 확인하고, filter의 조건과 함께 &&로 묶어 모두 만족하는 학생만 남기게 됨


## Future Enhancements

- Add local storage to persist data
- Add backend API integration
- Add more student fields (GPA, enrollment date, etc.)
- Add sorting by different columns
- Add export to CSV functionality
- Add student photo upload

## License

This project is open source and available for educational purposes.
