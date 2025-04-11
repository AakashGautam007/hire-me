import React from 'react';
import { Layout, Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

function HeaderSection() {
  return (
    <Header className="header">
      <div className="header-content">
        <Title level={2} className="header-title">Aakash Gautam</Title>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="social-links">
          <a href="https://github.com/AakashGautam007/" target="_blank" rel="noopener noreferrer">
            <GithubOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
          </a>
          <a href="https://www.linkedin.com/in/aakash-gautam-app-dev/" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined style={{ fontSize: '20px' }} />
          </a>
        </div>
      </div>
    </Header>
  );
}

export default HeaderSection;