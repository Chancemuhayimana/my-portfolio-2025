import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { slide as Menu } from "react-burger-menu";
import emailjs from "@emailjs/browser";
import profileImage from "./assets/Pa.png";
import resumePDF from "./assets/resume.pdf";
import {
  FaArrowRight,
  FaCertificate,
  FaCogs,
  FaFacebook,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
  FaNetworkWired,
  FaPaintBrush,
  FaPhone,
  FaRobot,
  FaTiktok,
  FaVideo,
} from "react-icons/fa";
import { FaUserTie, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-scroll";

const roles = [
  {
    icon: <FaUserTie size={22} />,
    title: "Freelancer",
    description:
      "I build custom web applications and automation solutions for startups, founders, and local businesses.",
  },
  {
    icon: <FaYoutube size={22} />,
    title: "YouTube Tech",
    description:
      "I create practical tech content, coding walkthroughs, and tutorials to help people learn fast.",
  },
  {
    icon: <FaPaintBrush size={22} />,
    title: "UI/UX Designer",
    description:
      "I design clear interfaces and user flows that look modern and convert visitors into users.",
  },
  {
    icon: <FaLaptopCode size={22} />,
    title: "Full-Stack Developer",
    description:
      "I deliver performant, maintainable products with React, Node.js, APIs, and scalable architecture.",
  },
];

const services = [
  { icon: <FaLaptopCode size={28} />, title: "Web Development" },
  { icon: <FaRobot size={28} />, title: "AI & Chatbot Solutions" },
  { icon: <FaCogs size={28} />, title: "Automation & Integrations" },
  { icon: <FaNetworkWired size={28} />, title: "IT Support & Networking" },
  { icon: <FaVideo size={28} />, title: "Tech Content Production" },
];

const skillItems = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Java",
  "HTML/CSS",
  "Styled Components",
  "REST APIs",
  "MySQL",
  "MongoDB",
  "Git/GitHub",
  "UI/UX Design",
  "Problem Solving",
  "Team Collaboration",
];

const projectItems = [
  {
    href: "https://github.com/Chancemuhayimana/portfolio-vite",
    img: "/portifolio.png",
    alt: "Portfolio Website",
    title: "Portfolio Website",
    summary: "Modern personal portfolio focused on conversion and strong visual identity.",
    stack: "React, Vite, Styled Components",
  },
  {
    href: "https://github.com/Chancemuhayimana/",
    img: "/music-player.jpg",
    alt: "Music Player",
    title: "Music Player",
    summary: "Web music app with playlists and clean user experience.",
    stack: "React, Node.js, Express",
  },
  {
    href: "https://github.com/Chancemuhayimana/",
    img: "/quiz.jpg",
    alt: "AI Quiz Generator",
    title: "AI Quiz Generator",
    summary: "Dynamic question generator powered by AI models.",
    stack: "Python, Flask, OpenAI API",
  },
  {
    href: "https://github.com/Chancemuhayimana/",
    img: "/chatbot.jpg",
    alt: "Therapist Chatbot",
    title: "Therapist Chatbot",
    summary: "Conversational app built to provide guided support experiences.",
    stack: "Node.js, Dialogflow, Firebase",
  },
  {
    href: "https://github.com/Chancemuhayimana/",
    img: "/voting.jpg",
    alt: "Voting System",
    title: "Voting System",
    summary: "Secure online election workflow with role-based controls.",
    stack: "Java, Spring Boot, MySQL",
  },
  {
    href: "https://github.com/Chancemuhayimana/Employee-Management-System",
    img: "/employee.jpg",
    alt: "Employee Management System",
    title: "Employee Management",
    summary: "Admin dashboard for staff profiles, salaries, and leave tracking.",
    stack: "PHP, Laravel, Blade",
  },
  {
    href: "#",
    img: "/ecommerce.png",
    alt: "E-commerce Platform",
    title: "Faith Apparel E-commerce",
    summary: "Full checkout flow with catalog, cart, and conversion-focused product pages.",
    stack: "React, TypeScript, Node.js, Express, EmailJS",
  },
];

