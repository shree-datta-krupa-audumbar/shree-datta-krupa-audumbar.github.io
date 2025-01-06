// Dummy credentials (29 members)
validCredentials = Array.from({ length: 29 }, (_, i) => ({
    email: `member${i + 1}@example.com`,
    password: `member${i + 1}123`
}));

// Add admin credentials
validCredentials.push(
    { email: 'admin@example.com',
    password: '1234'},

   { email: 'abhijitd2212@gmail.com',
    password: '05-09-1961' },

    { email: 'rajendrafaria@gmail.com',
    password: '01-11-1967' },

    { email: 'soni.pravin788@gmail.com',
    password: '13-07-1961' },

    { email: 'vrpoladia@gmail.com',
    password: '26-10-1953' },

    { email: 'surendravdeshpande@gmail.com',
    password: '12-07-1935' },

    { email: 'prabhakarrahalkar@gmail.com',
    password: '14-07-1939' },

    { email: 'deepakmokashi@yahoo.com',
    password: '28-02-1961' },

    { email: 'jatin.faria@gmail.com',
    password: '30-01-1975' },

    { email: 'ravisatra90@gmail.com',
    password: '01-03-1990' },

    { email: 'rajatsatra@yahoo.com',
    password: '15-07-1967' },

    { email: 'meenakavitake@gmail.com',
    password: '22-04-1963' },

    { email: 'mayuris21@gmail.com',
    password: '21-10-1980' },

    { email: 'sunilplokhande9999@gmail.com',
    password: '11-05-1969' },

    { email: 'manasdixit07@gmail.com',
    password: '29-05-1993' },

    { email: 'ammahajan7@gmail.com',
    password: '04-11-1965' },

    { email: 'anika.bhat7@gmail.com',
    password: '02-06-1943' },

    { email: 'kaushalpujara89@gmail.com',
    password: '' },

    { email: 'pritambhogate@gmail.com',
    password: '22-07-1976' },

    { email: 'riswadkar.harshad@gmail.com',
    password: '26-06-1979' },

    { email: 'patwardhan.yogesh@gmail.com',
    password: '09-11-1952' },

    { email: 'neharkhandekar@gmail.com',
    password: '25-04-1960' },

    { email: 'papuku@yahoo.com',
    password: '04-05-1970' },

    { email: 'koumudie@yahoo.com',
    password: '21-05-1975' },

    { email: 'seema_dighe@yahoo.com',
    password: '19-02-1968' },

    { email: 'deepa021955@gmail.com',
    password: '01-02-1955' },

    { email: 'ravisatra90@gmail.com',
    password: '02-05-1963' },

    { email: 'ravisatra90@gmail.com',
    password: '' },

    { email: 'lp.leenapatil@gmail.com',
    password: '05-02-1936' },

    { email: 'lp.leenapatil@gmail.com',
    password: '05-02-1936' }
);
    

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

