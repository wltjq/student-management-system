# Student Management System - Development Guide

This is a simple Student Management System built with React, Vite, and Tailwind CSS.

## Features

- Add new students with form validation
- Display students in a table
- Edit student information
- Delete students with confirmation
- Search students by name
- Filter students by course
- View full student profile on separate page
- Responsive design with Tailwind CSS

## Project Structure

```
src/
├── components/
│   ├── StudentForm.jsx      # Form for adding/editing students
│   ├── StudentList.jsx      # Table display of students
│   └── SearchBar.jsx        # Search and filter component
├── pages/
│   ├── HomePage.jsx         # Main page with CRUD operations
│   └── StudentProfile.jsx   # Student detail page
├── App.jsx                  # Main app with routing
├── main.jsx                 # React entry point
└── index.css                # Global styles with Tailwind
```

## Running the Project

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open http://localhost:5173 in your browser

## Building for Production

`npm run build`

## Technologies Used

- React 18
- React Router v6
- Vite
- Tailwind CSS
- PostCSS

## Features Implemented

### CRUD Operations
- Create: Form to add new students
- Read: Display students in a table and profile page
- Update: Edit student details inline
- Delete: Remove students with confirmation

### Search & Filter
- Search by student name (real-time)
- Filter by course

### Navigation
- Home page with all students
- Student profile page with detailed view
- Back navigation from profile

## Code Style

The code is written in a simple, student-friendly style:
- Controlled components with useState
- Simple state management without Redux
- Basic Tailwind CSS styling
- Functional components
- Minimal abstractions
