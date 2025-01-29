// project-detail.js
const projectsData = {
    'RetroPhil': {
        title: 'RetroPhil',
        tags: ['HTML','CSS', 'JavaScript', 'React.js', 'Firebase', 'Stripe', "Vercel"],
        description: '                  We developed a National Web Community for Philatelists, providing a centralized platform to address the challenges faced by stamp collectors across India. This solution enhances the philatelic experience by bridging gaps in access to information, demand fulfillment, and networking opportunities.',
        features: [
            'Real-time face detection and recognition',
            'Automated attendance marking',
            'User-friendly interface for managing student records',
            'Export attendance reports in various formats',
            'High accuracy in recognition even with varying lighting conditions'
        ],
        technologies: [
            'Python for backend development',
            'OpenCV for image processing and face detection',
            'dlib for facial landmark detection',
            'face_recognition library for face recognition',
            'CSV for data storage and management'
        ],
        challenges: [
            'Implementing accurate face recognition in different lighting conditions',
            'Optimizing performance for real-time processing',
            'Handling multiple faces in a single frame',
            'Creating an efficient data storage system'
        ],
        github: 'https://github.com/AjitVerma15/Advance-Attendence-System',
        demo: '#', // Add demo link if available
        images: [
            'Image/Ajit.jpg',
            'https://www.bing.com/images/search?q=photos%20of%20stamps%20for%20landing%20page&FORM=IQFRBA&id=1F0D2F87A2B2B7048436B2A82BAE2387C4369544',
            'https://www.bing.com/images/search?q=photos%20of%20stamps%20for%20landing%20page&FORM=IQFRBA&id=1F0D2F87A2B2B7048436B2A82BAE2387C4369544'
        ]
    },
    'telegram-bot': {
        title: 'Telegram Bot',
        tags: ['Python', 'Telegram API', 'Dialogflow', 'News API'],
        description: 'A versatile bot that provides news on various topics, engages in small talk, and offers COVID-19 statistics for different states.',
        features: [
            'Real-time news updates on various topics',
            'Interactive conversations using natural language processing',
            'COVID-19 statistics tracking',
            'Location-based news filtering',
            'Multi-category news support'
        ],
        technologies: [
            'Python for bot development',
            'Telegram Bot API for messaging',
            'Dialogflow for natural language processing',
            'News API for fetching latest news',
            'COVID-19 API for statistics'
        ],
        challenges: [
            'Implementing natural conversation flow',
            'Managing multiple API integrations',
            'Handling concurrent user requests',
            'Ensuring accurate news categorization'
        ],
        github: 'https://github.com/AjitVerma15/Telegram-Bot',
        demo: '#' // Add demo link if available
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Get project ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Get project data
    const project = projectsData[projectId];

    if (project) {
        // Update page content
        const projectInfo = document.getElementById('project-info');
        projectInfo.innerHTML = `
            <div class="project-header">
                <h1 class="project-title">${project.title}</h1>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p class="project-description">${project.description}</p>
            </div>

            <div class="project-section">
                <h2 class="section-title">Key Features</h2>
                <ul class="feature-list">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>

            <div class="project-section">
                <h2 class="section-title">Technologies Used</h2>
                <ul class="feature-list">
                    ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
            </div>

            <div class="project-section">
                <h2 class="section-title">Challenges & Solutions</h2>
                <ul class="feature-list">
                    ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                </ul>
            </div>

            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
                ${project.demo !== '#' ? `
                    <a href="${project.demo}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        `;
    } else {
        // Handle invalid project ID
        document.getElementById('project-info').innerHTML = `
            <div class="text-center">
                <h2>Project not found</h2>
                <p>The requested project could not be found.</p>
            </div>
        `;
    }
});