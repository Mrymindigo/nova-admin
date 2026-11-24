import type { AppTheme } from '../../types/Theme';

export const lightTheme: AppTheme = {
  colors: {
    primary: '#0f1f3d',
    accent: '#fa812b',
    accentHover: '#d3510b',
    background: '#faf8f5',
    secondary: '#ffffff',
    sidebar: '#0a1936',
    text: '#0f1f3d',
    textSecondary:'#ffffff',
    textMuted: '#64748b',
    border: '#e5e7eb',
    success: '#47a56a',
    successBg: '#dcfce7',
    danger: '#c55e5e',
    dangerBg: '#fee2e2',
  },
  radius: { sm: '6px', md: '10px', lg: '16px' },
  spacing: (n) => `${n * 4}px`,
};