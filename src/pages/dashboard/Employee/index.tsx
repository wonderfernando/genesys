import Home from '../Home/Home'
import {Teste} from "../../../components/Teste"; 
import styles from './styles.module.css'
export default function Employee() {
   return <div className={styles.conteiner}>
    <h1>Funcionarios</h1>
    <Teste >{<Home/>}</Teste>
   </div> 
}