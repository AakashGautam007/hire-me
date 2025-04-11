import React from 'react';
import { Card, Typography, Tag } from 'antd';

const { Title } = Typography;

function SkillsSection() {
  const skills = {
    Frontend: ['React.js', 'HTML', 'CSS', 'Redux'],
    Backend: ['Node.js (Express)', 'Django', 'Firebase', 'SQL', 'Sequelize'],
    Tools: ['pgAdmin', 'Jira', 'Heroku', 'Netlify', 'Vercel'],
  };

  return (
    <section id="skills" className="skills-section">
      <Card className="skills-card" bordered={false}>
        <Title level={2} className="skills-title">Skills</Title>
        {Object.entries(skills).map(([category, tags]) => (
          <div key={category} className="skills-category">
            <strong>{category}:</strong>
            <div className="skills-tags">
              {tags.map((tag) => (
                <Tag key={tag} color="blue" className="skills-tag">{tag}</Tag>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
}

export default SkillsSection;