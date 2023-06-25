import styles from "./styles.module.css"
import {RxHamburgerMenu} from "react-icons/rx"
import { useContext } from "react"
import {UserContext} from "../../Context/AuthContext"
export default function NavBar({openCloseSideBar} : {openCloseSideBar: () => void}) {
  
    const {data} = useContext(UserContext);
    console.log(data)
    function onClikMenuHundle() {
        openCloseSideBar()
    } 
    return <div className={styles.conteiner}>
        <button onClick={onClikMenuHundle}><RxHamburgerMenu/></button>
        <div>
            <img className={styles.img} width="30px" src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-3.55d8a646.jpg" alt="" />
            &nbsp;<span className={styles.name}>{data && data.name}</span>
        </div>
    </div>
}