const RightArrow = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6"/>
    </svg>
);

const LeftArrow = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6"/>
    </svg>
);

const IntroPage = ({ onNavigate, isActive }) => {
    const [roleIndex, setRoleIndex] = React.useState(0);
    const [isHovering, setIsHovering] = React.useState(false);
    const roles = [
        "Developer",
        "Data Scientist",
        "Sports enthusiast",
        "Otaku",
        "Video Gamer"
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`page intro-page ${isActive ? 'active' : 'inactive-left'} ${isHovering ? 'blur-active' : ''}`}>
            <div className="container">
                <h1 className="name">Rishabh Handoo</h1>
                <div className="roles">
                    <div key={roleIndex} className="role">
                        {roles[roleIndex]}
                    </div>
                </div>
            </div>
            <div 
                className="nav-arrow" 
                onClick={() => onNavigate('experience')}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <RightArrow />
            </div>
            <div className="page-overlay"></div>
            <div className="hover-text">RESUME</div>
        </div>
    );
};

const ExperiencePage = ({ onNavigate, isActive }) => {
    const [visible, setVisible] = React.useState(false);
    const [isHovering, setIsHovering] = React.useState(false);

    React.useEffect(() => {
        if (isActive) {
            setTimeout(() => setVisible(true), 300);
        } else {
            setVisible(false);
        }
    }, [isActive]);

    return (
        <div className={`page experience-page ${isActive ? 'active' : 'inactive-right'} ${isHovering ? 'blur-active' : ''}`}>
            <div className="resume-container">
                <div className={`resume-content ${visible ? 'visible' : ''}`}>
                    <div className="resume-section" style={{transitionDelay: '0.1s'}}>
                        <h2 className="section-title">Education</h2>
                        <div className="education-item">
                            <h3>Thapar Institute of Engineering and Technology, Patiala</h3>
                            <div className="education-details">Bachelor of Engineering in Computer Engineering</div>
                            <div className="period">2020-24 • CGPA: 8.94</div>
                        </div>
                        <div className="education-item">
                            <h3>Ryan International School, Chandigarh</h3>
                            <div className="education-details">Central Board of Secondary Education (C.B.S.E)</div>
                            <div className="period">2020 • Percentage: 92.8</div>
                        </div>
                    </div>

                    <div className="resume-section" style={{transitionDelay: '0.2s'}}>
                        <h2 className="section-title">Experience</h2>
                        <div className="experience-item">
                            <h3>OYO - SDE Intern + FTE</h3>
                            <div className="period">January 2024 - ongoing</div>
                            <div className="experience-description">
                                Working in Data Science Pricing team, focusing on ML/GenAI-based pricing problems and maintaining pricing pipelines.
                            </div>
                            <ul className="points-list">
                                <li>Created and scaled pricing pipeline for multiple countries with clustering and ML algorithms</li>
                                <li>Built end-to-end dashboard using Flask, Bokeh, Folium, and Plotly</li>
                                <li>Developed internal chat bot with RAG using Azure Cognitive Search</li>
                            </ul>
                        </div>
                    </div>

                    <div className="resume-section" style={{transitionDelay: '0.3s'}}>
                        <h2 className="section-title">Projects</h2>
                        <div className="project-item">
                            <h3>EyeLuminate</h3>
                            <div className="project-description">
                                Innovative smart glasses for individuals with disabilities to help them interact in a better way.
                            </div>
                            <ul className="points-list">
                                <li>Implementing ML models for OCR, object detection, face detection, and Text-to-speech</li>
                                <li>Leveraging cloud computing(Azure ML) to execute models on the Raspberry Pi model 4</li>
                                <li>Working on a research paper to document the project's innovation</li>
                            </ul>
                        </div>
                        {/* Add FinStop and Alexnet projects similarly */}
                    </div>

                    <div className="resume-section" style={{transitionDelay: '0.4s'}}>
                        <h2 className="section-title">Technical Skills</h2>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h4>Languages</h4>
                                <div className="skill-list">C/C++, Python, Java, Dart, R, HTML, CSS, JavaScript</div>
                            </div>
                            <div className="skill-category">
                                <h4>Frameworks</h4>
                                <div className="skill-list">Flask, Docker, Flutter, FastAPI, Bootstrap</div>
                            </div>
                            <div className="skill-category">
                                <h4>Databases</h4>
                                <div className="skill-list">MySQL, PostgreSQL, BigQuery</div>
                            </div>
                        </div>
                    </div>

                    <div className="resume-section" style={{transitionDelay: '0.5s'}}>
                        <h2 className="section-title">Achievements</h2>
                        <ul className="achievements-list">
                            <li>TIET Merit Scholarship holder</li>
                            <li>Solved 700+ questions on LeetCode with a rating of 1700+</li>
                            <li>Published a package on PyPI.org related to Topsis</li>
                            <li>Ranked in the top 10% in a Kaggle hackathon</li>
                            <li>Semi-Finalist at BlackRock Hackathon</li>
                            <li>Amazon CodeElevate 2024</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div 
                className="nav-arrow" 
                onClick={() => onNavigate('intro')}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <LeftArrow />
            </div>
            <div className="page-overlay"></div>
            <div className="hover-text">INTRODUCTION</div>
        </div>
    );
};

const App = () => {
    const [currentPage, setCurrentPage] = React.useState('intro');
    const [isAnimating, setIsAnimating] = React.useState(false);

    const handleNavigate = (page) => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setCurrentPage(page);
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 800);
    };

    return (
        <div>
            <IntroPage 
                onNavigate={handleNavigate} 
                isActive={currentPage === 'intro'} 
            />
            <ExperiencePage 
                onNavigate={handleNavigate} 
                isActive={currentPage === 'experience'} 
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));