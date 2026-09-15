import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_5slhl1t';
const TEMPLATE_ID = 'template_s39jl6j';
const PUBLIC_KEY = 'a4D6Tz6EDqMCr37ZR';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [btnState, setBtnState] = useState({ text: 'Send Message', icon: '✉', disabled: false, style: {} });

  useEffect(() => {
    // Initialize EmailJS with public key
    try {
      emailjs.init(PUBLIC_KEY);
    } catch (e) {
      console.warn('EmailJS init warning:', e);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    setBtnState({
      text: '⏳ Sending...',
      icon: '',
      disabled: true,
      style: { opacity: 0.75 }
    });

    const templateParams = {
      name: name,
      email: email,
      message: message,
      from_name: name,
      from_email: email,
      reply_to: email,
    };

    try {
      // 1. Try SDK send first
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      if (res.status === 200 || res.text === 'OK') {
        handleSuccess();
        return;
      }
      throw new Error(`EmailJS SDK status ${res.status}: ${res.text}`);
    } catch (sdkErr) {
      console.warn('EmailJS SDK failed, trying clean REST API fetch...', sdkErr);

      // 2. Exact REST API payload matching EmailJS spec
      try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,
            template_params: templateParams
          })
        });

        if (res.ok) {
          handleSuccess();
          return;
        }

        const errText = await res.text();
        throw new Error(errText || 'Failed to send message');
      } catch (restErr) {
        console.error('EmailJS REST Error:', restErr);
        handleError(restErr.message || sdkErr.message);
      }
    }
  };

  const handleSuccess = () => {
    setBtnState({
      text: '✅ Message Sent!',
      icon: '',
      disabled: false,
      style: { background: '#10b981', opacity: 1 }
    });
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setBtnState({ text: 'Send Message', icon: '✉', disabled: false, style: {} });
    }, 3500);
  };

  const handleError = (msg) => {
    setBtnState({
      text: '❌ Failed — Try Again',
      icon: '',
      disabled: false,
      style: { background: '#ef4444', opacity: 1 }
    });

    alert(
      `Email Error: ${msg}\n\nPlease verify in EmailJS Dashboard:\n1. Service ID: ${SERVICE_ID}\n2. Template ID: ${TEMPLATE_ID}\n3. Public Key: ${PUBLIC_KEY}`
    );

    setTimeout(() => {
      setBtnState({ text: 'Send Message', icon: '✉', disabled: false, style: {} });
    }, 3500);
  };

  return (
    <section className="sec" id="contact">
      <div className="sec-ey rv">
        <div className="sec-ey-line"></div>
        <span className="sec-ey-txt">Get In Touch</span>
      </div>
      <h2 className="rv">
        Let's <span>Work Together</span>
      </h2>
      <div className="contact-wrap">
        <div className="ct-left rv">
          <h3>Open to new opportunities</h3>
          <p>
            Whether you have a backend engineering role, a project needing clean API design, or just want to connect — drop a message and I'll respond within 24 hours.
          </p>
          <div className="ct-links">
            <a
              href="mailto:dhineshmuthuraman18@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Dhinesh%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
              className="ct-link"
            >
              <div className="ct-link-ic">✉</div>
              dhineshmuthuraman18@gmail.com
            </a>
            <a href="tel:+919080335964" className="ct-link">
              <div className="ct-link-ic">☎</div>
              +91 9080335964
            </a>
            <a
              href="https://www.linkedin.com/in/dhineshmuthuraman"
              target="_blank"
              rel="noreferrer"
              className="ct-link"
            >
              <div className="ct-link-ic">in</div>
              linkedin.com/in/dhineshmuthuraman
            </a>
          </div>
        </div>

        <div className="rv d1">
          <div className="form-card">
            <form onSubmit={sendMail}>
              <div className="fgrp">
                <label>Your Name</label>
                <input
                  type="text"
                  id="fn"
                  name="name"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="fgrp">
                <label>Email Address</label>
                <input
                  type="email"
                  id="fe"
                  name="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="fgrp">
                <label>Message</label>
                <textarea
                  id="fm"
                  name="message"
                  placeholder="Hi Dhinesh, I'd like to discuss a backend role..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-submit"
                disabled={btnState.disabled}
                style={btnState.style}
              >
                <span>{btnState.text}</span>
                {btnState.icon && <span>{btnState.icon}</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
