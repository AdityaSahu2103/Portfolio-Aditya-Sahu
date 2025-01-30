// project-detail.js
const projectsData = {
    'RetroPhil': {
        title: 'RetroPhil',
        tags: ['HTML','CSS', 'JavaScript', 'React.js', 'Firebase', 'Stripe', "Vercel"],
        description: '                  We developed a National Web Community for Philatelists, providing a centralized platform to address the challenges faced by stamp collectors across India. This solution enhances the philatelic experience by bridging gaps in access to information, demand fulfillment, and networking opportunities.',
        features: [
            'Centralized Platform: Connects philatelic collectors with postal circles across India.',
            'Seamless Buying Experience: Enables easy access to philatelic materials through an intuitive interface.',
            'Community Engagement: Encourages collaboration among collectors and postal authorities.'
            
        ],
        technologies: [
            'Web Development: Frontend with React.js and backend with Node.js & Express.js.',
            'Database Management: FireBase for efficient data storage and retrieval.penCV for image processing and face detection',
            'Authentication & Security: Implemented OAuth 2.0 / JWT for secure user access.dlib for facial landmark detection',
            'API Integration: Integration with India Post’s services for real-time updates.'
            
        ],
        challenges: [
            'Lack of Centralized Data: Created a structured database to organize philatelic materials efficiently.Implementing accurate face recognition in different lighting conditions',
            'Scalability Concerns: Designed a modular architecture to support future expansion.ptimizing performance for real-time processing',
            'User Accessibility & Experience: Built an intuitive UI/UX with responsive design for smooth navigation.ling multiple faces in a single frame',
            'Ensuring Trust & Authenticity: Implemented verification mechanisms to validate listings and transactions.ing an efficient data storage system'
        ],
        github: 'https://github.com/AdityaSahu2103/RetroPhil-24',
        demo: '#', // Add demo link if available
        images: [
            'https://media.licdn.com/dms/image/v2/D4D22AQGDVM_GZ0unNA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728151628688?e=1741219200&v=beta&t=EP1JPJePCbxCN3qh3TSJhUotcw82bVJ9ZtcwxmLCJos',
            'https://media.licdn.com/dms/image/v2/D4D22AQELyuwISpIT-w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728151637827?e=1741219200&v=beta&t=DAqauUrImOce_NMZeZXCQIFO2zRhPP0zm7ICcZe-T8s',
            'https://media.licdn.com/dms/image/v2/D4D22AQGsG-4EpHBlZg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728151629952?e=1741219200&v=beta&t=K-iHnLP-p-bpvjxrCjta9t6dZB987dWYqDt_BHYhb_8'
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

            <div class="project-images">
                ${project.images.map(image => `
                    <a href="${image}" data-lightbox="project-gallery">
                        <img src="${image}" alt="${project.title} screenshot">
                    </a>
                `).join('')}
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