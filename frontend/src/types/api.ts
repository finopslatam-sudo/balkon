export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  statusCode: number;
  message: string | string[];
  error?: string;
  timestamp: string;
  path: string;
}

export interface AuthTokens {
  accessToken: string;
}

export type UserRole = "SUPER_ADMIN" | "ADMIN" | "MANAGER" | "STAFF";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  lastLoginAt?: string;
}
