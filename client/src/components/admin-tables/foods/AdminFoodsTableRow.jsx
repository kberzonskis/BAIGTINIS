import { useContext } from 'react';
import { Link } from 'react-router';
import { FoodsContext } from '../../../context/foods/FoodsContext';
import { SERVER_ADDRESS } from '../../../env';

export function AdminFoodsTableRow({ food }) {
    const { deletePublicFood, deleteAdminFood } = useContext(FoodsContext);

    function handleDeleteClick() {
        fetch(SERVER_ADDRESS + '/api/admin/foods/' + foods.url_slug, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    deletePublicFood(food.url_slug);
                    deleteAdminFood(food.url_slug);
                }
            })
            .catch(console.error);
    }

    return (
        <tr>
            <th scope="row">{food.id}</th>
            <td><Link to={"/admin/foods/" + food.url_slug}>{foods.title}</Link></td>
            <td>{food.url_slug}</td>
            <td>{food.description}</td>
            <td>{food.productsCount}</td>
            <td>
                {
                    food.status_name === 'published'
                        ? <span className="badge text-bg-success">Published</span>
                        : <span className="badge text-bg-warning">Draft</span>
                }

            </td>
            <td className="d-flex gap-3">
                <Link className="btn btn-primary btn-sm" to={`/admin/foods/${food.url_slug}/edit`}>Edit</Link>
                <button onClick={handleDeleteClick} className="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
    );
}