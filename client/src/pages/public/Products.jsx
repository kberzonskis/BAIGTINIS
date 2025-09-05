import {ProductCard} from '../../components/ProductCard'
import { Link } from 'react-router';
import { PublicPageTitle } from '../../components/PublicPageTitle';

export function ProductsViewPage() {
    const ProductsData = [
        {
            title: 'Drinks',
            description: 'Lorem ipsum dolor sit amet.',
            itemsCount: 8,
            urlSlug: 'clothes',
        },
        {
            title: 'Food',
            description: 'Very lorem ipsum very dolor sit amet.',
            itemsCount: 25,
            urlSlug: 'food',
        },
    ];

    
    return (
       <main className='min-page-height'>
            <PublicPageTitle title='FOODS' />
                <div className="container px-4" id="featured-3">
                    <div className="row g-4 row-cols-1 row-cols-lg-3">
                        {ProductsData.map(product => <ProductCard key={product.title} product={product} />)}
                </div>
            </div>
        </main>
    );
}












/*
<div class="col">
    <div class="card shadow-sm"> <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img card-img-top"
            height="225" preserveAspectRatio="xMidYMid slice" role="img" width="100%"
            xmlns="http://www.w3.org/2000/svg">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                dy=".3em">Thumbnail</text>
        </svg>
        <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> </div> <small
                    class="text-body-secondary">9 mins</small>
            </div>
            </div> </div> </div> */