const heroTitleVariants = [
  "Professional Digital Products",
  "High-Impact Web Platforms",
  "Modern UI/UX Experiences",
  "AI-Powered Solutions",
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <Nav>
      <Container>
        <DesktopMenu>
          <Logo>MUHAYIMANA Chance</Logo>
          <NavLinks>
            <NavItem to="hero" smooth duration={500}>Home</NavItem>
            <NavItem to="roles" smooth duration={500}>Roles</NavItem>
            <NavItem to="services" smooth duration={500}>Services</NavItem>
            <NavItem to="projects" smooth duration={500}>Projects</NavItem>
            <NavItem to="education" smooth duration={500}>Education</NavItem>
            <NavItem to="contact" smooth duration={500}>Contact</NavItem>
          </NavLinks>
        </DesktopMenu>

        <MobileMenu>
          <Logo>Chance</Logo>
          <Menu
            right
            width={"78%"}
            isOpen={isMenuOpen}
            onStateChange={handleStateChange}
            onClose={closeMenu}
            disableAutoFocus
          >
            <button type="button" className="menu-close-btn" onClick={toggleMenu}>
              Close
            </button>
            <Link className="menu-item" to="hero" smooth duration={500} onClick={closeMenu}>Home</Link>
            <Link className="menu-item" to="roles" smooth duration={500} onClick={closeMenu}>Roles</Link>
            <Link className="menu-item" to="services" smooth duration={500} onClick={closeMenu}>Services</Link>
            <Link className="menu-item" to="projects" smooth duration={500} onClick={closeMenu}>Projects</Link>
            <Link className="menu-item" to="education" smooth duration={500} onClick={closeMenu}>Education</Link>
            <Link className="menu-item" to="contact" smooth duration={500} onClick={closeMenu}>Contact</Link>
          </Menu>
        </MobileMenu>
      </Container>
    </Nav>
  );
};

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = heroTitleVariants[titleIndex];
    const typingSpeed = isDeleting ? 45 : 90;
    const fullWordPause = 1300;
    const betweenWordsDelay = 260;

    let timer;

    if (!isDeleting && typedTitle === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), fullWordPause);
    } else if (isDeleting && typedTitle === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % heroTitleVariants.length);
      }, betweenWordsDelay);
    } else {
      timer = setTimeout(() => {
        setTypedTitle((prev) =>
          isDeleting
            ? currentTitle.slice(0, Math.max(prev.length - 1, 0))
            : currentTitle.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, titleIndex]);

  return (
    <HeroSection id="hero">
      <Container>
        <HeroGrid>
          <HeroText>
            <Pill>Available for Freelance & Remote Roles</Pill>
            <h1>
              I Design and Build{" "}
              <span>
                <RotatingText>{typedTitle}</RotatingText>
                <Cursor>|</Cursor>
              </span>
            </h1>
            <p>
              Full-stack developer and UI/UX-focused creator helping brands ship websites,
              AI-driven tools, and engaging tech experiences.
            </p>

            <RoleChips>
              <Chip>Freelancer</Chip>
              <Chip>YouTube Tech</Chip>
              <Chip>UI/UX Designer</Chip>
              <Chip>Software Engineer</Chip>
            </RoleChips>

            <CTA>
              <a href="#projects" className="primary">View Projects <FaArrowRight size={12} /></a>
              <a href={resumePDF} download="MUHAYIMANA_Chance_Resume.pdf">Download Resume</a>
              <a href="#contact">Hire Me</a>
            </CTA>

            <SocialLinks>
              <a href="tel:+250789344652" aria-label="Phone"><FaPhone size={22} /></a>
              <a href="https://github.com/Chancemuhayimana" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={22} /></a>
              <a href="https://linkedin.com/in/muhayimana-chance-developer" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={22} /></a>
              <a href="https://x.com/MuhayimanaChan2" target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter size={22} /></a>
              <a href="https://www.instagram.com/muhayimana.chance" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={22} /></a>
              <a href="https://www.facebook.com/muhayimana.chance" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook size={22} /></a>
              <a href="https://www.tiktok.com/@mchancerw" target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok size={22} /></a>
            </SocialLinks>
          </HeroText>

          <HeroVisual>
            <PhotoWrap>
              <ProfileImage src={profileImage} alt="MUHAYIMANA Chance" />
            </PhotoWrap>
            <StatsGrid>
              <StatCard>
                <h3>3+</h3>
                <p>Years Building</p>
              </StatCard>
              <StatCard>
                <h3>20+</h3>
                <p>Completed Projects</p>
              </StatCard>
              <StatCard>
                <h3>4</h3>
                <p>Professional Roles</p>
              </StatCard>
            </StatsGrid>
          </HeroVisual>
        </HeroGrid>
      </Container>
    </HeroSection>
  );
};

const ProfessionalRoles = () => (
  <Section id="roles">
    <Container>
      <SectionTitle>Professional Roles</SectionTitle>
      <SectionLead>
        I combine engineering, design, and content to deliver products that are useful, polished, and scalable.
      </SectionLead>
      <CardGrid>
        {roles.map((role) => (
          <Card key={role.title}>
            <IconBubble>{role.icon}</IconBubble>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
          </Card>
        ))}
      </CardGrid>
    </Container>
  </Section>
);

const Services = () => (
  <Section id="services" tone="light">
    <Container>
      <SectionTitle>Services</SectionTitle>
      <SectionLead>
        End-to-end support from concept and design to production deployment.
      </SectionLead>
      <CardGrid>
        {services.map((service) => (
          <Card key={service.title}>
            <IconBubble>{service.icon}</IconBubble>
            <h3>{service.title}</h3>
          </Card>
        ))}
      </CardGrid>
    </Container>
  </Section>
);

const Skills = () => (
  <Section id="skills">
    <Container>
      <SectionTitle>Tech Stack</SectionTitle>
      <SkillCloud>
        {skillItems.map((skill) => (
          <SkillPill key={skill}>{skill}</SkillPill>
        ))}
      </SkillCloud>
    </Container>
  </Section>
);

const Projects = () => (
  <Section id="projects" tone="light">
    <Container>
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectGrid>
        {projectItems.map((project) => (
          <ProjectCard key={project.title}>
            <a href={project.href} target="_blank" rel="noreferrer">
              <img src={project.img} alt={project.alt} />
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <small>{project.stack}</small>
            </a>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Container>
  </Section>
);

const Education = () => (
  <Section id="education">
    <Container>
      <SectionTitle>Education & Certificates</SectionTitle>
      <EduGrid>
        <EduCard>
          <FaGraduationCap size={30} />
          <h3>Bachelor of Technology in IT</h3>
          <p className="institution">RP HUYE (Rwanda Polytechnic)</p>
          <p className="year">2022 - 2025</p>
          <p className="details">Data Structures, Databases, Web Development, and AI fundamentals.</p>
        </EduCard>

        <EduCard>
          <FaCertificate size={30} />
          <h3>Introduction to Data Science</h3>
          <p className="institution">Cisco</p>
          <p className="year">Issued: Feb 2026</p>
        </EduCard>

      <EduCard>
        <FaCertificate size={36} color="#0af" />
        <h3>Virtual Assistant</h3>
        <p className="institution">ALX</p>
        <p className="year">Issued: October 2024</p>
      </EduCard>

        <EduCard>
          <FaCertificate size={30} />
          <h3>Android Fundamentals</h3>
          <p className="institution">Udacity</p>
          <p className="year">Issued: February 2025</p>
        </EduCard>

        <EduCard>
          <h3>+more</h3>
        </EduCard>
      </EduGrid>
    </Container>
  </Section>
);

const Contact = () => {
  const form = useRef(null);

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
    <Section id="contact" tone="light">
      <Container>
        <SectionTitle>Let&apos;s Work Together</SectionTitle>
        <SectionLead>
          Share your project idea and I will reply with a clear plan and timeline.
        </SectionLead>
        <Form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </Form>
      </Container>
    </Section>
  );
};

const Footer = () => (
  <FooterBar>
    <Container>
      <p>{new Date().getFullYear()} MUHAYIMANA Chance. All rights reserved.</p>
    </Container>
  </FooterBar>
);

export default function Home() {
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
      <GlobalStyle />
      <Navbar />
      <Hero />
      <ProfessionalRoles />
      <Services />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const blink = keyframes`
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #001b22;
    --bg-soft: #003845;
    --surface: #004c5e;
    --surface-soft: #005f73;
    --text: #e7f6f4;
    --muted: #9cc9c3;
    --accent: #005f73;
    --accent-soft: #0a9396;
    --stroke: rgba(255, 255, 255, 0.12);
    --shadow: rgba(3, 9, 20, 0.35);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background:
      radial-gradient(circle at top right, rgba(10, 147, 150, 0.18), transparent 35%),
      radial-gradient(circle at left, rgba(0, 95, 115, 0.24), transparent 30%),
      var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
  }

  h1, h2, h3 {
    line-height: 1.2;
    letter-spacing: 0.2px;
  }

  a {
    color: inherit;
  }

  #root {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  iframe[src*="botpress"],
  iframe[src*="bpcontent"],
  [id*="bp-web-widget"],
  [id*="botpress"],
  [class*="bpWebchat"],
  [class*="botpress"] {
    z-index: 1100 !important;
  }
`;

const Container = styled.div`
  width: min(1120px, 92%);
  margin: 0 auto;
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background: rgba(10, 21, 38, 0.82);
  border-bottom: 1px solid var(--stroke);
  animation: ${fadeUp} 420ms ease;
`;

const Logo = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--accent);
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;

  @media (max-width: 860px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const NavItem = styled(Link)`
  color: var(--muted);
  cursor: pointer;
  font-size: 0.95rem;
  transition: color 0.25s ease;

  &:hover {
    color: var(--text);
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 860px) {
    iframe[src*="botpress"],
    iframe[src*="bpcontent"],
    [id*="bp-web-widget"],
    [id*="botpress"],
    [class*="bpWebchat"],
    [class*="botpress"] {
      right: 12px !important;
      left: auto !important;
      bottom: 12px !important;
      max-width: calc(100vw - 24px) !important;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70px;

    .bm-burger-button {
      position: fixed;
      width: 28px;
      height: 22px;
      right: 16px;
      top: 22px;
    }

    .bm-burger-bars {
      background: var(--accent);
      border-radius: 2px;
    }

    .bm-cross {
      background: var(--text);
    }

    .bm-cross-button {
      top: 16px !important;
      right: 16px !important;
    }

    .bm-menu-wrap {
      position: fixed !important;
      top: 0 !important;
      right: 0 !important;
      width: min(82vw, 320px) !important;
      height: 100vh !important;
      z-index: 1300 !important;
    }

    .bm-menu {
      background: rgba(0, 27, 34, 0.82);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-left: 1px solid rgba(255, 255, 255, 0.16);
      padding: 1.1rem 1rem 1.5rem;
      font-size: 1rem;
      overflow-y: auto;
    }

    .bm-overlay {
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: rgba(0, 0, 0, 0.38) !important;
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      z-index: 1200 !important;
    }

    .bm-item-list {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      padding-top: 0.2rem;
    }

    .bm-item {
      display: block !important;
    }

    .menu-close-btn {
      align-self: flex-end;
      border: 1px solid var(--stroke);
      background: rgba(255, 255, 255, 0.06);
      color: var(--text);
      border-radius: 8px;
      padding: 0.4rem 0.7rem;
      font: inherit;
      cursor: pointer;
      margin-bottom: 0.3rem;
    }

    .menu-item {
      display: block;
      padding: 0.85em 0.75em;
      color: var(--text);
      text-decoration: none;
      border: 1px solid transparent;
      border-radius: 10px;
    }

    .menu-item:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.16);
    }
  }
`;

const HeroSection = styled.section`
  padding: 4.5rem 0 3.5rem;
`;

const HeroGrid = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1.3fr 1fr;
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const HeroText = styled.div`
  animation: ${fadeUp} 0.5s ease;

  h1 {
    font-size: clamp(2rem, 4vw, 3.4rem);
    margin: 0.95rem 0 0.8rem;
  }

  h1 span {
    color: var(--accent);
  }

  p {
    color: var(--muted);
    max-width: 60ch;
  }
`;

const HeroVisual = styled.div`
  animation: ${fadeUp} 0.65s ease;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid var(--stroke);
  color: var(--accent-soft);
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-size: 0.82rem;
  letter-spacing: 0.3px;
`;

const RoleChips = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Chip = styled.span`
  border: 1px solid var(--stroke);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  border-radius: 999px;
  padding: 0.35rem 0.78rem;
  font-size: 0.82rem;
`;

const RotatingText = styled.span`
  display: inline-block;
  min-height: 1.1em;
`;

const Cursor = styled.span`
  margin-left: 0.2rem;
  opacity: 0.8;
  animation: ${blink} 1s steps(1) infinite;
`;

const CTA = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-top: 1.3rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.72rem 1.05rem;
    border-radius: 10px;
    text-decoration: none;
    color: var(--text);
    border: 1px solid var(--stroke);
    background: rgba(255, 255, 255, 0.02);
    transition: all 0.25s ease;
  }

  a:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.25);
  }

  .primary {
    background: var(--accent);
    color: var(--text);
    border-color: transparent;
    font-weight: 700;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;

  a {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    border: 1px solid var(--stroke);
    color: var(--text);
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.02);
  }

  a:hover {
    color: var(--text);
    background: var(--accent);
    border-color: var(--accent);
  }
`;

const PhotoWrap = styled.div`
  border-radius: 18px;
  background: linear-gradient(160deg, rgba(10, 147, 150, 0.2), rgba(255, 255, 255, 0.04));
  border: 1px solid var(--stroke);
  padding: 0.8rem;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-height: 430px;
  object-fit: cover;
  border-radius: 14px;
`;

const StatsGrid = styled.div`
  margin-top: 0.9rem;
  display: grid;
  gap: 0.65rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  padding: 0.8rem;
  border: 1px solid var(--stroke);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  text-align: center;

  h3 {
    color: var(--accent);
    font-size: 1.2rem;
  }

  p {
    color: var(--muted);
    font-size: 0.82rem;
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  background: ${({ tone }) => (tone === "light" ? "rgba(255, 255, 255, 0.02)" : "transparent")};
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.6rem, 2.8vw, 2.3rem);
  text-align: center;
  color: var(--text);
`;

const SectionLead = styled.p`
  text-align: center;
  color: var(--muted);
  margin: 0.7rem auto 1.8rem;
  max-width: 68ch;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
`;

const Card = styled.article`
  border: 1px solid var(--stroke);
  border-radius: 14px;
  padding: 1.15rem;
  background: var(--surface);
  box-shadow: 0 10px 24px var(--shadow);
  transition: transform 0.25s ease, border-color 0.25s ease;

  h3 {
    margin: 0.65rem 0 0.4rem;
  }

  p {
    color: var(--muted);
    font-size: 0.93rem;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 95, 115, 0.6);
  }
