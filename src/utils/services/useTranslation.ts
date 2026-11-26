import { dictionaries } from '../../dictionary/index';
import { useAppSelector } from '../../redux/hooks';

export const useTranslation = () => {
    const language = useAppSelector((state) => state.settings.language);
    return { t: dictionaries[language], language };
};