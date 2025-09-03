import { Link } from 'react-router';

export function ProductCard({ product }) {
    return (
        <div className="feature col my-4">
            <h3 className="fs-2 text-body-emphasis">{product.title}</h3>
            <p>{product.description}</p>
           
            <Link to={'/products/' + product.ur_slug} className="icon-link">Read more</Link>
        </div>
    );
}