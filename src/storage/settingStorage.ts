import { DarkLightMode } from '../types/Enums/DarkLightMode';
import { Language } from '../types/Enums/Language';

const MODE_KEY = 'nova-admin:mode';
const LANGUAGE_KEY = 'nova-admin:language';

const isMode = (value: string | null): value is DarkLightMode =>
    Object.values(DarkLightMode).includes(value as DarkLightMode);

const isLanguage = (value: string | null): value is Language =>
    Object.values(Language).includes(value as Language);

export const loadMode = (): DarkLightMode => {
    const saved = localStorage.getItem(MODE_KEY);
    return isMode(saved) ? saved : DarkLightMode.Light;
};

export const loadLanguage = (): Language => {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return isLanguage(saved) ? saved : Language.Fa;
};

export const saveSettings = (mode: DarkLightMode, language: Language): void => {
    localStorage.setItem(MODE_KEY, mode);
    localStorage.setItem(LANGUAGE_KEY, language);
};