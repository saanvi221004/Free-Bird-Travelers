let emailjsLib: typeof import('@emailjs/browser') | null = null;

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'
};

// Initialize EmailJS
export const initEmailJS = async () => {
  if (!emailjsLib) {
    emailjsLib = (await import('@emailjs/browser')).default as unknown as typeof import('@emailjs/browser');
  }
  emailjsLib.init(EMAILJS_CONFIG.publicKey);
};

// Contact form interface
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  destination?: string;
  travelers?: string;
  budget?: string;
  travelDates?: string;
  message: string;
}

// Send contact form email
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Initialize EmailJS if not already done
    await initEmailJS();

    // Template parameters that will be sent to EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      destination: formData.destination || 'Not specified',
      travelers: formData.travelers || '1',
      budget: formData.budget || 'Not specified',
      travel_dates: formData.travelDates || 'Flexible',
      message: formData.message,
      to_name: 'Free Bird Travelers Team',
      to_email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'contact@freebirdtravelers.com'
    };

    const result = await emailjsLib!.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Send quick inquiry email (for simpler forms)
export const sendQuickInquiry = async (name: string, email: string, message: string): Promise<boolean> => {
  try {
    await initEmailJS();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Free Bird Travelers Team',
      to_email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'contact@freebirdtravelers.com'
    };

    const result = await emailjsLib!.send(
      EMAILJS_CONFIG.serviceId,
      'quick_inquiry_template', // Separate template for quick inquiries
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('Quick inquiry sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to send quick inquiry:', error);
    return false;
  }
};

// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// Form validation
export const validateContactForm = (formData: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('Name is required');
  }

  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.push('Please enter a valid phone number');
  }

  if (!formData.message.trim()) {
    errors.push('Message is required');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};
