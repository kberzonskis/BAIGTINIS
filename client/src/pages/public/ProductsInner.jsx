import { PublicPageTitle } from '../../components/PublicPageTitle';
import { ProductCard } from '../../components/ProductCard';
// import { useContext } from 'react';
// import { ProductsContext } from '../../context/categories/ProductsContext';
import { useParams } from 'react-router';
// import { MoviesContext } from '../../context/movies/MoviesContext';

export function ProductInnerPage() {
    const productsData = [{}, {}];
 
    return (
        <main className='min-page-height'>
            <PublicPageTitle title='{{Products of coffee title}}' />
 
            <div className="container">
                <div className="row">
                    {productsData.map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
            </div>
        </main>
    );
}