import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Rafael Schmidt | Desenvolvedor Full Stack',
      '/about': 'Sobre | Rafael Schmidt',
      '/projects': 'Projetos | Rafael Schmidt', 
      '/contact': 'Contato | Rafael Schmidt'
    };

    const currentTitle = titles[location.pathname] || 'Rafael Schmidt | Desenvolvedor Full Stack';
    document.title = currentTitle;
  }, [location]);

  return null;
};

export default PageTitle;