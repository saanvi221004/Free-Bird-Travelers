import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneForCall(phone: string): string {
  return `tel:${phone.replace(/\s+/g, '')}`;
}

export function formatPhoneForWhatsApp(phone: string): string {
  // Remove country code + and spaces for WhatsApp
  const cleanPhone = phone.replace(/^\+/, '').replace(/\s+/g, '');
  return `https://wa.me/${cleanPhone}`;
}

export function formatEmail(email: string, subject?: string, body?: string): string {
  let mailto = `mailto:${email}`;
  const params = [];
  
  if (subject) {
    params.push(`subject=${encodeURIComponent(subject)}`);
  }
  
  if (body) {
    params.push(`body=${encodeURIComponent(body)}`);
  }
  
  if (params.length > 0) {
    mailto += `?${params.join('&')}`;
  }
  
  return mailto;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatPrice(price: string): string {
  // Add formatting for Indian currency if needed
  return price;
}

export function generateWhatsAppMessage(service?: string, destination?: string): string {
  let message = "Hi! I'm interested in your travel services.";
  
  if (service) {
    message += ` Specifically, I'd like to know more about ${service}.`;
  }
  
  if (destination) {
    message += ` I'm planning to visit ${destination}.`;
  }
  
  message += " Could you please provide more details and pricing?";
  
  return message;
}
