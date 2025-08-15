import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";

export function AdminLayout() {
    return (
        <>
            <div className="container-fluid object-fit-lg-contain">
                <Header />
            </div>
            <div className="container-fluid min-page-height object-fit-fill">
               
               
                <div className="row min-page-height">
                    <Sidebar />
                    <div className="col-md-9 ms-sm-auto col-lg-9 ">
                        <Outlet />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Footer />
            </div>
        </>
    )
}