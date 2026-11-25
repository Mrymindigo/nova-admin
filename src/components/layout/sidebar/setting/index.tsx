import { useState } from 'react';
import { LuMoon, LuSun, LuChevronDown } from 'react-icons/lu';
import { useTranslation } from '../../../../utils/services/useTranslation';
import { DarkLightMode } from '../../../../types/Enums/DarkLightMode';
import { Wrapper, ThemeSwitch, ThemeButton, LanguageButton } from './SidebarSettingStyle';

export default function SidebarSettings (){
    const { t, language } = useTranslation();

    //replace local state with settings slice
    const [mode, setMode] = useState<DarkLightMode>(DarkLightMode.Light);

    return (
        <Wrapper>
            <ThemeSwitch>
                <ThemeButton
                    type="button"
                    $active={mode === DarkLightMode.Dark}
                    aria-label={t.settings.darkMode}
                    aria-pressed={mode === DarkLightMode.Dark}
                    onClick={() => setMode(DarkLightMode.Dark)}
                >
                    <LuMoon />
                </ThemeButton>
                <ThemeButton
                    type="button"
                    $active={mode === DarkLightMode.Light}
                    aria-label={t.settings.lightMode}
                    aria-pressed={mode === DarkLightMode.Light}
                    onClick={() => setMode(DarkLightMode.Light)}
                >
                    <LuSun />
                </ThemeButton>
            </ThemeSwitch>

            <LanguageButton type="button" aria-label={t.settings.language}>
                {t.settings.languageNames[language]}
                <LuChevronDown />
            </LanguageButton>
        </Wrapper>
    );
};