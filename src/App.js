import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Send,
  ArrowUp
} from 'lucide-react';
import './App.css';

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      {/* Animated Background Elements */}
      <div className="hero-background">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
      </div>

      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          {/* Animated Character */}
          <div className="character-container">
            <div className="character-circle">
              <div className="character-inner">
                <Code className="character-icon" />
              </div>
            </div>
            {/* Floating Elements */}
            <div className="floating-dot floating-dot-1"></div>
            <div className="floating-dot floating-dot-2"></div>
          </div>

          <h1 className="hero-title">M Afzaal Hassan</h1>
          <h2 className="hero-subtitle">Full Stack Developer / React.js Enthusiast</h2>
          <p className="hero-description">
            Crafting exceptional digital experiences with modern web technologies
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">View My Work</button>
            <button className="btn-secondary">Contact Me</button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-inner">
          <div className="scroll-indicator-dot"></div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const skills = [
    { name: 'React.js', level: 95, icon: Code },
    { name: 'Node.js', level: 88, icon: Database },
    { name: 'JavaScript', level: 92, icon: Globe },
    { name: 'React Native', level: 85, icon: Smartphone },
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a passionate React.js Developer eager to kickstart my career in building
              modern and responsive web applications. I have hands-on experience with
              JavaScript, React.js, and front-end development, and I’m excited to learn,
              grow, and contribute to real-world projects.

            </p>
            <p className="about-paragraph">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Technolgoies</div>
              </div>
            </div>
          </div>

          <div className="skills-container">
            <h3 className="skills-title">Skills & Expertise</h3>
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-info">
                      <IconComponent className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },

    {
      title: "Calendar App",
      description: "A unique and stylish React app featuring Gregorian & Islamic calendar",
      image: "/React Calender.png", // ✅ Just reference the path
      tech: ["React", 'JavaScript'],
      github: "https://github.com/Afzaal162/Calenderapp",
      demo: "https://afzaal162.github.io/Calenderapp/"
    },



    {
      title: "Blogging Website",
      description: "A responsive blogging platform built with HTML, CSS, and JavaScript.",
      image: "/Blogging Website.png",
      tech: ["Html", "CSS" , "JavaScript"],
      github: "https://github.com/Afzaal162/H-Blogs",
      demo: "https://afzaal162.github.io/H-Blogs/"
    },
    {
      title: "Task Manager",
      description: "Smart task manager crafted with HTML, CSS, and JavaScript magic",
      image: "/Task Manager.png",
      tech: ["Html", "CSS" , "JavaScript"],
      github: "https://github.com/Afzaal162/Task-Managment",
      demo: "https://afzaal162.github.io/Task-Managment/"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <Github className="project-link-icon" />
                    </a>
                    <a href={project.demo} className="project-link">
                      <ExternalLink className="project-link-icon" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Resume Section Component
const ResumeSection = () => {
  return (
    <section className="resume-section">
      <div className="resume-background"></div>
      <div className="container">
        <div className="resume-content">
          <h2 className="section-title">Resume</h2>
          <div className="section-divider"></div>

          <p className="resume-description">
            Interested in my background and experience? Download my resume to learn more about my journey as a developer.
          </p>

          <button className="btn-primary">
            <Download className="btn-icon" />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Message sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Afzaal162', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/afzaalhassan/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:afzaalhassan162@gmail.com', label: 'Email' },
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="contact-form-title">Send Message</h3>
            <div className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="form-textarea"
                ></textarea>
              </div>
              <button onClick={handleSubmit} className="btn-primary btn-full">
                <Send className="btn-icon" />
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-content">
              <h3 className="contact-info-title">Get in Touch</h3>
              <p className="contact-info-description">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a key={index} href={social.href} className="social-link">
                    <div className="social-icon">
                      <IconComponent className="social-icon-svg" />
                    </div>
                    <span className="social-label">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">Afzaal Hassan</h3>
            <p className="footer-copyright">© 2025 All rights reserved.</p>
          </div>

          <div className="footer-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <button onClick={scrollToTop} className="scroll-to-top">
              <ArrowUp className="scroll-to-top-icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Projects', 'Resume', 'Contact'];

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            Afzaal<span className="nav-logo-accent">Dev</span>
          </div>

          {/* Desktop Menu */}
          <div className="nav-menu">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-toggle"
          >
            {isOpen ? <X className="nav-toggle-icon" /> : <Menu className="nav-toggle-icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="nav-mobile">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Main App Component
const App = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="app">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="resume">
        <ResumeSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;