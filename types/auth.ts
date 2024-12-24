export interface User {
    id: string | number;
    phoneNumber: string;
    email?: string;
    name?: string;
}

export interface AuthState {
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;
}