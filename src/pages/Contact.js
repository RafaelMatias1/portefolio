import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaTerminal } from 'react-icons/fa';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 0 2rem;
  background: var(--bg-primary);
`;

const PageTitle = styled.h1`
  font-family: 'JetBrains Mono', monospace;
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 3rem;
  text-align: center;
  
  &::before {
    content: '// ';
    color: var(--text-muted);
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  transition: var(--transition);
  
  &:hover {
    border-color: var(--accent);
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.1);
  }
`;

const CardTitle = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    color: var(--accent);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--bg-tertiary);
  border-radius: 8px;
  border-left: 3px solid var(--accent);
  transition: var(--transition);
  
  &:hover {
    background: var(--bg-primary);
  }
`;

const ContactIcon = styled.div`
  background: var(--accent);
  color: var(--bg-primary);
  padding: 0.75rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactDetails = styled.div`
  h3 {
    color: var(--accent);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: var(--text-secondary);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
  }
  
  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--accent);
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent);
  font-size: 0.9rem;
  
  &::before {
    content: '$ ';
    color: var(--text-muted);
  }
`;

const Input = styled.input`
  padding: 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.2);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  resize: vertical;
  min-height: 120px;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.2);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--accent);
  color: var(--bg-primary);
  border: none;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background: var(--accent-dim);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }
`;

const StatusMessage = styled.div`
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  color: var(--text-secondary);
  
  &::before {
    content: '> ';
    color: var(--accent);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:rafamatiasschmidt@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'email',
      value: 'rafamatiasschmidt@gmail.com',
      link: 'mailto:rafamatiasschmidt@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'telefone',
      value: '(48) 99833-1717',
      link: 'tel:+5548998331717'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'localização',
      value: 'Florianópolis, SC',
      link: null
    },
    {
      icon: FaGithub,
      title: 'github',
      value: 'github.com/RafaelMatias1',
      link: 'https://github.com/RafaelMatias1'
    },
    {
      icon: FaLinkedin,
      title: 'linkedin',
      value: 'rafael-matias-schimid',
      link: 'https://linkedin.com/in/rafael-matias-schimid'
    }
  ];

  return (
    <ContactContainer className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>contato.connect()</PageTitle>
        
        <ContactGrid>
          <Card
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CardTitle>
              <FaTerminal />
              informacoes_contato.json
            </CardTitle>
            
            {contactInfo.map((info, index) => (
              <ContactItem key={index}>
                <ContactIcon>
                  <info.icon size={16} />
                </ContactIcon>
                <ContactDetails>
                  <h3>"{info.title}":</h3>
                  <p>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        "{info.value}"
                      </a>
                    ) : (
                      `"${info.value}"`
                    )}
                  </p>
                </ContactDetails>
              </ContactItem>
            ))}
          </Card>

          <Card
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CardTitle>
              <FaPaperPlane />
              enviar_mensagem.send()
            </CardTitle>
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">input_nome</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome..."
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">input_email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">input_assunto</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem..."
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">textarea_mensagem</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem aqui..."
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane size={16} />
                execute.send()
              </SubmitButton>
            </Form>
            
            <StatusMessage>
              Sistema pronto para receber mensagens. Execute o comando acima para enviar.
            </StatusMessage>
          </Card>
        </ContactGrid>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact;