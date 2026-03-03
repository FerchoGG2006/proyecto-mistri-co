// Configuración de EmailJS para el formulario de contacto
// Este archivo se carga en el cliente para manejar el envío de correos

(function () {
  // Configuración de EmailJS
  const EMAILJS_SERVICE_ID = 'service_7vxwzog'; // Reemplazar con tu Service ID
  const EMAILJS_TEMPLATE_ID = 'template_32pkabm'; // Reemplazar con tu Template ID
  const EMAILJS_PUBLIC_KEY = 'KyQFYJJpxQSHaDyGr'; // Reemplazar con tu Public Key

  // Función genérica para enviar email
  window.sendEmail = async function (templateParams) {
    try {
      // Verificar que EmailJS esté cargado
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS no está cargado');
      }

      // Asegurar que el destino sea siempre el correcto
      const params = {
        ...templateParams,
        to_email: 'contacto@mistriconsultora.com'
      };

      // Enviar el email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
        EMAILJS_PUBLIC_KEY
      );

      return { success: true, response };
    } catch (error) {
      console.error('Error enviando email:', error);
      return { success: false, error: error.message };
    }
  };

  // Mantener compatibilidad con el nombre anterior
  window.sendContactEmail = window.sendEmail;

  // Función para inicializar EmailJS
  window.initEmailJS = function () {
    if (typeof emailjs !== 'undefined') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('EmailJS inicializado correctamente');
    } else {
      console.error('EmailJS no está disponible');
    }
  };

  // Auto-inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initEmailJS);
  } else {
    window.initEmailJS();
  }
})();
