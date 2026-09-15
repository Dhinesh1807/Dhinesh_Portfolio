export default function Projects() {
  const projectsData = [
    {
      num: '01 / HRMS',
      icon: '👥',
      title: 'Human Resource Management System (HRMS)',
      bullets: [
        'Implemented backend services for employee management, attendance tracking, and daily check-ins.',
        'Integrated Adobe Analytics to track user interactions, page views, and employee engagement across HR modules.',
        'Developed approval-based leave workflows with automated status transitions.',
        'Applied role-based access controls to safeguard sensitive employee data and centralized HR records.',
        'Customized and maintained frontend components using AEM-FED for HR dashboards and UI enhancements.'
      ],
      tags: ['Java', 'Spring Boot', 'RESTful APIs', 'MySQL', 'AEM-FED', 'Adobe Analytics'],
      delayClass: ''
    },
    {
      num: '02 / WMS',
      icon: '📦',
      title: 'Warehouse Management System (WMS)',
      bullets: [
        'Built backend functionalities for inventory tracking, order processing, and warehouse operations.',
        'Designed APIs enabling real-time inventory visibility, reducing manual reconciliation.',
        'Improved picking, packing, receiving, and dispatch workflows through automated backend logic.',
        'Supported reporting features that enhanced inventory accuracy and operational efficiency.'
      ],
      tags: ['Java', 'Spring Boot', 'MySQL', 'RESTful APIs', 'Inventory Automation'],
      delayClass: 'd1'
    },
    {
      num: '03 / VMS',
      icon: '🚗',
      title: 'Vehicle Management System',
      bullets: [
        'Designed backend modules for managing vehicles, drivers, fuel usage, maintenance, trips, and invoices.',
        'Integrated Adobe Target with AEM components to deliver personalized user experiences based on business requirements.',
        'Enabled backend-driven insights for trip monitoring, fuel analysis, and service history tracking.',
        'Developed and customized frontend components using AEM-FED and leveraged AEM-EDS for performance.'
      ],
      tags: ['Java', 'Spring Boot', 'RESTful APIs', 'MySQL', 'AEM-FED', 'AEM-EDS', 'Adobe Target'],
      delayClass: 'd2'
    }
  ];

  return (
    <section className="sec" id="projects">
      <div className="sec-ey rv">
        <div className="sec-ey-line"></div>
        <span className="sec-ey-txt">Featured Work</span>
      </div>
      <h2 className="rv">
        Projects I've <span>Built</span>
      </h2>
      <div className="prj-grid">
        {projectsData.map((prj, idx) => (
          <div key={idx} className={`prj-card rv ${prj.delayClass}`}>
            <div className="prj-top">
              <span className="prj-num">{prj.num}</span>
              <div className="prj-ico">{prj.icon}</div>
            </div>
            <div className="prj-title">{prj.title}</div>
            <div className="prj-desc">
              <ul>
                {prj.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="prj-tags">
              {prj.tags.map((tag, tIdx) => (
                <span key={tIdx} className="prj-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
