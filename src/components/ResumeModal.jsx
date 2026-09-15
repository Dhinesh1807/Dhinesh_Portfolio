import { useEffect } from 'react';
import resumeBase64 from '../assets/resumeBase64';

export default function ResumeModal({ isOpen, onClose }) {
  const resumeUrl = '/Dhinesh_M_Resume.pdf';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-overlay active"
      id="resumeOverlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="resume-modal">
        <div className="resume-top">
          <h3>📄 Dhinesh M — Resume</h3>
          <div className="resume-actions">
            <a
              href={resumeUrl}
              download="Dhinesh_M_Resume.pdf"
              className="btn-download"
            >
              📥 Download PDF
            </a>
            <button
              className="btn-close-modal"
              onClick={onClose}
              title="Close Resume"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="resume-body">
          <iframe
            src={resumeUrl}
            title="Dhinesh M Resume PDF"
            onError={(e) => {
              // Fallback to base64 if static file fails
              e.currentTarget.src = resumeBase64;
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
