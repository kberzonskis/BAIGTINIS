import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function PublicLayout() {
    return (
   <>
        <div className="container-fluid">
           <Header/>
          </div>
                <Outlet />
               <div className="container-fluid">  
                <Footer />
           </div>    
      
   </> 
)} 

   