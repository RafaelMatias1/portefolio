import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #0a0a0a;
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    position: relative;
  }

  :root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --bg-tertiary: #1a1a1a;
    --accent: #00ff88;
    --accent-dim: #00cc6a;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --text-muted: #666666;
    --border: #222222;
    --shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .mono {
    font-family: 'JetBrains Mono', monospace;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .glow {
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-dim);
  }

  /* Garantir que as páginas sempre apareçam */
  main {
    position: relative;
    z-index: 1;
    background: var(--bg-primary);
  }
`;