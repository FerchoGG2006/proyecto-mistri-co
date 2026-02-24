
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { contentES, contentPT, TranslationType } from '@/lib/content';

export type Language = 'ES' | 'PT';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLanguage = 'ES' }: { children: React.ReactNode, initialLanguage?: Language }) {
    const [language, setLanguageState] = useState<Language>(initialLanguage);

    // Sincronizar con localStorage y cookies en el cliente
    useEffect(() => {
        const savedLang = localStorage.getItem('preferredLanguage') as Language;
        if (savedLang && (savedLang === 'ES' || savedLang === 'PT')) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('preferredLanguage', lang);
        // Establecer cookie para el servidor
        document.cookie = `preferredLanguage=${lang}; path=/; max-age=31536000; samesite=lax`;
        // Recargar para que el servidor tome el cambio si es necesario, 
        // aunque idealmente Next.js maneja la navegación sin recarga completa.
    };

    const t = language === 'ES' ? contentES : contentPT;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
