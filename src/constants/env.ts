const dev = import.meta.env.DEV
export const BASE_URL = 'http://127.0.0.1:5173'
export const API_URL = dev ? 'http://49.235.85.170:1337' : 'https://low-code-platform-vite.vercel.app'
