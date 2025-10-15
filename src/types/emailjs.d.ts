// Declaraciones de tipos para EmailJS
declare global {
  interface Window {
    sendContactEmail?: (formData: any) => Promise<{ success: boolean; error?: string; response?: any }>;
    initEmailJS?: () => void;
    emailjs?: {
      send: (serviceId: string, templateId: string, templateParams: any, publicKey: string) => Promise<any>;
      init: (publicKey: string) => void;
    };
  }
}

export {};
