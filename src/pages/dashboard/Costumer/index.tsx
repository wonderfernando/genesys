import useForm from "../../../Hooks/useForm"
import Input from "../../../components/Input/Input"
import styles from "./styles.module.css"
import {useState,useEffect} from "react"
import {AiFillEdit} from "react-icons/ai"
import {FcDeleteDatabase} from "react-icons/fc"
import {BsEye} from "react-icons/bs"
import { ClienteType } from "../../../Types"
export default function Costumer(){
    const search = useForm();
    const [clientes,setClientes] = useState<ClienteType[]>(null!)

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/admin/costumers").then((response)=>response.json()).then((json)=> {console.log(json); setClientes(json)})
    },[])
    return <div className={styles.conteiner}>
        <div className={styles.top}>
            <div className={styles.searchArea}>    
                <Input value={search.value} error={search.error} onChange={search.onChange} background="#fff" color="#333" placeholder="Procurar" type="search"/>
                
                <select className={styles.order} name="" id="">
                    <option value="all">Todos</option>
                    <option value="forNome">Por Nome</option>
                    <option value="active">Activos</option>
                    <option value="inactive">Inativos</option>
                    <option value="payload">Subscritos</option>
                    <option value="soon">Mais Recentes</option>
                    <option value="along">Mais Antigos</option>
                </select>
            </div>
            <div className={styles.btnAreaAdd}>
                <button>+ Novo Cliente</button>
            </div>
        </div>
        <div className={styles.tableArea}>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Bi</th>
                        <th>Genero</th>
                        <th>Endereco</th>
                        <th>Estado</th>
                        <th colSpan={3}>Accao</th>
                    </tr>
                </thead>
                <tbody>


                     {
                        /*   <tr>
                        <td>Fernando Silva</td>
                        <td>91221212</td>
                        <td>fernando@gmail.com</td>
                        <td>000123123LS4234</td>
                        <td>Masculino</td>
                        <td>Gamek Vila rua 7 N12</td>
                        <td>Activo</td>
                        <td colSpan={3} className={styles.actionIcon}> <span title="Editar Cliente" className={styles.icon}> <AiFillEdit/></span><span title="Detalhes do Cliente" className={styles.icon}><BsEye/></span><span title="Inativar Cliente" className={styles.icon}><FcDeleteDatabase/></span> </td>
                    </tr> */
                     }
                 {clientes && clientes.map((cliente,index) => { return  <tr key={index}>
                        <td>{cliente.name}</td>
                        <td>{cliente.phone}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.bi}</td>
                        <td>{cliente.gender}</td>
                        <td>{cliente.address}</td>
                        <td>Activo</td>
                        <td colSpan={3} className={styles.actionIcon}> <span title="Editar Cliente" className={styles.icon}> <AiFillEdit/></span><span title="Detalhes do Cliente" className={styles.icon}><BsEye/></span><span title="Inativar Cliente" className={styles.icon}><FcDeleteDatabase/></span> </td>
                    </tr> })}
                  
                </tbody>
            </table>
            <div className={styles.pagination}>
               <ul>
                <li>ANTERIOR</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>PROXIMO</li>
               </ul>
            </div>
        </div>
    </div>
} 