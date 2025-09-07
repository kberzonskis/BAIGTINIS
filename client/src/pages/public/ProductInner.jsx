import { useParams } from 'react-router';
import { useContext } from 'react';
import { ProductsContext } from '../../context/products/ProductsContext';
import defaultImgUrl from '../../assets/default.png';
import notFoundImgUrl from '../../img/not-found.webp';
import { FoodsContext } from '../../context/foods/FoodsContext';

import { SERVER_ADDRESS } from '../../env';``

export function ProductInnerPage() {
    const { product } = useParams();
    const { getPublicProductByUrlSlug } = useContext(ProductsContext);
    const { publicFoods } = useContext(FoodsContext);

    const productData = getPublicProductByUrlSlug(product);

    if (!productData) {
        return (
            <main className="min-page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-5">
                            <h1 className="display-1">404</h1>
                            <p className="fs-2">product not found</p>
                        </div>
                        <img src={notFoundImgUrl} alt="product thumbnail" className="col-12 col-lg-3 object-fit-contain" />
                    </div>
                </div>
            </main>
        );
    }

    const foodData = publicFoods.find(f => f.id === productData.food_id);

    if (!foodData) {
        return (
            <main className="min-page-height">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-5">
                            <h1 className="display-1">404</h1>
                            <p className="fs-2">product not found</p>
                        </div>
                        <img src={notFoundImgUrl} alt="product thumbnail" className="col-12 col-lg-3 object-fit-contain" />
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-page-height">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-5">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">{foodData.title}</strong>
                        <h1 className="display-2">{productData.title}</h1>
                        <p className="card-text mb-5">{productData.description}</p>
                        
                    </div>
                    <img src={productData.img ? (SERVER_ADDRESS + '/img/products/' + productData.img) : defaultImgUrl} alt="product thumbnail" className="col-12 col-lg-4 object-fit-contain" />
                </div>
            </div>
        </main>
    );
}