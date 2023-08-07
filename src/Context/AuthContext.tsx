import {createContext,useEffect,useState} from "react"
import { TOKEN_POST, USER_GET } from "../services/api/AUTH";
import { AuthLoginContextType } from "../Types";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext<AuthLoginContextType>(null!);


export function AuthContext({children} : {children: JSX.Element} ) {
    
    const navigate = useNavigate();
    const[nome,setNome]=useState("");
    const [data,setData] = useState<AuthLoginContextType["data"]>(null!)
    const [login,setLogin] = useState<Boolean>(false)
    const [loading,setLoading] = useState<Boolean>(true)
    const [error ,setError] = useState<string>(null!)

     useEffect(  function () {
        const token  = window.localStorage.getItem("token")
        if(token){
        // fetch("https://superordinary-noses.000webhostapp.com/api/admin/login",{method:"post" , headers:{Accept:"application/json",}, body: JSON.stringify({phone:"9267171288",password:"password1"})}).then(res=>{ console.log(res); return res.json()}).then(json=>console.log(json));
        // axios.post("https://superordinary-noses.000webhostapp.com/api/admin/login",{data: JSON.stringify({phone:"9267171288",password:"password1"})}).then(json=>console.log(json)) 
          getUser(token)
        }else{
            if (window.location.pathname!=="/login") {
                setError("Precisa fazer login primeiro")
            }
               setLoading(false)
        }
    },[])

    async function userLogin(phone: string, password: string) {
        try{
            setLoading(true)
            setError(null!)
          //  const {url, options} = TOKEN_POST({phone:phone, password:password})
          /*   fetch('https://superordinary-noses.000webhostapp.com/api/admin/login', {
            method: 'POST',
            headers: {
                "Accept":'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({phone:"926717288",password:"password1"})
            }) .then(data => data.json()).then(json => console.log(json)) 
            */
        /*      axios({
                url:'https://superordinary-noses.000webhostapp.com/api/admin/login',
                method: 'Post',
           
                data:{ phone: "926717288",
                password: 'password1'},
                headers:{
                    Accept: "application/json",
                 //   "Content-Type": "application/json",
                },
                timeout:120000,
                }).then(dados=> console.log(dados));

           */
          let dataa = {
            phone: "926717288",
            password: "password1"
          }
            fetch('http://superordinary-noses.000webhostapp.com/api/admin/login', {
              method:"POST",
              mode: "cors",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
               
                 body: JSON.stringify(dataa),
                 
                })
                .then(data => data.json()).then(json=> console.log(json)) 
         //   const dados = await response.data;

           // console.log(dados)
          /*  if (response.status == 200) {
              const json = await response.data
              window.localStorage.setItem("token", json.access_token)  
              await getUser(json.access_token)
            }else{
                setLoading(false)
              setError("Senha ou numero errado")
            }*/
        }catch(error){
            console.log(error+" userlogin")
            setLoading(false)
        }
       
    }
    
    async function getUser(token: string) {
        const {url, options} = USER_GET(token)
        try {
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
        } catch (error) {
            console.log(error+" getUserToken")
            setLoading(false)
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