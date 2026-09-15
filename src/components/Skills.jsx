export default function Skills() {
  const skillsData = [
    {
      icon: '🎨',
      title: 'AEM & Content Management',
      tags: ['AEM-FED', 'AEM-EDS', 'Reusable Components', 'Templates', 'Client Libraries'],
      delayClass: ''
    },
    {
      icon: '🎯',
      title: 'Adobe Target & Analytics',
      tags: ['Adobe Target', 'Adobe Analytics', 'A/B Testing', 'Personalized Delivery', 'Event Tracking'],
      delayClass: 'd1'
    },
    {
      icon: '☕',
      title: 'Backend & APIs',
      tags: ['Java', 'Spring Boot', 'RESTful APIs', 'Backend Integration', 'Performance Tuning'],
      delayClass: 'd2'
    },
    {
      icon: '🗄️',
      title: 'Database & Storage',
      tags: ['MySQL', 'Spring Data JPA', 'Query Optimization', 'Role-Based Access (RBAC)'],
      delayClass: 'd1'
    },
    {
      icon: '💻',
      title: 'Frontend & UI',
      tags: ['HTML', 'CSS', 'JavaScript', 'UI Customization', 'Debugging'],
      delayClass: 'd2'
    },
    {
      icon: '⚙️',
      title: 'Methodology & Tools',
      tags: ['Agile Development', 'Git', 'Maven', 'Postman'],
      delayClass: 'd3'
    }
  ];

  return (
    <section className="sec" id="skills">
      <div className="sec-ey rv">
        <div className="sec-ey-line"></div>
        <span className="sec-ey-txt">Technical Arsenal</span>
      </div>
      <h2 className="rv">
        What I <span>Build With</span>
      </h2>
      <div className="sk-grid">
        {skillsData.map((sk, idx) => (
          <div key={idx} className={`sk-cell rv ${sk.delayClass}`}>
            <span className="sk-ic">{sk.icon}</span>
            <div className="sk-ttl">{sk.title}</div>
            <div className="sk-tags">
              {sk.tags.map((tag, tIdx) => (
                <span key={tIdx} className="sk-tag">
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
