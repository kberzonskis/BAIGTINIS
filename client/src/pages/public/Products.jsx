import { Link } from 'react-router';

export function ProductsPage() {
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
        <main className='object-fit-lg-contain'>
            <div className="container col-xxl-8 px-4">
                <div className="row">
                    <h1 className="col-12 display-1 mb-5">Products</h1>
                </div>
           

            <div className="container px-4 py-5" id="featured-3">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    {
                        ProductsData.map(products => (
                            <div className="container px-4">
                                <h3 className="fs-2 text-body-emphasis">{products.title}</h3>
                                <p>{products.description}</p>
                                <p>Products count: {products.itemsCount}</p>
                                <Link to={'/categories/' + products.urlSlug} className="icon-link">Read more</Link>
                            </div>
                        ))
                    }
                </div>
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