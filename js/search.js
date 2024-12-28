const languages = {
    "JavaScript": {
        description: "Popular programming language for web development",
        features: ["Web Development", "Node.js", "Front-end", "Back-end"]
    },
    "Python": {
        description: "Versatile language known for simplicity and readability",
        features: ["Data Science", "AI/ML", "Web Development", "Automation"]
    },
    "TypeScript": {
        description: "Typed superset of JavaScript",
        features: ["Static Typing", "OOP", "Enterprise Development"]
    },
    "HTML": {
        description: "Standard markup language for web pages",
        features: ["Web Structure", "Semantic Elements", "Forms"]
    },
    "CSS": {
        description: "Style sheet language for web design",
        features: ["Styling", "Animations", "Layouts"]
    },
    "PHP": {
        description: "Server-side scripting language",
        features: ["Web Development", "Server-side", "CMS Development"]
    },
    "Ruby": {
        description: "Dynamic, object-oriented programming language",
        features: ["Web Development", "Scripting", "Rails Framework"]
    },
    "Go": {
        description: "Efficient and fast programming language by Google",
        features: ["Systems Programming", "Cloud Services", "Concurrent Programming"]
    },
    "Swift": {
        description: "Modern programming language by Apple",
        features: ["iOS Development", "macOS Development", "Server-side Swift"]
    },
    "Rust": {
        description: "Systems programming language focusing on safety",
        features: ["Systems Programming", "Memory Safety", "Concurrent Programming"]
    },
    "Java": {
        description: "Popular language for enterprise development",
        features: ["Enterprise Development", "Android Development", "Big Data"]
    },
    "C#": {
        description: "Versatile language for Microsoft platforms",
        features: ["Windows Development", "Game Development", "Enterprise Development"]
    },
    "Kotlin": {
        description: "Modern language for Android development",
        features: ["Android Development", "Cross-platform Development", "Conciseness"]
    },
    "C++": {
        description: "General-purpose programming language",
        features: ["Systems Programming", "Game Development", "High Performance"]
    },
    "Lua": {
        description: "Lightweight, embeddable scripting language",
        features: ["Game Development", "Scripting", "Embeddable"]
    },
    "Perl": {
        description: "High-level, general-purpose programming language",
        features: ["Scripting", "Web Development", "Text Processing"]
    },
    "C": {
        description: "Procedural programming language",
        features: ["Systems Programming", "Embedded Systems", "Compilers"]
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const detailsPanel = document.getElementById('detailsPanel');
    const panelTitle = document.getElementById('panelTitle');
    const panelDescription = document.getElementById('panelDescription');
    const panelFeatures = document.getElementById('panelFeatures');

    function displayResults(query) {
        searchResults.innerHTML = '';
        const filtered = Object.keys(languages).filter(lang => 
            lang.toLowerCase().includes(query.toLowerCase())
        );

        filtered.forEach(lang => {
            const card = document.createElement('div');
            card.className = 'language-card';
            card.innerHTML = `<h3>${lang}</h3>`;
            card.onclick = () => showLanguageDetails(lang);
            searchResults.appendChild(card);
        });
    }

    function showLanguageDetails(language) {
        const lang = languages[language];
        panelTitle.textContent = language;
        panelDescription.textContent = lang.description;
        panelFeatures.innerHTML = `
            <h4>Features:</h4>
            <ul>
                ${lang.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        `;
        detailsPanel.style.display = 'block';
    }

    searchInput.addEventListener('input', (e) => {
        displayResults(e.target.value);
    });

    document.addEventListener('click', (e) => {
        if (!detailsPanel.contains(e.target) && !searchResults.contains(e.target)) {
            detailsPanel.style.display = 'none';
        }
    });

    displayResults('');
});
