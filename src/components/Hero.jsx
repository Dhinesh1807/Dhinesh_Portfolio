import { useState, useEffect } from 'react';
import profileBase64 from '../assets/profileBase64';

export default function Hero({ onOpenResume }) {
  const roles = [
    'Java FullStack Developer',
    'AEM Developer (FED / EDS)',
    'Adobe Target & Analytics Specialist',
    'Spring Boot & REST API Expert'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2400);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 38);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typedText = roles[roleIndex].substring(0, charIndex);

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div>
          <div className="profile-wrap rv">
            <div className="profile-ring1"></div>
            <div className="profile-ring2"></div>
            <div className="profile-ring3"></div>
            <div className="profile-img">
              <img src={profileBase64} alt="Dhinesh M" />
            </div>
            <div className="profile-badge">3 YRS EXP</div>
            <div className="profile-dot1"></div>
            <div className="profile-dot2"></div>
            <div className="profile-dot3"></div>

            {/* Floating Tech Pills */}
            <div className="float-pill fp1"><span>☕</span> Java</div>
            <div className="float-pill fp2"><span>⚡</span> Spring Boot</div>
            <div className="float-pill fp3"><span>🔴</span> AEM</div>
            <div className="float-pill fp4"><span>🎯</span> Adobe Target</div>
            <div className="float-pill fp5"><span>📊</span> Analytics</div>
            <div className="float-pill fp6"><span>🐬</span> MySQL</div>
          </div>

          <div className="h-pre rv">
            <div className="h-pre-line"></div>
            <span className="h-pre-text">Java FullStack Developer</span>
          </div>

          <h1 className="h-name rv d1">
            <span className="ln1">Hello, I'm</span>
            <span className="ln2">Dhinesh M</span>
          </h1>

          <p className="h-role rv d1">
            <span className="h-typed" id="typed">{typedText}</span>
            <span className="h-cur"></span>
          </p>

          <p className="h-desc rv d2">
            <b>3 years</b> of professional experience as a <b>Java FullStack Developer</b> in <b>Adobe Experience Manager (AEM)</b>, including AEM-FED, AEM-EDS, reusable component development, templates, client libraries, and responsive web experiences. Experienced with <b>Adobe Target</b> and <b>Analytics integration</b>, Java, Spring Boot, RESTful APIs, and MySQL.
          </p>

          <div className="h-btns rv d3">
            <a href="#projects" className="btn-main" onClick={(e) => handleNavClick(e, 'projects')}>
              <span>View My Work</span>
              <span>↓</span>
            </a>
            <a href="#contact" className="btn-sec" onClick={(e) => handleNavClick(e, 'contact')}>
              Get in Touch <span>→</span>
            </a>
          </div>

          <div className="h-social rv d4">
            <a
              href="mailto:dhineshmuthuraman18@gmail.com?subject=Hello%20Dhinesh%20-%20Portfolio%20Inquiry&body=Hi%20Dhinesh%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
              className="soc-btn"
              title="Email"
              target="_blank"
              rel="noreferrer"
            >
              ✉
            </a>
            <a
              href="https://www.linkedin.com/in/dhineshmuthuraman"
              target="_blank"
              rel="noreferrer"
              className="soc-btn"
              title="LinkedIn"
            >
              in
            </a>
            <a href="tel:+919080335964" className="soc-btn" title="Phone">
              ☎
            </a>
          </div>
        </div>

        {/* Right - IDE JSON Card */}
        <div className="rv d2">
          <div className="h-card">
            <div className="h-card-top">
              <div className="wdot wr"></div>
              <div className="wdot wy"></div>
              <div className="wdot wg"></div>
              <span className="wtab">profile.json</span>
            </div>
            <div className="h-card-body">
              <div><span className="l-b">&#123;</span></div>
              <div>&nbsp;&nbsp;<span className="l-k">"name"</span><span className="l-b">:</span> <span className="l-s">"Dhinesh M"</span><span className="l-b">,</span></div>
              <div>&nbsp;&nbsp;<span className="l-k">"title"</span><span className="l-b">:</span> <span className="l-s">"Java FullStack Developer"</span><span className="l-b">,</span></div>
              <div>&nbsp;&nbsp;<span className="l-k">"exp"</span><span className="l-b">:</span> <span className="l-s">"3 years"</span><span className="l-b">,</span> <span className="l-c">// professional experience</span></div>
              <div>&nbsp;&nbsp;<span className="l-k">"company"</span><span className="l-b">:</span> <span className="l-s">"Aatmia Digital Marketing &amp; Security"</span><span className="l-b">,</span></div>
              <div>&nbsp;&nbsp;<span className="l-k">"expertise"</span><span className="l-b">: [</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="l-a">"AEM-FED"</span><span className="l-b">,</span> <span className="l-a">"AEM-EDS"</span><span class="l-b">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="l-a">"Adobe Target"</span><span className="l-b">,</span> <span className="l-a">"Adobe Analytics"</span><span className="l-b">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="l-a">"Java"</span><span className="l-b">,</span> <span className="l-a">"Spring Boot"</span><span className="l-b">,</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="l-a">"RESTful APIs"</span><span className="l-b">,</span> <span className="l-a">"MySQL"</span></div>
              <div>&nbsp;&nbsp;<span className="l-b">],</span></div>
              <div>&nbsp;&nbsp;<span className="l-k">"status"</span><span className="l-b">:</span> <span className="l-v">"available_for_opportunities"</span> <span className="l-cur"></span></div>
              <div><span className="l-b">&#125;</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
