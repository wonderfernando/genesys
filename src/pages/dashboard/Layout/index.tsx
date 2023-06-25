
import styles from "./styles.module.css"
import { SideBar } from "../../../components/SideBar"
import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Costumer from "../Costumer"
 import NavBar from "../../../components/NavBar"

import { useState } from "react"
import Plan from "../Plan"
import Signature from "../Signature"
import Employee from "../Employee"
export default function Layout() {
    const[isOpenSidebar , setOpenSideBar] = useState<Boolean>(true)

    function openCloseSideBar() {
        setOpenSideBar(!isOpenSidebar)
    }

    return <div className={styles.conteiner}>
    
       <div className={styles.main}>
            <SideBar isOpenSidebar={isOpenSidebar}/>
            <div className={styles.content}>
                <NavBar openCloseSideBar={openCloseSideBar}  />
                <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/clientes" element={<Costumer/>}/>
                        <Route path="/planos" element={<Plan/>}/>
                        <Route path="/subscricao" element={<Signature/>}/>
                        <Route path="/funcionarios" element={<Employee/>}/>
                </Routes>
               
            </div>
               
           
        
           
       </div>

    </div>
}