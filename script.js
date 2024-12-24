// Dummy credentials (29 members)
validCredentials = Array.from({ length: 29 }, (_, i) => ({
    email: `member${i + 1}@example.com`,
    password: `member${i + 1}123`
}));

// Add admin credentials
validCredentials.push({
    email: 'admin@example.com',
    password: '1234'
},
   { email: 'yy@h',
    password: '11'      });

// Check if user is logged in
function checkAuth() {
    if (!localStorage.getItem('isLoggedIn') && !window.location.pathname.includes('index.html')) {
        window.location.href = 'index.html';
    }
}

// Run auth check on all pages except login
if (!window.location.pathname.includes('index.html')) {
    checkAuth();
}

// Handle login form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');
        
        const isValid = validCredentials.some(cred => 
            cred.email === email && cred.password === password
        );
        
        if (isValid) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'members.html';
        } else {
            errorMessage.style.display = 'block';
        }
    });
}

// Dummy data for members table
const membersData = Array.from({ length: 29 }, (_, i) => ({
    unit: `Unit ${i + 1}`,
    name: `Member ${i + 1}`,
    nameMarathi: `सदस्य ${i + 1}`,
    originalArea: Math.floor(Math.random() * (1000 - 500) + 500),
    increasedArea: function() {
        return Math.floor(this.originalArea * 1.05);
    }
}));

// Populate members table
const membersTableBody = document.getElementById('membersTableBody');
if (membersTableBody) {
    membersTableBody.innerHTML = membersData.map(member => `
        <tr>
            <td>${member.unit}</td>
            <td>${member.name}</td>
            <td>${member.nameMarathi}</td>
            <td>${member.originalArea}</td>
            <td>${member.increasedArea()}</td>
        </tr>
    `).join('');
}

