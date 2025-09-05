import { PublicPageTitle } from '../../components/PublicPageTitle';
import { ProductCard } from '../../components/ProductCard';

import { useContext } from 'react';
import { ProductsContext } from '../../context/products/ProductsContext';




export function ProductsPage() {

    const {publicProducts} = useContext(ProductsContext);

    return (
        <main className='min-page-height'>
            <PublicPageTitle title='Products' />

            <div className="container">
                <div className="row">
                    {publicProducts.map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
            </div>
        </main>
    );
}