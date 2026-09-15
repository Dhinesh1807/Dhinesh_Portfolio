import TECHS from '../assets/techsData';

export default function TechMarquee() {
  const duplicatedTechs = [...TECHS, ...TECHS];

  return (
    <div className="mq-wrap">
      <div className="mq-hd">
        — My Technology Stack — Hover to zoom • Row hover pauses —
      </div>
      <div className="mq-fade-l"></div>
      <div className="mq-row">
        <div className="mq-track" id="mq">
          {duplicatedTechs.map((t, index) => (
            <div key={index} className="tc">
              <div className="tc-img">
                <img src={t.uri} alt={t.name} />
              </div>
              <span className="tc-nm">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mq-fade-r"></div>
    </div>
  );
}
