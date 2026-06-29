import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatKES(amount: number) {
  return `Ksh. ${amount.toLocaleString("en-KE")}`;
}

const BASE_FARE = 800;
const PER_PASSENGER = 400;

export function estimateShuttleFare(passengers: number) {
  const count = Math.max(1, passengers || 1);
  return BASE_FARE + (count - 1) * PER_PASSENGER;
}

const PHONE_REGEX = /^(\+254|0)[17]\d{8}$/;

export function isValidKenyanPhone(phone: string) {
  return PHONE_REGEX.test(phone.trim());
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string) {
  return EMAIL_REGEX.test(email.trim());
}
