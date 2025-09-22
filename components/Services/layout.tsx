import "./serv.css"

const ServicesSection = () => {
    const services = [
        {
            id: "01",
            title: "⁠Startup Finance Advisory",
            description: "Setting up accounting systems and processes from scratch. Designing scalable financial workflows for early-stage companies. Financial modeling and forecasting to support fundraising and growth.",
            gradient: "purple-orange",
        },
        {
            id: "02",
            title: "Financial Reporting & Compliance",
            description: "Preparation of US GAAP, IFRS, and Ind AS compliant financial statements. Consolidation of group accounts and transition management. Audit support and statutory compliance reviews",
            gradient: "purple-orange",
        },
        {
            id: "03",
            title: "Month-End Close & Accounting Operations",
            description: `Full-cycle accounting including AR, AP, payroll, and general ledger.
Balance Sheet reconciliations, P&L reviews, and variance analysis.
Cash flow management and expense optimization`,
            gradient: "purple-orange-featured",
        },
        {
            id: "04",
            title: " ⁠Crypto Portfolio & Blockchain Accounting",
            description: "Portfolio management for digital assets (up to $350K USD managed experience). Accounting for crypto transactions, staking, and DeFi investments. Advisory on crypto taxation and compliance frameworks",
            gradient: "purple-orange",
        },
        {
            id: "05",
            title: "⁠ERP & Systems Transition",
            description: "Migration from legacy systems (e.g., QuickBooks) to cloud-based ERPs (Sage Intacct, NetSuite, etc.). Chart of accounts design and process architecture. Integration of financial tools (Bill.com, Smartsheet, Coupa)",
            gradient: "purple-orange",
        },
        {
            id: "06",
            title: "Strategic Budgeting & Analysis",
            description: "Budget preparation and variance analysis. Revenue, expense, and cash flow analysis for optimization. Investor-ready financial presentations and dashboards",
            gradient: "purple-orange",
        },
    ]

    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <h2 className="services-title">
                        My <span className="gradient-pill">Services</span>
                    </h2>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className={`service-card ${service.gradient}`}>
                            <div className="service-number">{service.id}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
