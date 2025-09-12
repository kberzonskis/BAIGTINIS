import { useContext } from 'react';
import { Link } from 'react-router';
import { FoodsContext } from '../../../context/foods/FoodsContext';
import defaultImg from '../../../assets/default.png';
import { SERVER_ADDRESS } from '../../../env';
import { ProductsContext } from '../../../context/products/ProductsContext';

export function AdminProductsTableRow({ product }) {
    const { adminFoods } = useContext(FoodsContext);
    const { deletePublicProduct, deleteAdminProduct } = useContext(ProductsContext);

    if (!adminFoods.length) {
        return;
    }

    const imgPath = product.img ? (SERVER_ADDRESS + '/img/products/' + product.img) : defaultImg;

    function handleDeleteClick() {
        fetch(SERVER_ADDRESS + '/api/admin/products/' + product.url_slug, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    deletePublicProduct(product.url_slug);
                    deleteAdminProduct(product.url_slug);
                }
            })
            .catch(console.error);
    }

    return (
        <tr>
            <th scope="row">{product.id}</th>
            <td><img src={imgPath} alt="product thumbnail" style={{ maxHeight: '4rem' }} /></td>
            <td><Link to={"/admin/products/" + product.url_slug}>{product.title}</Link></td>
            <td>{
                product.description
                    ? <span className="badge text-bg-success">Provided</span>
                    : <span className="badge text-bg-warning">Empty</span>
            }</td>
         
            <td>
                {
                    product.food_id
                        ? adminFoods.find(f => f.id === product.food_id).title
                        : <span className="badge text-bg-warning">Not selected</span>
                }
            </td>
            <td>
                {
                    product.status_name === 'published'
                        ? <span className="badge text-bg-success">Published</span>
                        : <span className="badge text-bg-warning">Draft</span>
                }
            </td>
            <td>
                <div className="d-flex gap-3">
                    <Link className="btn btn-primary btn-sm" to={`/admin/products/${product.url_slug}/edit`}>Edit</Link>
                    <button onClick={handleDeleteClick} className="btn btn-danger btn-sm">Delete</button>
                </div>
            </td>
        </tr >
    );
}