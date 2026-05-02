import {
  caseStudies,
  contact,
  experienceHighlights,
  focusTags,
  navigation,
  profilePoints,
  strengths,
  workingStyle,
} from './content.js';

const Icon = ({ children }) => (
  <span className="card-icon" aria-hidden="true">
    {children}
  </span>
);

const SectionHeading = ({ kicker, title, children }) => (
  <div className="section-heading">
    <div className="section-kicker">{kicker}</div>
    <h2>{title}</h2>
    {children}
  </div>
);

const SafeExternalLink = ({ href, children, className, ariaLabel }) => (
  <a
    className={className}
    href={href}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

function Header() {
  return (
    <header className="nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Ashkar portfolio home">
          <span className="brand-mark">A</span>
          <span>Ashkar</span>
        </a>
        <nav className="nav-links" aria-label="Portfolio sections">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div itemProp="about" itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content="Ashkar" />
          <meta itemProp="jobTitle" content="Senior Project Manager / Scrum Master" />
          <meta itemProp="url" content="https://ashkar.example/" />
          <span className="eyebrow">PMP-certified delivery leader</span>
          <h1 id="hero-title" itemProp="headline">
            Senior Project Manager | Agile Delivery | Data & AI-Ready Leadership
          </h1>
          <p itemProp="description">
            I help teams turn complex delivery challenges into clear plans, accountable execution, and
            stakeholder-ready outcomes.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#experience" aria-label="View Ashkar's experience">
              <span>View Experience</span>
              <span aria-hidden="true">→</span>
            </a>
            <a className="button secondary" href="#contact" aria-label="Contact Ashkar">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Delivery leadership snapshot">
          <div className="delivery-visual">
            <div className="visual-top">
              <div className="visual-title">
                Delivery Command View
                <span>Risks, releases, teams, and decisions aligned</span>
              </div>
              <span className="status-pill">On track</span>
            </div>
            <div className="visual-grid">
              <div className="metric-row">
                <div className="metric">
                  <strong>5+</strong>
                  <span>Years delivery experience</span>
                </div>
                <div className="metric">
                  <strong>8</strong>
                  <span>Core leadership strengths</span>
                </div>
                <div className="metric">
                  <strong>360</strong>
                  <span>Stakeholder visibility</span>
                </div>
              </div>
              <div className="track">
                <div className="track-header">
                  <span>Program readiness</span>
                  <span>82%</span>
                </div>
                <div className="bar" aria-hidden="true">
                  <span />
                </div>
              </div>
              <div className="workstream-list">
                <div className="workstream">
                  <span className="dot" />
                  <span>Data onboarding workstream</span>
                  <span className="tag">Ready</span>
                </div>
                <div className="workstream">
                  <span className="dot" />
                  <span>Release governance cadence</span>
                  <span className="tag">Active</span>
                </div>
                <div className="workstream">
                  <span className="dot" />
                  <span>RAID and dependency tracking</span>
                  <span className="tag">Visible</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="next-section-peek">About Ashkar</div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container about-layout">
        <div>
          <div className="section-kicker">About me</div>
          <h2>Calm structure for complex delivery environments.</h2>
          <p className="about-copy">
            Ashkar is a PMP-certified project professional with 5+ years of experience leading Agile
            teams across software, data, healthcare, fintech, and enterprise delivery environments. He
            specializes in bringing structure to ambiguity, managing risks and dependencies,
            facilitating collaboration, and keeping stakeholders aligned through clear, timely, and
            practical communication.
          </p>
          <p className="sr-only">
            Professional summary: Ashkar is a Senior Project Manager, Scrum Master, Agile delivery
            manager, and data project delivery professional. Core search topics include PMP
            certification, Agile delivery, Scrum ceremonies, stakeholder communication, risk and issue
            management, RAID logs, dependency management, data onboarding, release planning, cutover
            governance, executive status reporting, Jira, Confluence, Smartsheet, Microsoft Teams,
            Power BI, Power Automate, and OneNote.
          </p>
        </div>
        <div className="profile-card">
          <h3>Leadership profile</h3>
          <ul className="profile-list">
            {profilePoints.map((point) => (
              <li key={point}>
                <span className="check">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="section soft" id="strengths">
      <div className="container">
        <SectionHeading
          kicker="Core strengths"
          title="Built for delivery clarity, team momentum, and executive confidence."
        />
        <div className="strength-grid" aria-label="Ashkar core delivery strengths">
          {strengths.map((strength) => (
            <article
              className="card strength-card"
              key={strength.title}
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/DefinedTerm"
            >
              <meta itemProp="description" content={strength.description} />
              <Icon>{strength.icon}</Icon>
              <h3 itemProp="name">{strength.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          kicker="Experience highlights"
          title="Hands-on delivery leadership across teams, tools, and stakeholders."
        >
          <p>
            Ashkar’s work centers on making delivery visible: the work, the blockers, the decisions,
            and the path to release.
          </p>
        </SectionHeading>
        <div className="timeline" aria-label="Experience highlights timeline">
          {experienceHighlights.map((item, index) => (
            <article
              className="timeline-item"
              key={item.title}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
              <div className="card timeline-card">
                <h3 itemProp="name">{item.title}</h3>
                <p itemProp="description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="section soft" id="work">
      <div className="container">
        <SectionHeading kicker="Featured work" title="Case studies in turning uncertainty into execution." />
        <div className="case-grid" aria-label="Featured delivery case studies">
          {caseStudies.map((study) => (
            <article
              className="card case-card"
              key={study.title}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <h3 itemProp="name">{study.title}</h3>
              <meta itemProp="keywords" content={study.keywords} />
              <div className="case-block">
                <span className="case-label">Problem</span>
                <p>{study.problem}</p>
              </div>
              <div className="case-block">
                <span className="case-label">Action</span>
                <p>{study.action}</p>
              </div>
              <div className="case-block">
                <span className="case-label">Outcome</span>
                <p itemProp="description">{study.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkingStyle() {
  return (
    <section className="section" id="style">
      <div className="container">
        <SectionHeading kicker="Working style" title="Professional, grounded, and built for follow-through." />
        <div className="style-grid">
          {workingStyle.map((item) => (
            <div className="style-pill" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerFocus() {
  return (
    <section className="section soft" id="focus">
      <div className="container">
        <div className="focus-panel">
          <div className="section-kicker">Where I’m heading next</div>
          <h2>AI-aware delivery leadership for data transformation and enterprise programs.</h2>
          <p>
            Ashkar is focused on growing into roles where program management, delivery discipline,
            data transformation, and AI-enabled productivity come together. His next chapter is
            centered on helping organizations deliver with more clarity, better decision-making, and
            stronger alignment across business and technology.
          </p>
          <div className="focus-tags">
            {focusTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-layout">
        <div className="card contact-intro">
          <div className="section-kicker">Contact</div>
          <h2>Let’s connect about delivery leadership, Agile teams, and data programs.</h2>
          <p>
            For recruiter conversations, leadership roles, and professional opportunities, Ashkar is
            ready to discuss how disciplined delivery can create business momentum.
          </p>
        </div>
        <address className="card contact-card" aria-label="Professional contact details">
          <div className="contact-row">
            <span>Email</span>
            <strong>{contact.email}</strong>
          </div>
          <div className="contact-row">
            <span>LinkedIn</span>
            <strong>{contact.linkedinLabel}</strong>
          </div>
          <SafeExternalLink
            className="button primary"
            href={contact.resumeUrl}
            ariaLabel="Download Ashkar's resume"
          >
            <span>Resume Download</span>
            <span aria-hidden="true">↓</span>
          </SafeExternalLink>
        </address>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© 2026 Ashkar. Senior Project Manager / Scrum Master.</span>
        <span>PMP-certified | Agile Delivery | Data & AI-Ready Leadership</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="page-shell" itemScope itemType="https://schema.org/ProfilePage">
      <div className="sr-only" itemProp="description">
        Ashkar is a PMP-certified Senior Project Manager and Scrum Master with 5+ years of experience
        in Agile delivery, data onboarding, stakeholder management, release planning, risk management,
        issue management, dependency tracking, executive reporting, and AI-enabled productivity. This
        portfolio is designed for recruiters, hiring managers, senior leaders, and professional
        connections evaluating Ashkar for Senior Project Manager, Delivery Manager, Scrum Master,
        Program Manager, data transformation, and enterprise delivery roles.
      </div>
      <Header />
      <main id="top" itemProp="mainContentOfPage">
        <Hero />
        <About />
        <Strengths />
        <Experience />
        <CaseStudies />
        <WorkingStyle />
        <CareerFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