`;

const IconBubble = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-grid;
  place-items: center;
  color: var(--text);
  background: linear-gradient(135deg, var(--accent), #0a9396);
`;

const SkillCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: center;
`;

const SkillPill = styled.span`
  border: 1px solid var(--stroke);
  background: var(--surface);
  border-radius: 999px;
  padding: 0.48rem 0.85rem;
  font-size: 0.9rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
`;

const ProjectCard = styled.article`
  border: 1px solid var(--stroke);
  border-radius: 14px;
  overflow: hidden;
  background: var(--surface-soft);
  transition: transform 0.25s ease, border-color 0.25s ease;

  a {
    display: block;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.04rem;
    margin: 0.9rem 0.9rem 0.45rem;
  }

  p {
    margin: 0 0.9rem 0.55rem;
    color: var(--muted);
    font-size: 0.92rem;
  }

  small {
    display: block;
    margin: 0 0.9rem 1rem;
    color: var(--accent-soft);
    font-size: 0.83rem;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 95, 115, 0.6);
  }
`;

const EduGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

const EduCard = styled.article`
  border: 1px solid var(--stroke);
  border-radius: 14px;
  background: var(--surface);
  padding: 1rem;

  svg {
    color: var(--accent);
  }

  h3 {
    margin: 0.8rem 0 0.45rem;
    font-size: 1.04rem;
  }

  .institution,
  .details {
    color: var(--muted);
    font-size: 0.9rem;
  }

  .year {
    color: var(--accent-soft);
    font-size: 0.88rem;
    margin: 0.3rem 0 0.45rem;
  }
`;

const Form = styled.form`
  max-width: 620px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  input,
  textarea {
    border: 1px solid var(--stroke);
    border-radius: 10px;
    padding: 0.86rem 0.95rem;
    background: rgba(255, 255, 255, 0.03);
    color: var(--text);
    font: inherit;
  }

  textarea {
    min-height: 138px;
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--muted);
  }

  button {
    border: 0;
    border-radius: 10px;
    padding: 0.82rem 1rem;
    background: var(--accent);
    color: var(--text);
    cursor: pointer;
    font-weight: 700;
  }
`;

const FooterBar = styled.footer`
  border-top: 1px solid var(--stroke);
  background: rgba(5, 12, 22, 0.7);
  padding: 1rem 0;

  p {
    color: var(--muted);
    text-align: center;
    font-size: 0.9rem;
  }
`;
