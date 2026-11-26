import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import { saveSettings } from '../storage/settingStorage';

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
    },
});

// change localstorage in state
store.subscribe(() => {
    const { mode, language } = store.getState().settings;
    saveSettings(mode, language);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;