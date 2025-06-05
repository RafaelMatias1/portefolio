import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaBriefcase, FaCode, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const AboutContainer = styled.div`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
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

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  svg {
    color: var(--accent);
    font-size: 1.5rem;
  }
`;

const CardTitle = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  color: var(--text-primary);
  font-size: 1.3rem;
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-tertiary);
  border-radius: 8px;
  border-left: 3px solid var(--accent);
`;

const InfoLabel = styled.span`
  font-family: 'JetBrains Mono', monospace;
  color: var(--text-secondary);
  font-size: 0.9rem;
  min-width: 100px;
`;

const InfoValue = styled.span`
  color: var(--text-primary);
  font-weight: 500;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SkillCategory = styled.div`
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 1.5rem;
  border-left: 3px solid var(--accent);
`;

const SkillTitle = styled.h3`
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent);
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  border: 1px solid var(--border);
  transition: var(--transition);
  
  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
`;

const ExperienceItem = styled.div`
  padding: 1.5rem;
  border-left: 2px solid var(--accent);
  margin-left: 1rem;
  margin-bottom: 2rem;
  background: var(--bg-tertiary);
  border-radius: 0 8px 8px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 1.5rem;
    width: 10px;
    height: 10px;
    background: var(--accent);
    border-radius: 50%;
  }
`;

const JobTitle = styled.h3`
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
`;

const Company = styled.p`
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const About = () => {
  const personalInfo = [
    { label: 'Nome', value: 'Rafael M. Schmidt' },
    { label: 'Idade', value: '19 anos' },
    { label: 'Local', value: 'Florianópolis, SC' },
    { label: 'Status', value: 'Disponível para oportunidades' }
  ];

  const skills = {
    'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'React Native'],
    'Backend': ['PHP', 'Python', 'Node.js', 'Java', 'C++', 'C#'],
    'Database': ['MySQL', 'SQL'],
    'Tools': ['Git', 'GitHub', 'VS Code']
  };

  return (
    <AboutContainer className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PageTitle>sobre.dev</PageTitle>
        
        <Grid>
          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CardHeader>
              <FaUser />
              <CardTitle>perfil_pessoal.json</CardTitle>
            </CardHeader>
            <InfoGrid>
              {personalInfo.map((info, index) => (
                <InfoItem key={index}>
                  <InfoLabel>"{info.label}":</InfoLabel>
                  <InfoValue>"{info.value}"</InfoValue>
                </InfoItem>
              ))}
            </InfoGrid>
          </Card>

          <Card
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CardHeader>
              <FaBriefcase />
              <CardTitle>experiencia.log</CardTitle>
            </CardHeader>
            <ExperienceItem>
              <JobTitle>Desenvolvedor Full Stack</JobTitle>
              <Company>PDB Monitor (Remoto)</Company>
              <Period>Setembro 2024 - Atual</Period>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Desenvolvimento full stack utilizando PHP, React e MySQL. 
                Implementação de novas funcionalidades e manutenção de sistemas.
              </p>
            </ExperienceItem>
          </Card>
        </Grid>

        <Card
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ marginBottom: '2rem' }}
        >
          <CardHeader>
            <FaGraduationCap />
            <CardTitle>educacao.md</CardTitle>
          </CardHeader>
          <InfoGrid>
            <InfoItem>
              <InfoLabel>Graduação:</InfoLabel>
              <InfoValue>Análise e Desenvolvimento de Sistemas - SENAI (2024 - Em andamento)</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Técnico:</InfoLabel>
              <InfoValue>Desenvolvimento de Sistemas - SENAI (2022 - 2024)</InfoValue>
            </InfoItem>
          </InfoGrid>
        </Card>

        <Card
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CardHeader>
            <FaCode />
            <CardTitle>habilidades.config</CardTitle>
          </CardHeader>
          <SkillsGrid>
            {Object.entries(skills).map(([category, skillList], index) => (
              <SkillCategory key={index}>
                <SkillTitle>{category.toLowerCase()}: [</SkillTitle>
                <SkillList>
                  {skillList.map((skill, skillIndex) => (
                    <SkillTag key={skillIndex}>
                      {skill}
                    </SkillTag>
                  ))}
                </SkillList>
                <div style={{ color: 'var(--accent)', marginTop: '0.5rem' }}>]</div>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </Card>
      </motion.div>
    </AboutContainer>
  );
};

export default About;