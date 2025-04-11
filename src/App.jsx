import React from 'react';
import { Layout, Affix } from 'antd';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ResumeSection from './components/ResumeSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Affix offsetTop={0}>
        <HeaderSection />
      </Affix>
      <HeroSection />
      <Content className="content">
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </Content>
      <FooterSection />
    </Layout>
  );
}

export default App;
