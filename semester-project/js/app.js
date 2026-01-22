// Navigation and Section Switching
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.dataset.section;
        showSection(sectionId);
        
        // Update active button
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Populate data for specific sections
    if (sectionId === 'lectures') {
        populateLectures();
    } else if (sectionId === 'assignments') {
        populateAssignments();
    } else if (sectionId === 'students') {
        populateStudents();
    } else if (sectionId === 'grades') {
        populateGrades();
    }
}

// Populate Lectures
function populateLectures() {
    const lecturesList = document.getElementById('lecturesList');
    lecturesList.innerHTML = '';
    
    courseData.lectures.forEach(lecture => {
        const lectureEl = document.createElement('div');
        lectureEl.className = 'lecture-item';
        lectureEl.innerHTML = `
            <h3>${lecture.title}</h3>
            <p><strong>Date:</strong> ${new Date(lecture.date).toLocaleDateString()}</p>
            <p><strong>Duration:</strong> ${lecture.duration}</p>
            <p>${lecture.description}</p>
        `;
        lecturesList.appendChild(lectureEl);
    });
}

// Populate Assignments
function populateAssignments() {
    const assignmentsList = document.getElementById('assignmentsList');
    assignmentsList.innerHTML = '';
    
    courseData.assignments.forEach(assignment => {
        const dueDate = new Date(assignment.dueDate);
        const today = new Date();
        const isOverdue = dueDate < today;
        
        const assignmentEl = document.createElement('div');
        assignmentEl.className = 'assignment-item';
        assignmentEl.innerHTML = `
            <h3>${assignment.title}</h3>
            <p>${assignment.description}</p>
            <p class="due-date">Due: ${dueDate.toLocaleDateString()}${isOverdue ? ' (OVERDUE)' : ''}</p>
        `;
        assignmentsList.appendChild(assignmentEl);
    });
}

// Populate Students
function populateStudents() {
    const studentsList = document.getElementById('studentsList');
    const searchInput = document.getElementById('studentSearch');
    
    function renderStudents(query = '') {
        studentsList.innerHTML = '';
        
        courseData.students
            .filter(student => student.name.toLowerCase().includes(query.toLowerCase()))
            .forEach(student => {
                const studentEl = document.createElement('div');
                studentEl.className = 'student-item';
                studentEl.innerHTML = `
                    <h3>${student.name}</h3>
                    <p><strong>Email:</strong> ${student.email}</p>
                    <p><strong>Enrolled:</strong> ${new Date(student.enrolled).toLocaleDateString()}</p>
                `;
                studentsList.appendChild(studentEl);
            });
    }
    
    renderStudents();
    
    searchInput.addEventListener('input', (e) => {
        renderStudents(e.target.value);
    });
}

// Populate Grades
function populateGrades() {
    const gradesBody = document.getElementById('gradesBody');
    const studentFilter = document.getElementById('studentFilter');
    
    // Populate student filter dropdown
    if (studentFilter.children.length === 1) {
        courseData.students.forEach(student => {
            const option = document.createElement('option');
            option.value = student.id;
            option.textContent = student.name;
            studentFilter.appendChild(option);
        });
    }
    
    function renderGrades(studentId = '') {
        gradesBody.innerHTML = '';
        
        let gradesToShow = courseData.grades;
        if (studentId) {
            gradesToShow = gradesToShow.filter(grade => grade.studentId == studentId);
        }
        
        gradesToShow.forEach(grade => {
            const row = document.createElement('tr');
            const scoreDisplay = grade.score !== null ? grade.score : '-';
            row.innerHTML = `
                <td>${grade.studentName}</td>
                <td>${grade.assignmentTitle}</td>
                <td>${scoreDisplay}</td>
                <td><span class="status ${grade.status}">${grade.status.charAt(0).toUpperCase() + grade.status.slice(1)}</span></td>
            `;
            gradesBody.appendChild(row);
        });
    }
    
    renderGrades();
    
    studentFilter.addEventListener('change', (e) => {
        renderGrades(e.target.value);
    });
}

// Initialize dashboard on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
});
