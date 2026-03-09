// Dashboard Charts using Chart.js

// Meeting Analytics - Line Chart
const meetingCtx = document.getElementById('meetingChart');
if (meetingCtx) {
    new Chart(meetingCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Meetings',
                data: [65, 78, 90, 81, 96, 105, 115],
                borderColor: '#0078d4',
                backgroundColor: 'rgba(0, 120, 212, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Participant Growth - Bar Chart
const participantCtx = document.getElementById('participantChart');
if (participantCtx) {
    new Chart(participantCtx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Participants',
                data: [420, 512, 498, 547],
                backgroundColor: [
                    'rgba(0, 120, 212, 0.8)',
                    'rgba(16, 110, 190, 0.8)',
                    'rgba(0, 120, 212, 0.8)',
                    'rgba(16, 110, 190, 0.8)'
                ],
                borderColor: [
                    '#0078d4',
                    '#106ebe',
                    '#0078d4',
                    '#106ebe'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Meeting Distribution - Doughnut Chart
const distributionCtx = document.getElementById('distributionChart');
if (distributionCtx) {
    new Chart(distributionCtx, {
        type: 'doughnut',
        data: {
            labels: ['Team Meetings', 'Client Calls', '1-on-1s', 'Webinars', 'Training'],
            datasets: [{
                data: [35, 25, 20, 12, 8],
                backgroundColor: [
                    '#0078d4',
                    '#106ebe',
                    '#50e6ff',
                    '#0099bc',
                    '#00b7c3'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });
}

// Device Usage - Pie Chart
const deviceCtx = document.getElementById('deviceChart');
if (deviceCtx) {
    new Chart(deviceCtx, {
        type: 'pie',
        data: {
            labels: ['Desktop', 'Mobile', 'Tablet'],
            datasets: [{
                data: [58, 32, 10],
                backgroundColor: [
                    '#0078d4',
                    '#106ebe',
                    '#50e6ff'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });
}

// Add animation on scroll for stat cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .dashboard-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});