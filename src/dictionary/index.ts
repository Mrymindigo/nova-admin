import { Language } from "../types/Enums/Language";
import { fa } from "./fa";
import { en } from './en'
import type { Dictionary } from './en';

export const dictionaries: Record<Language, Dictionary> = {
    [Language.En]: en,
    [Language.Fa]: fa,
};

export type { Dictionary };