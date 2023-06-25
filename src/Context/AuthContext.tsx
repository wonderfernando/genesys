import {createContext,useEffect,useState} from "react"
import { TOKEN_POST, USER_GET } from "../services/api/AUTH";
import { AuthLoginContextType } from "../Types";
import {  useNavigate } from "react-router-dom";

export const UserContext = createContext<AuthLoginContextType>(null!);


export function AuthContext({children} : {children: JSX.Element} ) {
    
    const navigate = useNavigate();
    
    const [data,setData] = useState<AuthLoginContextType["data"]>(null!)
    const [login,setLogin] = useState<Boolean>(false)
    const [loading,setLoading] = useState<Boolean>(true)
    const [error ,setError] = useState<string>(null!)

     useEffect(  function () {
        const token  = window.localStorage.getItem("token")
        if(token){
            getUser(token)
        }else{
            if (window.location.pathname!=="/login") {
                setError("Precisa fazer login primeiro")
            }
               setLoading(false)
        }
    },[])

    async function userLogin(phone: string, password: string) {
        setLoading(true)
        setError(null!)
        const {url, options} = TOKEN_POST({phone, password})
        const response = await fetch(url,options);
        console.log("context "+response)
        if (response.status == 200) {
          const json = await response.json()
          window.localStorage.setItem("token", json.access_token)  
          await getUser(json.access_token)
        }else{
            setLoading(false)
     //     setError("Senha ou numero errado")
        }
    }
    
    async function getUser(token: string) {
        const {url, options} = USER_GET(token)
        const response =  await fetch(url,options)
        if (response.status==200) {
            const json = await response.json()
            setData(json)
            setError(null!)
            setLogin(true)
            setLoading(false)
            console.log(window.location.pathname)
            if(window.location.pathname==="/login")
                navigate("/")
        }else if(response.status==401){
            setLoading(false)
            setError("Senha ou numero errado")
        }else {
            setLoading(false)
            console.log("Algo deu errado") 
        }
    }

    async function userLogout() {
        window.localStorage.removeItem("token")
        setLogin(false)
        setData(null!)
        window.location.pathname="/login"
    }


    return <UserContext.Provider value={{userLogin, data, login,loading, error,userLogout,setError}}>
        {children}
    </UserContext.Provider>
}