## Student Management System
원본 : [Sanayo01/student-management-system](https://github.com/Sanayo01/student-management-system)

**선택 이유**
- 여러 주제 중 지금까지 진행한 과제와 유사한 Open Source Project를 찾던 중 React가 익숙하지 않은 상태에서 코드를 보았을 때 분석하는 난이도가 적당할 것 같아서 선택했습니다. 

**주요 기능**
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

## Customizing
1. Text
- `src/pages/HomePage.jsx` : 제목 Student Management System -> 학생 관리 시스템
- `src/pages/HomePage.jsx` : All Students -> 전체 학생 목록
- `src/components/SearchBar.jsx` : Search by Name -> 이름으로 검색, Filter by Course -> Course로 Filter
- `src/components/StudentForm.jsx` : Add Student -> 새로운 학생 등록, Update Student -> 학생 정보 수정
- `src/components/StudentList.jsx` : 버튼 View/Edit/Delete -> 상세/편집/삭제
- `src/pages/StudentProfile.jsx` : Back to Home -> 뒤로 가기

2. Style
- `src/pages/HomePage.jsx` : 바깥 배경 bg-gray-50 -> bg-blue-50
- `src/pages/HomePage.jsx` : 제목 text-gray-800 -> text-blue-800
- `src/pages/HomePage.jsx` : 제목 mb-8 -> mb-0
- `src/pages/HomePage.jsx` : 테두리 border-gray-200 -> border-gray-400

3. UI/Data
- `src/pages/HomePage.jsx` : 기본 데이터 `John Smith / Sarah Johnson / Mike Brown` → `심지섭 / 이서연 / 박민준`
- `src/pages/HomePage.jsx` : 검색 결과 옆에 전체 학생 수(`/ 전체 N명`) 표시 추가
- `src/pages/HomePage.jsx` : 제목 아래 설명 문구 추가 

## Deployment
Vercel : https://student-management-system-psi-pink.vercel.app/

## Weekly Review
**새롭게 배운 내용 3가지**
- 여러 기능들을 다른 파일에 코드를 작성하여 관리하고 하나의 페이지에 연결하여 사용할 수 있다는 것을 배웠습니다.
- 여러 개의 Open Source들을 확인하기 위해 Github에서 fork를 한 후 git clone하고 npm install -> npm run dev까지 이어지는 순서를 배웠습니다.
- JSX 안에서 class 대신 className을 사용하고, JavaScript 값을 {}로 넣는 것을 배웠습니다. 

**어려웠던 점과 해결 방법**
- `문제` : 여러 개의 Open Source들의 코드를 확인하면서 직접 분석하면서 코드를 수정해볼 수 있는 난이도의 Open Source는 무엇일지 확인하는 것이 어려웠습니다.
- `해결` : Open Source의 여러 주제들 중 과제에서 해본 경험이 있는 카테고리로 결정을 한 후, Style과 기능 등이 강의에서 배운 내용 외의 것들이 포함되지 않은 Open Source인지 확인하여 결정했습니다. 

**AI 활용 내용 및 느낀 점**
- `AI 활용 내용 1` : Data를 코드에서 수정해도 브라우저에서는 이전 데이터가 보이길래 AI에게 물어봤더니 F12를 누른 후 localStorage에서 삭제 후 새로고침하면 적용이 된다는 것을 알게 되었습니다. 
- `AI 활용 내용 2` : Open Source의 코드들을 처음 분석할 때 AI에게 코드 파일들이 어떤 역할을 하고, 그 속에 있는 코드들에 대해 한 줄씩 설명해달라고 요청하면서 공부했습니다.
- `느낀 점` : 처음부터 코드를 작성하지 않아도 Open Source를 활용해 빠르게 작업할 수 있다는 것을 배우면서, 시도해 볼 수 있는 범위가 넓어졌다고 생각합니다. 또한 화면을 컴포넌트 단위로 나누어 관리하고, 각 컴포넌트가 JSX를 통해 화면에 표시된다는 구조를 이해하게 되었습니다. 이를 통해 코드를 체계적으로 관리하는 방법을 알게 되었습니다.

## License

This project is open source and available for educational purposes.
