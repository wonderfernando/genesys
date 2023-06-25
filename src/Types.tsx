export interface AuthLoginType{
    phone: string,
    password: string
}

export interface LoginErrorType{
    error:string,
    message: string
}

export interface AuthLoginContextType {
    data: {
            created_at :  string,
            id: number,
            name: string,
            phone: string, 
            role: number,
            updated_at: string,
        },
        userLogout: ()=>void
        ,
        setError: (error:string)=>void
        ,
        login: Boolean,
        userLogin: (phone: string, password: string) => void,
        error: string,
        loading: Boolean
}
export interface ClienteType{
    name: string,
    phone:string,
    email:string,
    address:string,
    gender:string,
    bi:string
}