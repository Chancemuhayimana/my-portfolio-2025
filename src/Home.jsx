// src/App.jsx
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import emailjs from "@emailjs/browser";
import profileImage from "./assets/my-photo.jpg";
import resumePDF from "../resume.pdf";
import {
  FaLaptopCode,
  FaRobot,
  FaNetworkWired,
  FaCogs,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { FaPeopleGroup, FaXTwitter } from "react-icons/fa6";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

// ---------- NAVBAR ----------
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Nav>
      <DesktopMenu>
        <Logo>MUHAYIMANA Chance</Logo>
        <NavLinks>
          <NavItem to="hero" smooth>Home</NavItem>
          <NavItem to="services" smooth>Services</NavItem>
          <NavItem to="skills" smooth>Skills</NavItem>
          <NavItem to="projects" smooth>Projects</NavItem>
          <NavItem to="education" smooth>Education</NavItem>
          <NavItem to="contact" smooth>Contact</NavItem>
        </NavLinks>
      </DesktopMenu>

      <MobileMenu>
        <Menu right isOpen={isMenuOpen} onStateChange={handleStateChange}>
          <Link className="menu-item" to="hero" smooth onClick={closeMenu}>Home</Link>
          <Link className="menu-item" to="services" smooth onClick={closeMenu}>Services</Link>
          <Link className="menu-item" to="skills" smooth onClick={closeMenu}>Skills</Link>
          <Link className="menu-item" to="projects" smooth onClick={closeMenu}>Projects</Link>
          <Link className="menu-item" to="education" smooth onClick={closeMenu}>Education</Link>
          <Link className="menu-item" to="contact" smooth onClick={closeMenu}>Contact</Link>
        </Menu>
      </MobileMenu>
    </Nav>
  );
};

// ---------- HERO ----------
const Hero = () => (
  <Section id="hero" dark>
    <HeroContent>
      <ProfileImage src={profileImage} alt="Profile" />
      <h1>Hello, I’m <span>Chance</span></h1>
      <p>I Build Scalable Web Apps, AI Solutions & Smart IT Systems.</p>

      <SocialLinks>
        <a href="tel:+250789344652"><FaPhone size={28} /></a>
        <a href="https://github.com/Chancemuhayimana" target="_blank" rel="noreferrer"><FaGithub size={28} /></a>
        <a href="https://linkedin.com/in/muhayimana-chance-developer" target="_blank" rel="noreferrer"><FaLinkedin size={28} /></a>
        <a href="https://x.com/MuhayimanaChan2" target="_blank" rel="noreferrer"><FaXTwitter size={28} /></a>
        <a href="https://www.instagram.com/mchancerw" target="_blank" rel="noreferrer"><FaInstagram size={28} /></a>
        <a href="https://www.facebook.com/muhayimana.chance" target="_blank" rel="noreferrer"><FaFacebook size={28} /></a>
        <a href="https://www.tiktok.com/@mchancerw" target="_blank" rel="noreferrer"><FaTiktok size={28} /></a>
      </SocialLinks>

      <CTA>
        <a href="#projects">View Projects</a>
        <a href={resumePDF} download="MUHAYIMANA_Chance_Resume.pdf">View Resume</a>
        <a href="#contact" className="primary">Hire Me</a>
      </CTA>
    </HeroContent>
  </Section>
);

// ---------- SERVICES ----------
const Services = () => (
  <Section id="services">
    <h2>What I Do</h2>
    <CardGrid>
      <Card><FaLaptopCode size={40} /> <h3>Web Development</h3></Card>
      <Card><FaRobot size={40} /> <h3>AI & Chatbot Development</h3></Card>
      <Card><FaCogs size={40} /> <h3>IoT & Automation</h3></Card>
      <Card><FaNetworkWired size={40} /> <h3>IT Support / Networking</h3></Card>
      <Card><FaPhone size={40} /> <h3>Virtual Assistant</h3></Card>
    </CardGrid>
  </Section>
);

// ---------- SKILLS ----------
const Skills = () => (
  <Section id="skills" dark>
    <h2>Languages & Skills</h2>
    <CardGrid>
      <Card>Python</Card>
      <Card>JavaScript</Card>
      <Card>Java</Card>
      <Card>HTML / CSS</Card>
      <Card>React</Card>
      <Card>Node.js</Card>
      <Card>MySQL</Card>
      <Card>MongoDB</Card>
      <Card>Git / GitHub</Card>
      <Card>Problem-Solving & Debugging</Card>
      <Card>Team Management</Card>
      <Card>Adaptive</Card>
      <Card>Able to Work Under Pressure</Card>
    </CardGrid>
  </Section>
);

