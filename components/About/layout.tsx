import "./abt.css"

export default function AboutSection() {
    return (
        <section id="AboutSection" className="about-section">
            <div className="about-container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">
                        About <span className="gradient-pill">me</span>
                    </h2>
                </div>

                {/* Main Content */}
                <div className="about-content">
                    {/* Profile Image */}
                    <div className="profile-image-container">
                        <div className="profile-image-frame">
                            <img
                                src="/meena.jpeg"
                                alt="Meena  Venkatesh"
                                className="profile-image"
                            />
                        </div>
                    </div>

                    {/* About Text and Skills */}
                    <div className="about-details">
                        <div className="about-text">
                            <p className="about-description">
                                I am a Chartered Accountant with 7 years of experience specializing in financial management, reporting, and analysis across startups and fast-growing organizations. My expertise covers US GAAP, IFRS, and Ind AS, with a proven track record in building scalable financial processes, driving compliance, and enabling business growth.
                                Beyond traditional finance, I bring hands-on expertise in crypto portfolio management, where I have successfully managed portfolios of up to $350K USD. 
                            </p>
                            <p className="about-passion">
                                I am passionate about helping businesses  from early-stage startups to scaling companies  achieve financial transparency, compliance, and profitability.
                            </p>
                        </div>

                        {/* Skills Section */}
                        <div className="skills-section">
                            <div className="skill-item">
                                <span className="skill-name">Financial Reporting</span>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-skill="95"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <span className="skill-name">Tax Compliance</span>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-skill="90"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <span className="skill-name">Budgeting and Forecasting</span>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-skill="92"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <span className="skill-name">Treasury and Cash Flow Management</span>
                                <div className="skill-bar">
                                    <div className="skill-progress" data-skill="88"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="stats-section">
                    <div className="stat-item">
                        <div className="stat-number gradient-text">7+</div>
                        <div className="stat-label">YEARS OF EXPERIENCE</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number gradient-text">10+</div>
                        <div className="stat-label">PROJECTS COMPLETED</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-number gradient-text">10+</div>
                        <div className="stat-label">HAPPY CLIENTS</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
