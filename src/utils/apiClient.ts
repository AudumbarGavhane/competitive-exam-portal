// src/utils/apiClient.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

async function fetchWrapper<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, headers, ...customConfig } = options;
  
  // 1. URL Parameter Builder (converts objects into ?key=value queries cleanly)
  let url = `${BASE_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        searchParams.append(key, String(val));
      }
    });
    url += `?${searchParams.toString()}`;
  }

  // 2. Default Configuration Headers
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const config: RequestInit = {
    method: customConfig.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    ...customConfig,
  };

  // 3. Centralized Request execution and safe parsing
  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error(`API Error [${response.status}]: ${response.statusText} at ${url}`);
  }

  return response.json() as Promise<T>;
}

// Singleton API Client export using explicit HTTP verbs
// Singleton API Client export using explicit HTTP verbs
export const apiClient = {
  get: <T>(endpoint: string, options?: RequestOptions) => 
    fetchWrapper<T>(endpoint, { ...options, method: 'GET' }),
    
  post: <T>(endpoint: string, options?: RequestOptions) => 
    fetchWrapper<T>(endpoint, { ...options, method: 'POST' }),
    
  put: <T>(endpoint: string, options?: RequestOptions) => 
    fetchWrapper<T>(endpoint, { ...options, method: 'PUT' }),
    
  patch: <T>(endpoint: string, options?: RequestOptions) => 
    fetchWrapper<T>(endpoint, { ...options, method: 'PATCH' }),
    
  delete: <T>(endpoint: string, options?: RequestOptions) => 
    fetchWrapper<T>(endpoint, { ...options, method: 'DELETE' }),
};