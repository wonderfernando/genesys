import { URL_BASE } from "./Api"

export const TOKEN_POST = (body: any) => {
    return {
        url: `${URL_BASE}/admin/login`,
        options: {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify(body)
        }

    }
}
    export const USER_GET = (token: string) => {
        return {
            url: `${URL_BASE}/user/token`,
            
            options: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer "+ token
                },
            }
        }
    
}