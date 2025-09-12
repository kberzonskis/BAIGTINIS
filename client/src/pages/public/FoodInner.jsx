import { PublicPageTitle } from '../../components/PublicPageTitle';
import { ProductCard } from '../../components/ProductCard';
import { useContext } from 'react';
import { FoodsContext } from '../../context/foods/FoodsContext';
import { useParams } from 'react-router';
import { ProductsContext } from '../../context/products/ProductsContext';

export function FoodInnerPage() {
    const { publicFoods } = useContext(FoodsContext);
    const { publicProducts } = useContext(ProductsContext);
    const { food } = useParams();

    const foodData = publicFoods.find(f => f.url_slug === food);

    if (!foodData) {
        return (
            <main className='min-page-height'>
                <PublicPageTitle title="Kategorija nerasta" />

                <div className="container">
                    <div className="row">
                        <p>Norima kategorija "{food}" neegzistuoja.</p>
                    </div>
                </div>
            </main>
        );
    }

    const productsData = publicProducts.filter(p => p.food_id === foodData.id);

    return (
        <main className='min-page-height'>
            <PublicPageTitle title={foodData.title} />

            <div className="container">
                <div className="row">
                    {
                        productsData.length
                            ? productsData.map((product, index) => <ProductCard key={index} product={product} />)
                            : <div className='col-12 alert alert-warning'>Panašu, jog šioje kategorijoje šiuo metu nėra jokių filmų.</div>
                    }
                </div>
            </div>
        </main>
    );
}