import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import {BiNetworkChart} from "react-icons/bi"
import {HiHome} from "react-icons/hi"
import {AiOutlineTeam} from "react-icons/ai"
import {MdOutlineProductionQuantityLimits} from "react-icons/md"
import {FaFileSignature} from "react-icons/fa"
import {PiUsersFourFill} from "react-icons/pi"
export function SideBar({isOpenSidebar} : {isOpenSidebar :Boolean}) {
    
    return <div className={`${styles.conteiner} ${isOpenSidebar ? "" : styles.sideBarClose}`} >
        <div className={styles.topSideBAr}>
        <BiNetworkChart/>&nbsp;<span className={styles.itemText}>GENESYS</span> 
        </div>
       <div className={styles.Menuitem}>
              <Link to="/">
                <div>
                    <HiHome/>&nbsp; &nbsp;&nbsp;<span className={styles.itemText}>Home</span> 
                </div>
             </Link>
        </div>
        <div className={styles.Menuitem}>
              <Link to="/clientes">
                <div>
                    <AiOutlineTeam/>&nbsp; &nbsp;&nbsp;<span className={styles.itemText}>Clientes</span> 
                </div>
             </Link>
        </div>
        <div className={styles.Menuitem}>
              <Link to="/planos">
                <div>
                    <MdOutlineProductionQuantityLimits/> &nbsp; &nbsp;&nbsp;<span className={styles.itemText}>Planos</span> 
                </div>
             </Link>
        </div>
        <div className={styles.Menuitem}>
              <Link to="/subscricao">
                <div>
                    <FaFileSignature/>&nbsp; &nbsp;&nbsp;<span className={styles.itemText}>Subscrições</span> 
                </div>
             </Link>
        </div>
        <div className={styles.Menuitem}>
              <Link to="/funcionarios">
                <div>
                    <PiUsersFourFill/>&nbsp; &nbsp;&nbsp;<span className={styles.itemText}>Funcionarios</span> 
                </div>
             </Link>
        </div>
    </div>
}