"use client";
import { useState } from "react";
export default function Home() {
  type Project = {
    title: string;
    img: string;
    desc: string;
    link: string;
    tableau?: string;
    powerbi?: boolean;
    powerbiLink?: string;
    screenshots?: string[];
  };

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return (
    <main className="bg-[#F8FAFC] text-[#111827]">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#F8FAFC]/70 backdrop-blur-md border-b border-[#334155]/10">
        <div className="flex justify-between items-center px-6 md:px-10 py-4">
          <h1 className="text-lg md:text-xl font-bold tracking-wide text-[#0F172A]">HansTheAnalyst</h1>

          <div className="flex gap-10 md:gap-12 text-sm md:text-base font-semibold">
            {[
              { label: "Home", id: "top" },
              { label: "About Me", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Background", id: "background" }, // ✅ NEW
              { label: "Skills", id: "skills" },
              { label: "Contact", id: "contact" },
            ].map((item, i) => (
              <a key={i} href={`#${item.id}`} className="hover:text-[#3B82F6] transition text-[#334155]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="min-h-screen flex items-center px-6 md:px-16 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-400 opacity-30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-green-400 opacity-30 blur-[140px] rounded-full"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
          <div>
            <p className="text-base text-[#334155] mb-4 tracking-wide">Data Analyst Portfolio</p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-[#0F172A]">
              Hans Justin <br />
              <span className="text-[#3B82F6]">Fernando</span>
            </h1>

            <p className="text-xl text-[#334155] mb-5">Data Analyst | Turning Data into Business Insights</p>
            <p className="text-base text-[#334155] mb-8">SQL • Excel • Power BI • Tableau</p>

            <div className="flex gap-5">
              <a
                href="#projects"
                className="bg-[#0F172A] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#1E293B] transition"
              >
                View Projects
              </a>

              <a
                href="https://github.com/HansTheAnalyst"
                target="_blank"
                className="border border-[#CBD5F5] text-[#0F172A] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#F1F5F9] transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute w-[320px] h-[400px] md:w-[380px] md:h-[460px] bg-[#3B82F6]/30 rounded-bl-[120px] right-[-40px] top-[40px] z-0"></div>

            <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[460px] bg-white rounded-bl-[120px] overflow-hidden shadow-xl z-10">
              <img
                src="/pfp.png"
                alt="profile"
                className="absolute top-[-90px] left-1/2 -translate-x-[52%] h-[115%] md:h-[120%] w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#0F172A]">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
              Hello, I’m <span className="text-[#3B82F6]">HansTheAnalyst</span>
            </h3>

            <div>
              <p className="text-[#334155] mb-6 leading-relaxed text-justify">
                I am an aspiring Data Analyst with a strong foundation in SQL, data analytics, and visualization, with
                hands-on experience building end-to-end analytics solutions. I specialize in transforming raw data into
                actionable insights that support strategic decision-making.
              </p>

              <p className="text-[#334155] mb-8 leading-relaxed text-justify">
                With a background in software development, I bring a strong technical mindset to data analytics,
                allowing me to approach problems with structure, efficiency, and attention to detail. This gives me an
                edge in understanding how data flows within systems and how to translate complex information into clear,
                practical insights. I am passionate about using data to solve real-world business problems and
                continuously improving my analytical and technical capabilities.
              </p>

              <a className="border border-[#CBD5F5] text-[#0F172A] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#F1F5F9] transition">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#0F172A]">Notable Projects</h2>

          {[
            {
              title: "London Giftware Expansion Analysis",
              img: "/london_giftware.png",
              desc: "End-to-end analytics project identifying the top 3 international markets for expansion by analyzing net revenue, customer concentration, refund impact, and product demand using SQL, Excel, Tableau, and Power BI.",
              link: "https://github.com/HansTheAnalyst/london-giftware-expansion-analysis",
              tableau:
                "https://public.tableau.com/app/profile/hans.justin.fernando/viz/LondonGiftwareExpansionAnalysis/LondonGiftwareMarketExpansionAnalysis",
              powerbi: true,
              powerbiLink: "https://github.com/HansTheAnalyst/london-giftware-expansion-analysis/tree/main/power%20bi",
              screenshots: [
                "/exec_overview.png",
                "/international_expansion.png",
                "/customer_revenue_analysis.png",
                "/product_affinity.png",
              ],
            },
            {
              title: "NYC Airbnb Market Analysis",
              img: "/nyc_airbnb.png",
              desc: "Market analysis of 48,000+ NYC Airbnb listings uncovering pricing patterns, supply concentration, and the 'Authenticity Premium' to support data-driven investment and pricing strategies.",
              link: "https://github.com/HansTheAnalyst/nyc-airbnb-pricing-analysis",
              tableau: "https://public.tableau.com/views/NYCAirbnbMarketAnalysisSupplyPricingTrends/Dashboard1",
              powerbi: true, // ✅ ENABLE MODAL
              powerbiLink: "#", // replace if you have real file
              screenshots: ["/supply_pricing_trends.png"],
            },
          ].map((proj, i) => (
            <div key={i} className="mb-24">
              {/* TITLE */}
              <h2 className="text-4xl font-bold mb-6 text-[#0F172A]">
                <span className="text-[#334155] mr-4">{`0${i + 1}`}</span>
                {proj.title}
              </h2>

              {/* CONTENT */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* IMAGE */}
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="rounded-xl shadow-lg hover:scale-[1.02] transition duration-300"
                />

                {/* TEXT */}
                <div>
                  <p className="text-[#334155] mb-6 leading-relaxed text-justify">{proj.desc}</p>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-3">
                    {/* GITHUB */}
                    <a
                      href={proj.link}
                      target="_blank"
                      className="border border-[#CBD5F5] text-[#0F172A] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#F1F5F9] transition"
                    >
                      GitHub
                    </a>

                    {/* POWER BI */}
                    {proj.powerbi && (
                      <button
                        onClick={() => setActiveProject(proj)}
                        className="border border-[#CBD5F5] text-[#0F172A] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#F1F5F9] transition"
                      >
                        Power BI
                      </button>
                    )}

                    {/* TABLEAU */}
                    {proj.tableau && (
                      <a
                        href={proj.tableau}
                        target="_blank"
                        className="border border-[#CBD5F5] text-[#0F172A] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#F1F5F9] transition"
                      >
                        Tableau
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POWER BI MODAL */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-6xl p-6 rounded-xl relative overflow-y-auto max-h-[90vh]">
            {/* TITLE */}
            <h3 className="text-xl font-bold mb-6 text-[#0F172A]">{activeProject.title} Dashboard</h3>

            {/* RESPONSIVE GRID */}
            <div
              className={`grid gap-6 ${
                activeProject.screenshots?.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {activeProject.screenshots?.map((img, i) => (
                <div key={i} className="border border-[#334155]/20 rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`dashboard-${i}`}
                    className={`w-full ${
                      activeProject.screenshots?.length === 1 ? "h-[500px] object-contain" : "h-full object-cover"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex justify-end gap-3 mt-8">
              <a
                href={activeProject.powerbiLink}
                target="_blank"
                className="bg-[#0F172A] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#1E293B] transition"
              >
                Download Dashboard
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="border border-[#CBD5F5] text-[#0F172A] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#F1F5F9] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BACKGROUND */}
      <section id="background" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#0F172A]">Work Experiences & Certifications</h2>

          <div className="grid md:grid-cols-2 gap-12 relative">
            {/* CENTER DIVIDER */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-[#334155]/20"></div>

            {/* ================= LEFT: EXPERIENCE ================= */}
            <div className="md:pr-12">
              <h3 className="text-xl font-semibold mb-8 text-[#0F172A]">Data Analytics Experience</h3>

              {/* CASE STUDY 1 */}
              <div className="mb-10">
                <p className="font-semibold text-[#0F172A]">Data Analyst (Case Study)</p>
                <p className="text-[#334155]">London Giftware Co. (Simulated Business Scenario)</p>
                <p className="text-sm text-[#64748B] mb-4">2026</p>

                <ul className="space-y-2 text-[#334155] text-sm leading-relaxed text-justify">
                  <li>
                    • <strong>Data Engineering & SQL:</strong> Designed a layered ELT pipeline and developed analytical
                    views to transform 1M+ transactional records into business-ready datasets
                  </li>
                  <li>
                    • <strong>Data Analysis:</strong> Identified Ireland, Netherlands, and Germany as top-performing
                    markets using net revenue and country-level analysis
                  </li>
                  <li>
                    • <strong>Customer Analytics:</strong> Analyzed customer value distribution, revealing top 20
                    customers contributed ~58% of total revenue
                  </li>
                  <li>
                    • <strong>Business Metrics:</strong> Quantified refund impact (~3.7%) to improve accuracy of
                    financial performance evaluation
                  </li>
                  <li>
                    • <strong>Data Visualization & Communication:</strong> Built interactive dashboards to present
                    market, customer, and product insights for strategic decision-making
                  </li>
                </ul>
              </div>

              {/* CASE STUDY 2 */}
              <div className="mb-10">
                <p className="font-semibold text-[#0F172A]">Data Analyst (Case Study)</p>
                <p className="text-[#334155]">NYC Airbnb Market Analysis</p>
                <p className="text-sm text-[#64748B] mb-4">2026</p>

                <ul className="space-y-2 text-[#334155] text-sm leading-relaxed text-justify">
                  <li>
                    • <strong>Data Engineering & SQL:</strong> Built a structured ETL pipeline with feature engineering
                    (price tiers, host segmentation, availability categories)
                  </li>
                  <li>
                    • <strong>Exploratory Data Analysis:</strong> Analyzed 48,000+ listings to uncover pricing behavior
                    and supply distribution trends
                  </li>
                  <li>
                    • <strong>Market Analysis:</strong> Identified an “Authenticity Premium” where single-listing hosts
                    command higher prices
                  </li>
                  <li>
                    • <strong>Business Insight Generation:</strong> Discovered market concentration in Manhattan and
                    Brooklyn and high competition in low-price segments
                  </li>
                  <li>
                    • <strong>Data Validation & Visualization:</strong> Validated outputs in Excel and built interactive
                    dashboards to support pricing and investment decisions
                  </li>
                </ul>
              </div>

              {/* OTHER EXPERIENCE */}
              <h3 className="text-xl font-semibold mt-12 mb-6 text-[#0F172A]">Other Experience</h3>

              {/* DIGITEER */}
              <div className="mb-8">
                <p className="font-semibold text-[#0F172A]">Back-End Developer Intern</p>
                <p className="text-[#334155]">Digiteer Inc.</p>
                <p className="text-sm text-[#64748B] mb-3">Feb 2025 – Apr 2025 • Remote</p>

                <ul className="space-y-2 text-[#334155] text-sm leading-relaxed text-justify">
                  <li>
                    • Developed backend modules and administrative dashboards using Ruby on Rails for multiple web
                    applications
                  </li>
                  <li>
                    • Contributed to 3 client projects (Brothers Keepers, FAST Solutions, SFELAPCO), implementing core
                    system functionalities
                  </li>
                  <li>
                    • Designed and structured relational database schemas to support scalable and efficient application
                    performance
                  </li>
                </ul>
              </div>

              {/* FAITH COLLEGES */}
              <div className="mb-8">
                <p className="font-semibold text-[#0F172A]">Software Development Engineering Intern</p>
                <p className="text-[#334155]">FAITH Colleges — Tanauan City, Batangas</p>
                <p className="text-sm text-[#64748B] mb-3">June 2024 – November 2024</p>

                <ul className="space-y-2 text-[#334155] text-sm leading-relaxed text-justify">
                  <li>
                    • Developed a React + Flask web-based leaf identification application using deep learning models
                  </li>
                  <li>
                    • Led the web development team in designing the system architecture and implementing core features
                  </li>
                </ul>
              </div>

              {/* FREELANCE WEB */}
              <div className="mb-8">
                <p className="font-semibold text-[#0F172A]">Freelance Web Developer</p>
                <p className="text-sm text-[#64748B] mb-3">September 2024 – November 2024</p>

                <ul className="space-y-2 text-[#334155] text-sm leading-relaxed">
                  <li>• Developed an American Sign Language (ASL) learning web application powered by deep learning</li>
                  <li>• Designed and implemented the UI/UX to improve usability and user engagement</li>
                </ul>
              </div>

              {/* FREELANCE MOBILE */}
              <div className="mb-8">
                <p className="font-semibold text-[#0F172A]">Freelance Mobile App Developer</p>

                <p className="text-sm text-[#64748B] mb-3">September 2024 – November 2024</p>

                <ul className="space-y-2 text-[#334155] text-sm leading-relaxed">
                  <li>• Built an American Sign Language (ASL) mobile application using deep learning models</li>
                  <li>• Developed the application using Java and XML for Android-based deployment</li>
                </ul>
              </div>
            </div>

            {/* ================= RIGHT: CERTIFICATIONS ================= */}
            <div className="md:pl-12">
              <h3 className="text-xl font-semibold mb-8 text-[#0F172A]">Data Analytics Certifications</h3>

              <ul className="space-y-4 text-[#334155] text-sm text-justify">
                <li>Google Data Analytics Professional Certificate</li>
                <li>AlexTheAnalyst Data Analytics Bootcamp</li>
              </ul>

              <h3 className="text-xl font-semibold mt-12 mb-6 text-[#0F172A]">Other Certifications</h3>

              <ul className="space-y-4 text-[#334155] text-sm text-justify">
                <li>DICT Web Development for Developers</li>
                <li>DICT CALABARZON Cyber Security Caravan</li>
                <li>Digital Startup Development and Acceleration Program (DSDAP) Caravan</li>
                <li>Udemy The Complete Full-Stack Web Development Bootcamp</li>
                <li>Programminghub HTML Certification Course</li>
                <li>HKNL2024 Information Security Conference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-20 text-center text-[#0F172A]">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                title: "Programming Languages",
                items: [["/sql.png", "SQL"]],
              },
              {
                title: "Data Tools",
                items: [
                  ["/excel.png", "Excel"],
                  ["/google_sheets.png", "Google Sheets"],
                  ["/ssms.png", "SQL Server"],
                  ["/vs_code.png", "VS Code"],
                ],
              },
              {
                title: "Visualization",
                items: [
                  ["/powerbi.png", "Power BI"],
                  ["/tableau.png", "Tableau"],
                ],
              },
              {
                title: "Methods",
                items: [
                  [null, "Exploratory Data Analysis"],
                  [null, "Data Transformation"],
                  [null, "Data Cleaning"],
                  [null, "Data Segmentation"],
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i !== 3 ? "md:border-r md:border-[#334155]/20" : ""
                } ${i === 0 ? "md:pr-10" : "md:pr-6"}`}
              >
                <h3 className="font-semibold text-lg mb-8 text-[#0F172A] text-center">{section.title}</h3>

                <div className="flex flex-col gap-6">
                  {section.items.map(([img, label], j) => {
                    // ✅ CUSTOM SIZE LOGIC
                    let sizeClass = "h-10 w-10"; // default

                    if (label === "SQL" || label === "Google Sheets" || label === "VS Code") {
                      sizeClass = "h-10 w-10"; // +2
                    }

                    if (label === "Tableau") {
                      sizeClass = "h-10 w-10"; // +3
                    }

                    return (
                      <div key={j} className="flex items-center gap-4">
                        {img ? (
                          <>
                            <img src={img} className={`${sizeClass} object-contain`} />
                            <span className="text-[#334155]">{label}</span>
                          </>
                        ) : (
                          <span className="text-[#334155]">{label}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-[#334155] mb-10">Get In Touch</h2>

        <div className="flex flex-col gap-8">
          {/* EMAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hansjtfernando@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-5xl md:text-7xl font-extrabold uppercase relative w-fit text-[#0F172A]"
          >
            <span className="relative z-10 group-hover:text-white transition">Email</span>
            <span className="absolute left-0 bottom-0 w-0 h-full bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/HansTheAnalyst"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-5xl md:text-7xl font-extrabold uppercase relative w-fit text-[#0F172A]"
          >
            <span className="relative z-10 group-hover:text-white transition">GitHub</span>
            <span className="absolute left-0 bottom-0 w-0 h-full bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/hans-justin-fernando-423379240/"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-5xl md:text-7xl font-extrabold uppercase relative w-fit text-[#0F172A]"
          >
            <span className="relative z-10 group-hover:text-white transition">LinkedIn</span>
            <span className="absolute left-0 bottom-0 w-0 h-full bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-5xl md:text-7xl font-extrabold uppercase relative w-fit text-[#0F172A]"
          >
            <span className="relative z-10 group-hover:text-white transition">Resume</span>
            <span className="absolute left-0 bottom-0 w-0 h-full bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-[#334155]">
        © {new Date().getFullYear()} Hans Justin Fernando
      </footer>
    </main>
  );
}
