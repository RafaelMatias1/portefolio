import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaCalendarAlt, FaTools } from 'react-icons/fa';

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: var(--accent);
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), #00ccff);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ProjectPhase = styled.span`
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  border: 1px solid var(--border);
`;

const ProjectPeriod = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  margin-bottom: 1.5rem;
`;

const TechTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: var(--bg-tertiary);
  color: var(--accent);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  border: 1px solid var(--border);
  transition: var(--transition);
  
  &:hover {
    background: var(--accent);
    color: var(--bg-primary);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.2);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'CoffeeBrew',
      period: '05/02/2024 - 26/06/2024',
      description: 'Aplicativo de pedidos para uma cafeteria desenvolvido durante a 4ª fase do curso técnico. Sistema completo com interface intuitiva para pedidos e gerenciamento.',
      technologies: ['Java', 'React'],
      phase: '4ª Fase',
      status: 'Concluído'
    },
    {
      title: 'Controle de Armazém',
      period: '24/07/2023 - 23/11/2023',
      description: 'Sistema de organização de armazém utilizando caixas, desenvolvido para otimizar o controle de estoque e melhorar a eficiência operacional.',
      technologies: ['C++'],
      phase: '3ª Fase',
      status: 'Concluído'
    },
    {
      title: 'ASS AQUI',
      period: '06/02/2023 - 07/06/2023',
      description: 'Aplicativo mobile desenvolvido para identificação de buracos em vias de Florianópolis, contribuindo para a melhoria da infraestrutura urbana da cidade.',
      technologies: ['React Native', 'MySQL'],
      phase: '2ª Fase',
      status: 'Concluído'
    },
    {
      title: 'PsicoVerso',
      period: '01/08/2022 - 01/12/2022',
      description: 'Site desenvolvido para pessoas com problemas de vícios em jogos que buscam ajuda, oferecendo recursos educativos e suporte especializado.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      phase: '1ª Fase',
      status: 'Concluído'
    }
  ];

  return (
    <ProjectsContainer className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>projetos.portfolio</PageTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectHeader>
                <div>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectPeriod>
                    <FaCalendarAlt size={14} />
                    {project.period}
                  </ProjectPeriod>
                </div>
                <ProjectPhase>{project.phase}</ProjectPhase>
              </ProjectHeader>
              
              <ProjectDescription>
                {project.description}
              </ProjectDescription>
              
              <TechStack>
                <TechTitle>
                  <FaTools size={14} />
                  technologies: [
                </TechTitle>
                <TechList>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>
                      {tech}
                    </TechTag>
                  ))}
                </TechList>
                <div style={{ color: 'var(--accent)', fontFamily: 'JetBrains Mono', marginTop: '0.5rem' }}>]</div>
              </TechStack>
              
              <ProjectLinks>
                <ProjectLink href="https://github.com/RafaelMatias1" target="_blank">
                  <FaGithub size={16} />
                  repo
                </ProjectLink>
                <ProjectLink href="#" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                  <FaExternalLinkAlt size={14} />
                  demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsContainer>
  );
};

export default Projects;