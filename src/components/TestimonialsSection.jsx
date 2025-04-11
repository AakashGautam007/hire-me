import React from 'react';
import { Card, Typography, Carousel } from 'antd';

const { Title, Paragraph } = Typography;

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Aakash is a highly skilled developer who delivers exceptional results. His attention to detail and problem-solving skills are outstanding.',
    },
    {
      name: 'Jane Smith',
      feedback: 'Working with Aakash was a pleasure. His expertise in React Native and full-stack development is unmatched.',
    },
    {
      name: 'Michael Johnson',
      feedback: 'Aakash consistently exceeds expectations with his innovative solutions and dedication to delivering high-quality work.',
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <Card className="testimonials-card" bordered={false}>
        <Title level={2} className="testimonials-title">Testimonials</Title>
        <Carousel autoplay>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <Paragraph className="testimonial-feedback">"{testimonial.feedback}"</Paragraph>
              <Paragraph className="testimonial-name">- {testimonial.name}</Paragraph>
            </div>
          ))}
        </Carousel>
      </Card>
    </section>
  );
}

export default TestimonialsSection;