// ---------- PROJECTS ----------
const Projects = () => (
  <Section id="projects">
    <h2>Projects</h2>
    <CardGrid>
      <ProjectCard>
        <a href="https://github.com/Chancemuhayimana/portfolio-vite" target="_blank" rel="noreferrer">
          <img src="/portifolio.png" alt="Portfolio Website" />
          <h3>💼 Portfolio Website</h3>
          <p>Responsive personal portfolio</p>
          <p>Tech: React, Vite, styled-components</p>
        </a>
      </ProjectCard>

      <ProjectCard>
        <a href="https://github.com/Chancemuhayimana/Music-Player" target="_blank" rel="noreferrer">
          <img src="/music-player.jpg" alt="Music Player" />
          <h3>🎵 Music Player</h3>
          <p>Web-based player with playlists</p>
          <p>Tech: React, Node.js, Express</p>
        </a>
      </ProjectCard>

      <ProjectCard>
        <a href="https://github.com/Chancemuhayimana/AI-Quiz-Generator" target="_blank" rel="noreferrer">
          <img src="/quiz.jpg" alt="AI Quiz Generator" />
          <h3>❓ AI Quiz Generator</h3>
          <p>Dynamic quiz app with AI</p>
          <p>Tech: Python, Flask, OpenAI API</p>
        </a>
      </ProjectCard>

      <ProjectCard>
        <a href="https://github.com/Chancemuhayimana/Therapist-Chatbot" target="_blank" rel="noreferrer">
          <img src="/chatbot.jpg" alt="Therapist Chatbot" />
          <h3>🧠 Therapist Chatbot</h3>
          <p>AI-powered mental health bot</p>
          <p>Tech: Node.js, Dialogflow, Firebase</p>
        </a>
      </ProjectCard>

      <ProjectCard>
        <a href="https://github.com/Chancemuhayimana/Online-Voting-System" target="_blank" rel="noreferrer">
          <img src="/voting.jpg" alt="Voting System" />
          <h3>🗳️ Voting System</h3>
          <p>Secure online voting platform</p>
          <p>Tech: Java, Spring Boot, MySQL</p>
        </a>
      </ProjectCard>

      <ProjectCard>
        <a href="https://github.com/Chancemuhayimana/Employee-Management-System" target="_blank" rel="noreferrer">
          <img src="/employee.jpg" alt="Employee Management System" />
          <h3><FaPeopleGroup style={{ verticalAlign: "middle", marginRight: 8 }} /> Employee Management</h3>
          <p>Managing employee salaries & leaves</p>
          <p>Tech: PHP, Laravel, Blade</p>
        </a>
      </ProjectCard>

      <ProjectCard>
        <a href="#" target="_blank" rel="noreferrer">
          <img src="/ecommerce.png" alt="E-commerce Platform" />
          <h3>🛍️✝️ Full-Stack Store for a Faith-Based Clothing Brand</h3>
          <p>A complete e-commerce web application built for a Christian apparel brand.
             It features a dynamic product catalog with search, a client-side shopping cart,
             a multi-step checkout with live currency conversion, and an admin-ready interface.</p>
          <p>Tech: React, TypeScript, Node.js, Express, React Context API, EmailJS</p>
        </a>
      </ProjectCard>
    </CardGrid>
  </Section>
);

// ---------- EDUCATION ----------
const Education = () => (
  <Section id="education" dark>
    <h2>🎓 Education & Certificates</h2>
    <EduGrid>
      <EduCard>
        <FaGraduationCap size={36} color="#0af" />
        <h3>Bachelor of Technology in IT</h3>
        <p className="institution">RP HUYE (Rwanda Polytechnic)</p>
        <p className="year">2022 - 2025</p>
        <p className="details">Relevant coursework: Data Structures & Algorithms, Database Management, Web Development, AI Fundamentals.</p>
      </EduCard>

      <EduCard>
        <FaCertificate size={36} color="#0af" />
        <h3>AI Career Essentials</h3>
        <p className="institution">ALX</p>
        <p className="year">Issued: May 2024</p>
      </EduCard>

      <EduCard>
        <FaCertificate size={36} color="#0af" />
        <h3>Virtual Assistant</h3>
        <p className="institution">ALX</p>
        <p className="year">Issued: October 2024</p>
      </EduCard>

      <EduCard>
        <FaCertificate size={36} color="#0af" />
        <h3>Android Fundamentals</h3>
        <p className="institution">Udacity</p>
        <p className="year">Issued: February 2025</p>
      </EduCard>
    </EduGrid>
  </Section>
);

// ---------- CONTACT ----------
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_alj9fvb", "template_ssj2mzl", form.current, {
        publicKey: "G8wckNRYvYEbYqPxj",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert(`Failed to send the message. Error: ${error.text}`);
        }
      );
  };

  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </Form>
    </Section>
  );
};


// ---------- FOOTER ----------
const Footer = () => (
  <FooterBar> 
    <p>© {new Date().getFullYear()} MUHAYIMANA Chance. All rights reserved.</p>
  </FooterBar>
);

