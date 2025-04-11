import React from 'react';
import { Card, Typography, Timeline } from 'antd';

const { Title, Paragraph } = Typography;

function ExperienceSection() {
  const experiences = [
    {
      company: 'myClassroom, Noida',
      role: 'Sr. Application Developer',
      duration: 'OCT 2021 - April 2025',
      description: [
        'Led development of React Native (Android) and React.js apps with Node.js, Django, and Firebase backend integrations.',
        'Worked on features like Maps, FCM, MoEngage, Analytics, CodePush, Sentry, and YOLO-based detection.',
        'Handled full-stack responsibilities across frontend, backend, and deployment with performance monitoring.',
      ],
    },
    {
      company: 'RDIAS, Pitampura',
      role: 'Application Developer (Android/iOS)',
      duration: 'July 2023 - April 2025',
      description: [
        'Handled design, development, and deployment of RDIAS and RDPSP React Native apps.',
        'Managed updates, cross-platform compatibility, and feature implementation for Android & iOS.',
      ],
    },
    {
      company: 'Ragpam Education Pvt. LTD, Faridabad',
      role: 'Android Developer',
      duration: 'FEB 2021 - OCT 2021',
      description: [
        'Worked on a Flutter app with full responsibility for UI design and deployment.',
        'Integrated features like live video streaming (Zoom SDK), Razorpay, test-series, and multi-role login (student, teacher, support).',
      ],
    },
    {
      company: 'UE Developer, Badarpur',
      role: 'Android Developer (Internship)',
      duration: '3-Month MCA Major Project Internship',
      description: [
        'Built Android app using Java and Firebase as backend.',
        'Gained hands-on experience in authentication, database integration, and app deployment.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <Card className="experience-card" bordered={false}>
        <Title level={2} className="experience-title">Experience</Title>
        <Timeline>
          {experiences.map((exp, index) => (
            <Timeline.Item key={index}>
              <Title level={4} className="experience-company">{exp.company}</Title>
              <Paragraph className="experience-role">{exp.role}</Paragraph>
              <Paragraph className="experience-duration">{exp.duration}</Paragraph>
              <ul className="experience-description">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </Timeline.Item>
          ))}
        </Timeline>
      </Card>
    </section>
  );
}

export default ExperienceSection;