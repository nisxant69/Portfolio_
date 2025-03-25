import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    from_email: '',
    from_name: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const form = useRef();

  // Email validation regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validation function
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.from_email) {
      tempErrors.from_email = 'Email is required';
    } else if (!isValidEmail(formData.from_email)) {
      tempErrors.from_email = 'Please enter a valid email';
    }

    if (!formData.from_name) {
      tempErrors.from_name = 'Name is required';
    } else if (formData.from_name.length < 2) {
      tempErrors.from_name = 'Name must be at least 2 characters';
    }

    if (!formData.subject) {
      tempErrors.subject = 'Subject is required';
    } else if (formData.subject.length < 3) {
      tempErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm('service_0nhgnfo', 'template_jgp649n', form.current, { publicKey: "YQzkpJya8EIsdXtPJ" })
        .then(() => {
          setOpen(true);
          setFormData({
            from_email: '',
            from_name: '',
            subject: '',
            message: ''
          });
          form.current.reset();
        }, (error) => {
          console.log(error);
        });
    }
  };

  return (
    <Container id='contact'>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <ContactInput
            placeholder="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            style={errors.from_email ? { borderColor: 'red' } : {}}
          />
          {errors.from_email && <span style={{ color: 'red', fontSize: '14px' }}>{errors.from_email}</span>}

          <ContactInput
            placeholder="Your Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            style={errors.from_name ? { borderColor: 'red' } : {}}
          />
          {errors.from_name && <span style={{ color: 'red', fontSize: '14px' }}>{errors.from_name}</span>}

          <ContactInput
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={errors.subject ? { borderColor: 'red' } : {}}
          />
          {errors.subject && <span style={{ color: 'red', fontSize: '14px' }}>{errors.subject}</span>}

          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={errors.message ? { borderColor: 'red' } : {}}
          />
          {errors.message && <span style={{ color: 'red', fontSize: '14px' }}>{errors.message}</span>}

          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Email sent successfully!
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
