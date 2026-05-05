type Credentials = {
    email: string;
    password: string;
    role?: string;
}

export const validUser: Credentials = {
    email:"sopotest@gmail.com",
    password: "paroli12",
    role: "admin"
}

export function getLoginUrl(env: string): string {
    return `https://${env}.example.com/login`
}
