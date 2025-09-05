import { Link, NavLink } from "react-router";
import logo from '../assets/th.webp';
import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";

export function Header() {
      const { isLoggedIn } = useContext(UserContext);
    return (

        <header className="p-4 text-bg-warning rounded-2 ">
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom p-4 text-bg-dark rounded-2">
                <div className="col-md-3 mb-4  mb-md-2">
                    <Link to='/' className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img className="rounded" src={logo} height={32} alt="Logo" />
                    </Link>
                </div>
                <ul className=" nav-pills  nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <Link to="/" className="btn btn-outline-light me-2">Home</Link>
                    </li>
                    <li>
                        <NavLink to='/foods' className="btn btn-warning me-2">FOODS</NavLink>
                        <NavLink to='/products' className="btn btn-warning me-2">PRODUCTS</NavLink>
                    </li>
                </ul>
               
<div className="col-md-3 text-end">
    {isLoggedIn ? (
                    <>
                        <Link to="/admin" className="btn btn-outline-light me-2">Dashboard</Link>
                        <Link to="/logout" className="btn btn-outline-light me-2">Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to="/register" className="btn btn-outline-light me-2">Register</Link>
                        <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                    </>
                )}

</div>






            </header>
        </div>
</header>
    );
}
/*
<header class="p-3 text-bg-dark">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> <a href="/"
                class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"> <svg class="bi me-2"
                    width="40" height="32" role="img" aria-label="Bootstrap">
                    <use xlink:href="#bootstrap"></use>
                </svg> </a>
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
                <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
                <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
                <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
                <li><a href="#" class="nav-link px-2 text-white">About</a></li>
            </ul>
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search"> <input type="search"
                    class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
            </form>
            <div class="text-end"> <button type="button" class="btn btn-outline-light me-2">Login</button> <button
                    type="button" class="btn btn-warning">Sign-up</button> </div>
        </div>
    </div>
</header>  */