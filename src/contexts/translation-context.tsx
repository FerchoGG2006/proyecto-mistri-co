'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'pt';

interface Translations {
  [key: string]: any;
}

interface TranslationContextType {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  t: (key: string, fallback?: string) => string;
  isLoading: boolean;
  availableLanguages: Array<{ code: Language; name: string; flag: string }>;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Cargar traducciones dinámicamente
const loadTranslations = async (language: Language): Promise<Translations> => {
  try {
    const response = await fetch(`/translations/${language}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load ${language} translations`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${language} translations:`, error);
    // Fallback a español si no se puede cargar el idioma seleccionado
    if (language !== 'es') {
      return await loadTranslations('es');
    }
    return {};
  }
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  // Cargar traducciones al cambiar el idioma
  useEffect(() => {
    const loadLanguage = async () => {
      setIsLoading(true);
      try {
        const loadedTranslations = await loadTranslations(language);
        setTranslations(loadedTranslations);
      } catch (error) {
        console.error('Error loading translations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguage();
  }, [language]);

  // Función para obtener una traducción
  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }
    
    return typeof value === 'string' ? value : fallback || key;
  };

  // Cambiar idioma
  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    // Guardar preferencia en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', newLanguage);
    }
  };

  // Cargar idioma preferido del localStorage al inicializar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferred-language') as Language;
      if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'pt')) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  const availableLanguages = [
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' }
  ];

  return (
    <TranslationContext.Provider value={{
      language,
      changeLanguage,
      t,
      isLoading,
      availableLanguages
    }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