// ---------- MAIN APP ----------
export default function App() {
  useEffect(() => {
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    injectScript.async = true;

    const configScript = document.createElement("script");
    configScript.src = "https://files.bpcontent.cloud/2025/08/21/12/20250821121528-USRLBN5M.js";
    configScript.defer = true;

    injectScript.onload = () => document.body.appendChild(configScript);
    document.body.appendChild(injectScript);

    return () => {
      if (injectScript.parentNode) document.body.removeChild(injectScript);
      if (configScript.parentNode) document.body.removeChild(configScript);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

// ---------- STYLES ----------
const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #111;
  padding: 1rem 2rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #0af;
  font-weight: 700;
`;

const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) { display: none; }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  &:hover { color: #0af; }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) { display: block; }
  .bm-burger-button { position: fixed; width: 30px; height: 25px; right: 2rem; top: 1.25rem; }
  .bm-burger-bars { background: #0af; }
  .bm-cross { background: #fff; }
  .bm-menu { background: #111; padding: 2.5em 1.5em 0; font-size: 1.2em; }
  .menu-item { padding: 0.8em; color: #fff; text-decoration: none; }
  .menu-item:hover { color: #0af; }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  background: ${({ dark }) =>
    dark
      ? "linear-gradient(135deg, #111, #222)"
      : "linear-gradient(135deg, #0a0a0a, #1a1a1a)"};
  color: #fff;

  h2 {
    margin-bottom: 2rem;
    font-size: 2.4rem;
    color: #0af;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: auto;
  h1 { font-size: 3rem; line-height: 1.1; }
  span { color: #0af; }
  p { margin: 1rem 0; color: #ccc; }
`;

const ProfileImage = styled.img`
  width: 160px; height: 160px; border-radius: 50%;
  margin-bottom: 1rem; border: 3px solid #0af;
  box-shadow: 0 0 20px rgba(0, 170, 255, 0.5);
  object-fit: cover;
`;

const SocialLinks = styled.div`
  margin: 1rem 0; display: flex; justify-content: center; gap: 1.2rem;
  a { color: #fff; transition: 0.3s; }
  a:hover { color: #0af; transform: scale(1.1); }
`;

const CTA = styled.div`
  margin-top: 1rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;
  a { padding: 0.8rem 1.5rem; border-radius: 30px; background: #333; color: #fff; text-decoration: none; transition: 0.3s; }
  a:hover { background: #0af; color: #000; }
  .primary { background: #0af; color: #000; font-weight: 700; }
`;

const CardGrid = styled.div`
  display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const Card = styled.div`
  background: #1c1c1c; padding: 2rem; border-radius: 12px; color: #fff;
  box-shadow: 0 6px 14px rgba(0,0,0,.35);
  transition: transform .3s, box-shadow .3s, border .3s;
  border: 1px solid transparent;
  h3 { margin-top: .75rem; }
  &:hover { transform: translateY(-6px); box-shadow: 0 14px 26px rgba(0,170,255,.18); border-color: rgba(0,170,255,.25); }
`;

const ProjectCard = styled.div`
  background: #1c1c1c; padding: 1rem; border-radius: 12px; transition: transform .3s, box-shadow .3s;
  img { width: 100%; height: 180px; border-radius: 8px; object-fit: cover; margin-bottom: .5rem; }
  h3 { margin: .5rem 0; color: #0af; display:flex; align-items:center; gap:.4rem; }
  p { font-size: .9rem; color: #ccc; }
  &:hover { transform: translateY(-6px); box-shadow: 0 10px 20px rgba(0,170,255,.2); }
  a { color: inherit; text-decoration: none; display:block; }
`;

const EduGrid = styled.div`
  display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const EduCard = styled.div`
  background: rgba(32,32,32,.96); padding: 2rem; border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,.45); text-align: left; transition: transform .3s, box-shadow .3s, border .3s;
  border: 1px solid transparent;
  h3 { margin-top: 1rem; font-size: 1.1rem; color: #fff; }
  .institution { font-size: .95rem; color: #bbb; margin: .3rem 0; }
  .year { font-size: .92rem; color: #0af; font-weight: 600; margin-bottom: .6rem; }
  .details { font-size: .9rem; color: #ddd; line-height: 1.45; }
  &:hover { transform: translateY(-6px); box-shadow: 0 14px 26px rgba(0,170,255,.18); border-color: rgba(0,170,255,.25); }
`;

const Form = styled.form`
  display: flex; flex-direction: column; gap: 1rem; max-width: 520px; margin: auto;
  input, textarea { padding: .9rem 1rem; border-radius: 10px; border: 1px solid #2a2a2a; background:#0f0f0f; color:#fff; }
  textarea { min-height: 140px; resize: vertical; }
  input::placeholder, textarea::placeholder { color:#8a8a8a; }
  button { padding: 1rem; background: #0af; border: none; border-radius: 30px; font-weight: 700; cursor: pointer; color:#000; }
  button:hover { filter: brightness(1.05); }
`;

const FooterBar = styled.footer`
  background: #000; text-align: center; padding: 1rem; color: #888;
`;
