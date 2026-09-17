# Student Management System

A simple Student Management System built with React, JavaScript, and Tailwind CSS. This project demonstrates basic CRUD operations, state management with hooks, and React Router navigation.

## Features

✅ **Add Students** - Simple form to add new students  
✅ **View Students** - Display all students in a table  
✅ **Edit Students** - Update student information  
✅ **Delete Students** - Remove students from the list  
✅ **Search & Filter** - Search by name and filter by course  
✅ **Student Profile** - Dedicated page for viewing full student details  
✅ **Responsive Design** - Works on desktop and mobile screens  

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to `http://localhost:5173`

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── StudentForm.jsx      # Add/Edit student form
│   │   ├── StudentList.jsx      # Display students in table
│   │   └── SearchBar.jsx        # Search and filter controls
│   ├── pages/
│   │   ├── HomePage.jsx         # Main page
│   │   └── StudentProfile.jsx   # Student details page
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Project dependencies
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS config
└── postcss.config.js            # PostCSS configuration
```

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## How to Use

### Adding a Student
1. Fill in the form fields: Name, Email, Course, and Level
2. Click "Add Student" button
3. Student appears in the table below

### Editing a Student
1. Click the "Edit" button next to a student
2. The form pre-fills with student data
3. Make changes and click "Update Student"

### Deleting a Student
1. Click the "Delete" button next to a student
2. Confirm the deletion
3. Student is removed from the list

### Searching for a Student
1. Enter a student name in the search box
2. Table updates in real-time to show matching students

### Filtering by Course
1. Select a course from the dropdown
2. Table shows only students in that course
3. Can combine with search for more specific results

### Viewing Student Profile
1. Click the "View" button on any student
2. Opens a dedicated page with full student details
3. Click "Back to Home" to return to the main page

## Sample Data

The application comes with three sample students:
- John Smith - Computer Science (Year 2)
- Sarah Johnson - Business (Year 1)
- Mike Brown - Engineering (Year 3)

## Notes

- This is a client-side application (no backend)
- Data is stored in React state and will be lost on page refresh
- Form validation checks for required fields
- Search is case-insensitive
- Filter and search work together

## Learning Outcomes

This project demonstrates:
- React functional components and hooks (useState, useEffect)
- Controlled components and form handling
- List rendering with keys
- Conditional rendering
- React Router navigation
- Passing data through props
- Responsive design with Tailwind CSS
- CRUD operations basics

## Future Enhancements

- Add local storage to persist data
- Add backend API integration
- Add more student fields (GPA, enrollment date, etc.)
- Add sorting by different columns
- Add export to CSV functionality
- Add student photo upload

## License

This project is open source and available for educational purposes.
