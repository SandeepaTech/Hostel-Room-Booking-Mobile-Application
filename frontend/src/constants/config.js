import { Platform } from 'react-native';

const VERCEL_BACKEND_URL = 'https://backend-seven-nu-36.vercel.app/api';

export const API_URL = process.env.EXPO_PUBLIC_API_URL || VERCEL_BACKEND_URL;
export const STORAGE_KEYS = {
  TOKEN: '@hostelhub_token',
  USER: '@hostelhub_user'
};
