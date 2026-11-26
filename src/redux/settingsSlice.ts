import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DarkLightMode } from '../types/Enums/DarkLightMode';
import { Language } from '../types/Enums/Language';
import { loadMode, loadLanguage } from '../storage/settingStorage';

interface SettingsState {
    mode: DarkLightMode;
    language: Language;
}

const initialState: SettingsState = {
    mode: loadMode(),
    language: loadLanguage(),
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setMode(state, action: PayloadAction<DarkLightMode>) {
            state.mode = action.payload;
        },
        setLanguage(state, action: PayloadAction<Language>) {
            state.language = action.payload;
        },
    },
});

export const { setMode, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;