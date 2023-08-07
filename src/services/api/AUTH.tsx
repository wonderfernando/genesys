import { URL_BASE } from "./Api"

export const TOKEN_POST = (data: {phone:string,password:string}) => {
    return {
        url: `${URL_BASE}/admin/login`,
        options: {
            method:"POST",
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            
        },
    }
}
    export const USER_GET = (token: string) => {
        return {
            url: `${URL_BASE}/user/token`,
            
            options: {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer "+ token
                },
            }
        }
    
}