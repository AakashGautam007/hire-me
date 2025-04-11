import React from 'react';
import { Card, Button, Typography } from 'antd';
import { FilePdfOutlined, DownloadOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

function ResumeSection() {
  return (
    <section id="resume">
      <Card title="Resume" className="card">
        <Paragraph>
          You can view or download my resume using the buttons below:
        </Paragraph>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            type="primary"
            icon={<FilePdfOutlined />}
            size="large"
            onClick={() => window.open('/Resume Aakash Gautam 2025.pdf', '_blank')}
          >
            Display Resume
          </Button>
          <Button
            type="default"
            icon={<DownloadOutlined />}
            size="large"
            href="/Resume Aakash Gautam 2025.pdf"
            download="Aakash_Gautam_Resume.pdf"
          >
            Download Resume
          </Button>
        </div>
      </Card>
    </section>
  );
}

export default ResumeSection;