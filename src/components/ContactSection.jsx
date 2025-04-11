import React from 'react';
import { Card, Typography, Form, Input, Button } from 'antd';

const { Title, Paragraph } = Typography;

function ContactSection() {
  const handleFormSubmit = (values) => {
    console.log('Form Submitted:', values);
    // You can integrate this with an email service or backend API
  };

  return (
    <section id="contact" className="contact-section">
      <Card className="contact-card" bordered={false}>
        <Title level={2} className="contact-title">Contact Me</Title>
        <Paragraph className="contact-description">
          Feel free to reach out to me for any project inquiries, collaborations, or just to say hello!
        </Paragraph>
        <Form
          layout="vertical"
          onFinish={handleFormSubmit}
          className="contact-form"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input placeholder="Your Email" />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Please enter your message!' }]}
          >
            <Input.TextArea rows={4} placeholder="Your Message" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="contact-submit-btn">
            Submit
          </Button>
        </Form>
      </Card>
    </section>
  );
}

export default ContactSection;