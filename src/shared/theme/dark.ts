import type { AppTheme } from '../../types/Theme';

export const darkTheme: AppTheme = {
  colors: {
    primary: '#e2e8f0',
    accent: '#fa812b',
    accentHover: '#d3510b',
    background: '#0b1220',
    secondary: '#273247',
    sidebar: '#faf8f5',
    sidebarHover:'#637eb4',
    text: '#e2e8f0',
    textSecondary: '#0f1f3d',
    textMuted: '#94a3b8',
    border: '#243049',
    success: '#47a56a',
    successBg: '#14532d',
    danger: '#c55e5e',
    dangerBg: '#450a0a',
  },
  radius: { sm: '6px', md: '10px', lg: '16px' },
  spacing: (n) => `${n * 4}px`,
};