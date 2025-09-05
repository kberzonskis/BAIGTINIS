import { Link } from "react-router";

export function Footer() {
    return (
        <footer className="p-4 text-bg-warning rounded-2 ">
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 p-4 border-top text-bg-secondary rounded-2">
                <p className="col-md-4 mb-0 text-body-secondary">  &copy; 2025 Company, Inc</p>
                <ul className="nav nav-pils col-md-4 justify-content-end">
                    <li className="nav-item">
                        <Link to="/" className="btn btn-outline-light me-2">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="btn btn-warning me-2">FOODS</Link>
                    </li>
                </ul>
            </footer>
        </div>
        </footer>
    );
}

