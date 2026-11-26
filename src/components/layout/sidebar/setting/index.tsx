import { LuMoon, LuSun, LuChevronDown } from 'react-icons/lu';
import { useTranslation } from '../../../../utils/services/useTranslation';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { setMode, setLanguage } from '../../../../redux/settingsSlice';
import { DarkLightMode } from '../../../../types/Enums/DarkLightMode';
import { Language } from '../../../../types/Enums/Language';
import { Wrapper, ThemeSwitch, ThemeButton, LanguageButton } from './SidebarSettingStyle';

export default function SidebarSettings() {
    const { t, language } = useTranslation();
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.settings.mode);

    const toggleLanguage = () => {
        dispatch(setLanguage(language === Language.Fa ? Language.En : Language.Fa));
    };

    return (
        <Wrapper>
            <ThemeSwitch>
                <ThemeButton
                    type="button"
                    $active={mode === DarkLightMode.Dark}
                    aria-label={t.settings.darkMode}
                    aria-pressed={mode === DarkLightMode.Dark}
                    onClick={() => dispatch(setMode(DarkLightMode.Dark))}
                >
                    <LuMoon />
                </ThemeButton>
                <ThemeButton
                    type="button"
                    $active={mode === DarkLightMode.Light}
                    aria-label={t.settings.lightMode}
                    aria-pressed={mode === DarkLightMode.Light}
                    onClick={() => dispatch(setMode(DarkLightMode.Light))}
                >
                    <LuSun />
                </ThemeButton>
            </ThemeSwitch>

            <LanguageButton type="button" aria-label={t.settings.language} onClick={toggleLanguage}>
                {t.settings.languageNames[language]}
                <LuChevronDown />
            </LanguageButton>
        </Wrapper>
    );
}