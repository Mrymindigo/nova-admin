import { dictionaries } from '../../dictionary/index';
import { Language } from '../../types/Enums/Language';

export const useTranslation = () => {
    //replace redux
    const language = Language.Fa;
    return { t: dictionaries[language], language };
};