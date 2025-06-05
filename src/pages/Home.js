import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaCode, FaRocket } from 'react-icons/fa';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 2rem;
  background: var(--bg-primary);
  position: relative;
  z-index: 1;
  
  /* Garantir que a home sempre apareça */
  opacity: 1;
  visibility: visible;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 4rem;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div``;

const TerminalWindow = styled.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const TerminalHeader = styled.div`
  background: var(--bg-tertiary);
  padding: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid var(--border);
`;

const TerminalDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const TerminalBody = styled.div`
  padding: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const TerminalLine = styled.div`
  margin-bottom: 0.5rem;
  
  .prompt {
    color: var(--accent);
  }
  
  .command {
    color: var(--text-primary);
  }
  
  .output {
    color: var(--text-secondary);
    margin-left: 1rem;
  }
`;

const Greeting = styled.div`
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--accent), #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Role = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 500px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-secondary);
  transition: var(--transition);
  
  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.2);
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--accent);
  color: var(--bg-primary);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background: var(--accent-dim);
    box-shadow: var(--shadow);
  }
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: var(--accent);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const terminalCommands = [
    { prompt: 'rafael@dev:~$', command: 'whoami', output: 'Rafael M. Schmidt' },
    { prompt: 'rafael@dev:~$', command: 'pwd', output: '/home/rafael/portfolio' },
    { prompt: 'rafael@dev:~$', command: 'ls skills/', output: 'react.js  php  mysql  javascript  java' },
    { prompt: 'rafael@dev:~$', command: 'cat status.txt', output: 'Available for opportunities' },
    { prompt: 'rafael@dev:~$', command: 'uptime', output: `${currentTime.toLocaleTimeString()}` }
  ];

  const handleProjectsClick = (e) => {
    e.preventDefault();
    window.location.hash = '#projects';
    // Se estiver usando React Router, pode usar navigate
    // navigate('/projects');
  };

  return (
    <HomeContainer className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%' }}
      >
        <HeroContent>
          <TextContent>
            <Greeting>
              <StatusIndicator>
                Status: Online and coding
              </StatusIndicator>
            </Greeting>
            
            <Name>Rafael Schmidt</Name>
            <Role>$ echo "Full Stack Developer"</Role>
            
            <Description>
              Desenvolvedor apaixonado por tecnologia, especializado em criar soluções web 
              modernas e eficientes. Sempre em busca de novos desafios e aprendizado contínuo.
            </Description>
            
            <SocialLinks>
              <SocialLink href="https://github.com/RafaelMatias1" target="_blank">
                <FaGithub size={20} />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/rafael-matias-schimid" target="_blank">
                <FaLinkedin size={20} />
              </SocialLink>
              <SocialLink href="mailto:rafamatiasschmidt@gmail.com">
                <FaEnvelope size={20} />
              </SocialLink>
            </SocialLinks>
            
            <CTAButton
              href="/projects"
              onClick={handleProjectsClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              Ver Projetos
            </CTAButton>
          </TextContent>
          
          <TerminalWindow>
            <TerminalHeader>
              <TerminalDot color="#ff5f57" />
              <TerminalDot color="#ffbd2e" />
              <TerminalDot color="#28ca42" />
              <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                terminal
              </span>
            </TerminalHeader>
            <TerminalBody>
              {terminalCommands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                >
                  <TerminalLine>
                    <span className="prompt">{cmd.prompt}</span>{' '}
                    <span className="command">{cmd.command}</span>
                  </TerminalLine>
                  <TerminalLine>
                    <span className="output">{cmd.output}</span>
                  </TerminalLine>
                </motion.div>
              ))}
              <TerminalLine>
                <span className="prompt">rafael@dev:~$</span>{' '}
                <span className="command">_</span>
              </TerminalLine>
            </TerminalBody>
          </TerminalWindow>
        </HeroContent>
      </motion.div>
    </HomeContainer>
  );
};

export default Home;