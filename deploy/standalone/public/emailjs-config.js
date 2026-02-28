// Configuración de EmailJS para el formulario de contacto
// Este archivo se carga en el cliente para manejar el envío de correos

(function() {
  // Configuración de EmailJS
  const EMAILJS_SERVICE_ID = 'service_mistri_consultora'; // Reemplazar con tu Service ID
  const EMAILJS_TEMPLATE_ID = 'template_contacto'; // Reemplazar con tu Template ID
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Reemplazar con tu Public Key

  // Función para enviar email
  window.sendContactEmail = async function(formData) {
    try {
      // Verificar que EmailJS esté cargado
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS no está cargado');
      }

      // Preparar los datos del template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No proporcionado',
        company: formData.company || 'No proporcionado',
        service: formData.service,
        subject: formData.subject,
        message: formData.message,
        to_email: 'contacto@mistriconsultora.com',
        reply_to: formData.email
      };

      // Enviar el email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      return { success: true, response };
    } catch (error) {
      console.error('Error enviando email:', error);
      return { success: false, error: error.message };
    }
  };

  // Función para inicializar EmailJS
  window.initEmailJS = function() {
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
