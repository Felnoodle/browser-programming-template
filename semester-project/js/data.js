// Mock Course Data
const courseData = {
    course: {
        name: "Browser Programming",
        instructor: "Prof. Johnson",
        semester: "Spring 2026",
        totalStudents: 25
    },

    lectures: [
        {
            id: 1,
            title: "GitHub Basics",
            date: "2026-01-15",
            duration: "60 min",
            description: "Introduction to version control and GitHub fundamentals"
        },
        {
            id: 2,
            title: "Semantic HTML",
            date: "2026-01-22",
            duration: "90 min",
            description: "Writing accessible and semantic HTML markup"
        },
        {
            id: 3,
            title: "CSS Basics",
            date: "2026-01-29",
            duration: "90 min",
            description: "Styling with CSS, selectors, and the cascade"
        },
        {
            id: 4,
            title: "Responsive Design",
            date: "2026-02-05",
            duration: "120 min",
            description: "Building responsive layouts with media queries"
        },
        {
            id: 5,
            title: "DOM Manipulation",
            date: "2026-02-12",
            duration: "90 min",
            description: "JavaScript DOM API and event handling"
        },
        {
            id: 6,
            title: "Async JavaScript",
            date: "2026-02-19",
            duration: "120 min",
            description: "Promises, async/await, and asynchronous patterns"
        },
        {
            id: 7,
            title: "Data Formats & APIs",
            date: "2026-02-26",
            duration: "90 min",
            description: "JSON, REST APIs, and API consumption"
        },
        {
            id: 8,
            title: "UI Frameworks",
            date: "2026-03-05",
            duration: "120 min",
            description: "Introduction to frontend frameworks"
        },
        {
            id: 9,
            title: "Backend Basics",
            date: "2026-03-12",
            duration: "90 min",
            description: "Server-side programming fundamentals"
        },
        {
            id: 10,
            title: "Multilayer Web",
            date: "2026-03-19",
            duration: "120 min",
            description: "Full-stack architecture and best practices"
        }
    ],

    assignments: [
        {
            id: 1,
            title: "GitHub Repository Setup",
            dueDate: "2026-01-20",
            description: "Create a GitHub account and set up your first repository"
        },
        {
            id: 2,
            title: "Semantic HTML Project",
            dueDate: "2026-01-27",
            description: "Create a semantic HTML document about your favorite topic"
        },
        {
            id: 3,
            title: "CSS Styling Challenge",
            dueDate: "2026-02-03",
            description: "Style the HTML project with CSS"
        },
        {
            id: 4,
            title: "Responsive Portfolio",
            dueDate: "2026-02-10",
            description: "Build a responsive personal portfolio website"
        },
        {
            id: 5,
            title: "DOM Manipulation Game",
            dueDate: "2026-02-17",
            description: "Create an interactive game using DOM APIs"
        },
        {
            id: 6,
            title: "Weather App",
            dueDate: "2026-02-24",
            description: "Fetch weather data from an API and display it"
        },
        {
            id: 7,
            title: "Todo App with Framework",
            dueDate: "2026-03-03",
            description: "Build a todo application using a UI framework"
        },
        {
            id: 8,
            title: "Semester Project",
            dueDate: "2026-03-31",
            description: "Build a complete full-stack application"
        }
    ],

    students: [
        { id: 1, name: "Alice Johnson", email: "alice@university.edu", enrolled: "2026-01-10" },
        { id: 2, name: "Bob Smith", email: "bob@university.edu", enrolled: "2026-01-10" },
        { id: 3, name: "Carol White", email: "carol@university.edu", enrolled: "2026-01-10" },
        { id: 4, name: "David Brown", email: "david@university.edu", enrolled: "2026-01-10" },
        { id: 5, name: "Emma Davis", email: "emma@university.edu", enrolled: "2026-01-10" },
        { id: 6, name: "Frank Miller", email: "frank@university.edu", enrolled: "2026-01-11" },
        { id: 7, name: "Grace Lee", email: "grace@university.edu", enrolled: "2026-01-11" },
        { id: 8, name: "Henry Wilson", email: "henry@university.edu", enrolled: "2026-01-12" },
        { id: 9, name: "Ivy Martinez", email: "ivy@university.edu", enrolled: "2026-01-12" },
        { id: 10, name: "Jack Taylor", email: "jack@university.edu", enrolled: "2026-01-13" }
    ],

    grades: [
        { studentId: 1, studentName: "Alice Johnson", assignmentId: 1, assignmentTitle: "GitHub Repository Setup", score: 95, status: "graded" },
        { studentId: 1, studentName: "Alice Johnson", assignmentId: 2, assignmentTitle: "Semantic HTML Project", score: 88, status: "graded" },
        { studentId: 1, studentName: "Alice Johnson", assignmentId: 3, assignmentTitle: "CSS Styling Challenge", score: null, status: "submitted" },
        { studentId: 2, studentName: "Bob Smith", assignmentId: 1, assignmentTitle: "GitHub Repository Setup", score: 92, status: "graded" },
        { studentId: 2, studentName: "Bob Smith", assignmentId: 2, assignmentTitle: "Semantic HTML Project", score: 85, status: "graded" },
        { studentId: 2, studentName: "Bob Smith", assignmentId: 3, assignmentTitle: "CSS Styling Challenge", score: null, status: "pending" },
        { studentId: 3, studentName: "Carol White", assignmentId: 1, assignmentTitle: "GitHub Repository Setup", score: 98, status: "graded" },
        { studentId: 3, studentName: "Carol White", assignmentId: 2, assignmentTitle: "Semantic HTML Project", score: 92, status: "graded" },
        { studentId: 3, studentName: "Carol White", assignmentId: 3, assignmentTitle: "CSS Styling Challenge", score: 90, status: "graded" },
    ]
};
