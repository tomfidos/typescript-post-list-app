interface LoggingUser {
    username: string,
    password: string,
}

interface LoginResponse {
    data: LoginData,
}

interface LoginData {
    username: string,
    ttl: number,
    jwt_token: string,
    id: number,
    error: boolean,
}

export type { LoggingUser, LoginResponse, LoginData };
