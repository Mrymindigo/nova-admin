export interface AppTheme {
  colors: {
    primary: string;       
    accent: string; //btn
    accentHover: string;
    background: string;    
    secondary: string;    
    sidebar: string;
    text: string;
    textSecondary:string;
    textMuted: string;
    border: string;
    success: string;
    successBg: string;
    danger: string;
    dangerBg: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
  };
  spacing: (n: number) => string;
}