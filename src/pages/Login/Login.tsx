import styles from "./styles.module.css"
import useForm from "../../Hooks/useForm"
import Input from "../../components/Input/Input"
import { TOKEN_POST, USER_GET } from "../../services/api/AUTH"
import { useContext, useEffect, } from "react"
 import {UserContext} from "../../Context/AuthContext";
import { Link, Navigate, redirect,useNavigate } from "react-router-dom"

export default function Login() {

    const {userLogin, login, error } = useContext(UserContext);
    const phone = useForm()
    const password = useForm()
  
    const onClick = async () => {
        if (phone.validate() && password.validate()) {
            userLogin(phone.value, password.value)
        }   
     
    }
 
    return (
        <div className={styles.conteiner}>
                <div className={styles.content}>
                    <h1 className={styles.title}>INICIAR SESSÃO</h1>
                  {error &&  <div className={styles.error}>{error}</div>}
                  <div className={styles.formGroup}>
                      <Input value={phone.value} error={phone.error} onChange={phone.onChange} color="#fff" type="text" background="#242424" placeholder="Numero de Telefone"/>  
                  </div>
                  <div className={styles.formGroup}>
                       <Input value={password.value} error={password.error} onChange={password.onChange} color="#fff" type="text" background="#242424" placeholder="Palavra-Passe"/>  
                  </div>
                  <button onClick={onClick} className={styles.btn}>Entrar</button>
                   <Link to="/">Recuperar Senha</Link>
                </div>
        </div>
    )
}