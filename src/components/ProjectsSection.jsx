import React from 'react';
import { Card, Typography, List } from 'antd';

const { Title, Paragraph } = Typography;

function ProjectsSection() {
  const projects = [
    {
      name: 'MYCRM',
      tech: 'React, Redux, Razorpay, Zoom SDK, CI/CD Amplify',
      link: 'https://mycrm.myclassroom.digital/dashboard',
    },
    {
      name: 'Student Login',
      tech: 'React, Razorpay, Zoom SDK, HTML, CSS, Moengage, Analytics, CI/CD Amplify',
      link: 'https://student.myclassroom.digital/',
    },
    {
      name: 'Schedule Management',
      tech: 'React, HTML, CSS, Zoom Classes Upload to Vimeo',
      link: 'https://sm.zinedu.com/',
    },
    {
      name: 'Myclassroom (Android)',
      tech: 'React-Native, Razorpay, Zoom SDK, Redux, Moengage, Sentry, CodePush, FCM, Firebase, Local Sqlite DB, Api Calls',
      link: 'https://play.google.com/store/apps/details?id=com.myclassroom.digital&hl=en_IN',
    },
    {
      name: 'MyFaculty',
      tech: 'React-Native, Upload Files',
      link: 'https://play.google.com/store/apps/details?id=com.teacherapp.digital',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <Card className="projects-card" bordered={false}>
        <Title level={2} className="projects-title">Projects</Title>
        <List
          itemLayout="vertical"
          dataSource={projects}
          renderItem={(project) => (
            <List.Item className="project-item">
              <Title level={4} className="project-name">{project.name}</Title>
              <Paragraph className="project-tech"><strong>Technologies:</strong> {project.tech}</Paragraph>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </List.Item>
          )}
        />
      </Card>
    </section>
  );
}

export default ProjectsSection;