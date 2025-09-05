import { Link } from 'react-router';

export function FoodCard({ food }) {
    return (
        <div className="feature col my-4">
            <h3 className="fs-2 text-body-emphasis">{food.title}</h3>
            <p>{food.description}</p>
            <p>Movies count: {food.moviesCount}</p>
            <Link to={'/categories/' + food.ur_slug} className="icon-link">Read more</Link>
        </div>
    );
}