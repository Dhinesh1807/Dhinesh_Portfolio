export default function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="sec-ey rv">
        <div className="sec-ey-line"></div>
        <span className="sec-ey-txt">Work History</span>
      </div>
      <h2 className="rv">
        My <span>Experience</span>
      </h2>

      {/* WORK HISTORY CARD */}
      <div className="exp-card rv">
        <div className="exp-h">
          <div>
            <div className="exp-r">Java FullStack Developer</div>
            <div className="exp-co">Aatmia Digital Marketing and Security Pvt Ltd</div>
          </div>
          <div className="exp-dt">JULY 2023 — Present</div>
        </div>
        <ul className="exp-list">
          <li>Worked with Adobe Target to support personalized content delivery and implement A/B testing for enhancing user engagement.</li>
          <li>Assisted in integrating Adobe Analytics to capture user interactions, page views, and business-specific events for performance monitoring.</li>
          <li>Developed and maintained RESTful APIs using Java and Spring Boot for enterprise-scale applications.</li>
          <li>Contributed to backend development of HRMS and Vehicle Management Systems, enabling smooth business operations.</li>
          <li>Worked with Adobe Experience Manager (AEM), including AEM-FED and AEM-EDS, for content management and component integration.</li>
          <li>Collaborated with frontend teams to ensure seamless integration between AEM components and backend APIs.</li>
          <li>Possess working knowledge of HTML, CSS, and JavaScript for UI customization and debugging.</li>
          <li>Assisted in resolving UI-related issues and improving user experience in web application.</li>
        </ul>
      </div>

      {/* EDUCATION CARD */}
      <div className="exp-card rv d1" style={{ marginTop: '24px' }}>
        <div className="exp-h">
          <div>
            <div className="exp-r">B.E Electronics and Communication Engineering</div>
            <div className="exp-co">NPR College of Engineering and Technology</div>
          </div>
          <div className="exp-dt">2019 SEP — 2023 JUNE</div>
        </div>
        <div style={{ fontFamily: 'var(--m)', fontSize: '.82rem', color: 'var(--g)', fontWeight: 600, marginTop: '6px' }}>
          CGPA — 7.85
        </div>
      </div>
    </section>
  );
}
