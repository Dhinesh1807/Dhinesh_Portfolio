import { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);
  const animatedRef = useRef(false);

  const statsData = [
    { target: 3, suffix: ' Yrs', label: 'Experience', delayClass: '' },
    { target: 3, suffix: '+', label: 'Enterprise Systems', delayClass: 'd1' },
    { target: 100, suffix: '%', label: 'AEM & Target/Analytics', delayClass: 'd2' },
    { target: 100, suffix: '%', label: 'Responsive Web UI', delayClass: 'd3' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            statsData.forEach((stat, idx) => {
              let start = 0;
              const duration = 1200; // ms
              const stepTime = 22;
              const steps = duration / stepTime;
              const increment = stat.target / steps;

              const timer = setInterval(() => {
                start += increment;
                if (start >= stat.target) {
                  start = stat.target;
                  clearInterval(timer);
                }
                setCounts((prev) => {
                  const copy = [...prev];
                  copy[idx] = Math.floor(start);
                  return copy;
                });
              }, stepTime);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-strip" id="about">
      <div className="stats-inner" ref={statsRef}>
        {statsData.map((stat, idx) => (
          <div key={idx} className={`stat-box rv ${stat.delayClass}`}>
            <div className="stat-n">
              {counts[idx]}
              {stat.suffix}
            </div>
            <div className="stat-l">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
