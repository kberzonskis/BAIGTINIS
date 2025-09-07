import { PublicPageTitle } from '../../components/PublicPageTitle';
import { FoodCard } from '../../components/FoodCard';
import { useContext } from 'react';
import { FoodsContext } from '../../context/foods/FoodsContext';



export function FoodsPage() {
     const { publicFoods } = useContext(FoodsContext);
    const foodsData = [
        {
            title: 'Action',
            description: 'Lorem ipsum dolor sit amet.',
            productsCount: 7,
            urlSlug: 'action',
        },
        {
            title: 'Crime',
            description: 'Very lorem ipsum very dolor sit amet.',
            productsCount: 66,
            urlSlug: 'crime',
        },
    ];

    return (
        <main className='min-page-height'>
            <PublicPageTitle title='Foods' />

            <div className="container px-4" id="featured-3">
                <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {publicFoods.map(food => <FoodCard key={food.title} food={food} />)}
                </div>
            </div>
        </main>
    );
}