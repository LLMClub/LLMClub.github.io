let sessions = [];

function loadCSV() {
    showLoading(true);
    hideError();

    // Fetch the CSV file
    fetch('https://raw.githubusercontent.com/LLMClub/LLMClub.github.io/main/LLM%20Club%20Presenter.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('CSV file not found. Please ensure "LLM Club Presenter.csv" is available');
            }
            return response.text();
        })
        .then(csvText => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                dynamicTyping: true,
                complete: function(results) {
                    showLoading(false);
                    
                    if (results.errors.length > 0) {
                        showError('Error parsing CSV: ' + results.errors[0].message);
                        return;
                    }

                    // Clean and validate data
                    sessions = results.data.map(row => {
                        const cleanRow = {};
                        Object.keys(row).forEach(key => {
                            const cleanKey = key.trim();
                            cleanRow[cleanKey] = row[key];
                        });

                        return {
                            gregorianDate: cleanRow['Gregorian Calendar'] || '',
                            iranianDate: cleanRow['Iranian Calendar'] || '',
                            presenter: cleanRow['Presenter'] || cleanRow['Presneter'] || '',
                            subject: cleanRow['Subject'] || '',
                            youtubeLink: cleanRow['Youtube Link'] || cleanRow['YouTube Link'] || ''
                        };
                    }).filter(session => 
                        session.gregorianDate && 
                        session.presenter && 
                        session.subject
                    );

                    if (sessions.length === 0) {
                        showError('No valid sessions found in CSV. Please check the format.');
                        return;
                    }

                    renderSessions();
                    updateStats();
                    updateNextSession();
                },
                error: function(error) {
                    showLoading(false);
                    showError('Error parsing CSV: ' + error.message);
                }
            });
        })
        .catch(error => {
            showLoading(false);
            showError(error.message);
        });
}

function renderSessions() {
    const sessionsGrid = document.getElementById('sessions-grid');
    sessionsGrid.innerHTML = '';
    
    // Sort sessions by date (most recent first)
    sessions.sort((a, b) => new Date(b.gregorianDate) - new Date(a.gregorianDate));
    
    sessions.forEach(session => {
        const sessionCard = document.createElement('div');
        sessionCard.className = 'session-card';
        
        const youtubeButton = session.youtubeLink ? 
            `<a href="${session.youtubeLink}" target="_blank" class="youtube-link">📺 Watch on YouTube</a>` :
            `<span class="youtube-link disabled">📺 Video Coming Soon</span>`;
        
        sessionCard.innerHTML = `
            <div class="session-date">${session.gregorianDate}${session.iranianDate ? ` (${session.iranianDate})` : ''}</div>
            <div class="session-title">${session.subject}</div>
            <div class="session-presenter">👨‍🏫 ${session.presenter}</div>
            ${youtubeButton}
        `;
        
        sessionsGrid.appendChild(sessionCard);
    });
}

function updateStats() {
    document.getElementById('session-count').textContent = sessions.length;
    
    // Count unique speakers
    const uniqueSpeakers = new Set(sessions.map(s => s.presenter));
    document.getElementById('speaker-count').textContent = uniqueSpeakers.size;
}

function updateNextSession() {
    // Find the next upcoming session or show a placeholder
    const now = new Date();
    const upcomingSessions = sessions.filter(session => 
        new Date(session.gregorianDate) > now
    ).sort((a, b) => new Date(a.gregorianDate) - new Date(b.gregorianDate));

    const nextSessionInfo = document.getElementById('next-session-info');
    
    if (upcomingSessions.length > 0) {
        const nextSession = upcomingSessions[0];
        nextSessionInfo.innerHTML = `
            <div class="next-session-date">${nextSession.gregorianDate}${nextSession.iranianDate ? ` (${nextSession.iranianDate})` : ''}</div>
            <div class="next-session-details">
                <strong>${nextSession.subject}</strong><br>
                Presenter: ${nextSession.presenter}
            </div>
        `;
    } else {
        nextSessionInfo.innerHTML = `
            <div class="next-session-date">Stay Tuned!</div>
            <div class="next-session-details">Our next session will be announced soon. Follow our social media for updates!</div>
        `;
    }
}

function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

function hideError() {
    document.getElementById('error').style.display = 'none';
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    loadCSV();
    
    // Add smooth scrolling behavior to navigation links
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation item on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('[id]');
        const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
