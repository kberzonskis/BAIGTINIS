import { useContext } from 'react';
import { FoodsContext } from '../context/foods/FoodsContext';

import defaultImgUrl from '../assets/default.png';
import { SERVER_ADDRESS } from '../env';
import { Link } from 'react-router';

export function productCard({ product }) {
    const { publicFoods } = useContext(FoodsContext);
    const foodData = publicFoods.find(c => c.id === product.food_id);

    if (!foodData) {
        return;
    }

    return (
        <div className="col-12 col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col-12 col-lg-8 p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">{foodData.title}</strong>
                    <h3 className="mb-0">{product.title}</h3>
                    <p className="card-text mb-auto">{product.description}</p>
                 
                    <Link to={"/products/" + product.url_slug} className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                    </Link>
                </div>
                <div className="col-4 d-none d-lg-block">
                    <img className="w-100 h-100 object-fit-cover" src={product.img ? (SERVER_ADDRESS + '/img/products/' + product.img) : defaultImgUrl} alt="Matrix" />
                </div>
            </div>
        </div>
    );
}