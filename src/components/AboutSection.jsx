import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <Card className="about-card" bordered={false}>
        <Title level={2} className="about-title">About Me</Title>
        <Paragraph className="about-description">
          I am a passionate and experienced Sr. Application Developer with expertise in building scalable and user-friendly applications. 
          My skill set spans across Android, iOS, React.js, React-Native, Flutter, Firebase, Node.js (Express), Django, and more. 
          I enjoy solving complex problems and delivering high-quality software solutions.
        </Paragraph>
        <Paragraph className="about-description">
          With a strong background in full-stack development, I have worked on various projects involving modern technologies like Redux, 
          Firebase, SQL, Python, and cloud platforms like Heroku, Netlify, and Vercel. I am always eager to learn and explore new tools 
          and frameworks to stay updated with the latest trends in the tech industry.
        </Paragraph>
      </Card>
    </section>
  );
}

export default AboutSection;