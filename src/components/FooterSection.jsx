import React from 'react';
import { Layout, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Paragraph } = Typography;

function FooterSection() {
  return (
    <Footer className="footer">
      <Paragraph>
        <MailOutlined /> aakashgtm007@gmail.com | <PhoneOutlined /> (+91) 8802920970
      </Paragraph>
      <Paragraph>
        <a href="https://github.com/AakashGautam007/" target="_blank" rel="noopener noreferrer">
          <GithubOutlined /> GitHub
        </a> |{' '}
        <a href="https://www.linkedin.com/in/aakash-gautam-app-dev/" target="_blank" rel="noopener noreferrer">
          <LinkedinOutlined /> LinkedIn
        </a>
      </Paragraph>
      <Paragraph>© 2025 Aakash Gautam. All rights reserved.</Paragraph>
    </Footer>
  );
}

export default FooterSection;