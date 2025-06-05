import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaTerminal } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
  transition: var(--transition);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  
  &:hover {
    color: var(--accent-dim);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    width: 100%;
    height: 100vh;
    background: var(--bg-primary);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    font-size: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: var(--accent);
    transition: var(--transition);
  }
  
  &:hover {
    color: var(--text-primary);
    
    &::after {
      width: 100%;
    }
  }
  
  ${props => props.$active && `
    color: var(--accent);
  `}
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const TerminalPrefix = styled.span`
  color: var(--accent);
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' }
  ];

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/" className="mono">
          <FaTerminal />
          <TerminalPrefix>~/</TerminalPrefix>rafael
        </Logo>
        <NavLinks $isOpen={isOpen}>
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.path}
                $active={location.pathname === item.path}
                onClick={() => setIsOpen(false)}
                className="mono"
              >
                ./{item.name}
              </NavLink>
            </motion.li>
          ))}
        </NavLinks>
        <MenuToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;