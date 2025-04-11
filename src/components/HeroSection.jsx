import React from 'react';
import { Typography, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <Title level={1} className="hero-title glowing-name">Aakash Gautam</Title>
        <Paragraph className="hero-subtitle">Sr. Application Developer</Paragraph>
        <Paragraph className="hero-tech">
          Android, iOS, React.js, React-Native, Flutter, Firebase, Node.js (Express), Sequelize, SQL, Python, Yolo, Django, pgAdmin, Jira, HTML, CSS, Redux, Heroku, Netlify, Vercel, Xcode, Play-Console, App-Store-Connect
        </Paragraph>
        <div className="hero-links">
          <a href="https://github.com/AakashGautam007/" target="_blank" rel="noopener noreferrer">
            <Button type="primary" icon={<GithubOutlined />} size="large" className="hero-button">
              GitHub
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/aakash-gautam-app-dev/" target="_blank" rel="noopener noreferrer">
            <Button type="primary" icon={<LinkedinOutlined />} size="large" className="hero-button">
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;