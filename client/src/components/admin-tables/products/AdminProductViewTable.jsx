import { useContext } from "react";

import { FoodsContext } from "../../../context/foods/FoodsContext";
import defaultImg from '../../../img/products.webp';
import { SERVER_ADDRESS } from "../../../env";

export function AdminViewProductTable({ productData }) {
    const { getAdminFoodById } = useContext(FoodsContext);

    const foodData = getAdminFoodById(productData.food_id);
    const imgPath = productData.img ? (SERVER_ADDRESS + '/img/products/' + productData.img) : defaultImg;

    return (
        <table className="table table-bordered border-primary">
            <tbody>
                <tr className="mb-3">
                    <td>Thumbnail</td>
                    <td>
                        <img style={{ maxHeight: '5rem' }} src={imgPath} alt="product thumbnail" />
                        <p>{productData.img}</p>
                    </td>
                </tr>
                <tr className="mb-3">
                    <td>Title</td>
                    <td>{productData.title}</td>
                </tr>
                <tr className="mb-3">
                    <td>Url slug</td>
                    <td>{productData.url_slug}</td>
                </tr>
                <tr className="mb-3">
                    <td>Description</td>
                    <td>{productData.description}</td>
                </tr>
                <tr className="mb-3">
                    <td>Duration</td>
                 
                </tr>
                <tr className="mb-3">
                    <td>Food</td>
                    <td>{
                        foodData
                            ? foodData.title
                            : <span className="badge text-bg-warning">Not selected</span>
                    }</td>
                </tr>
               
                <tr className="mb-3">
                    <td>Status</td>
                    <td>
                        {
                            productData.status_name === 'published'
                                ? <span className="badge text-bg-success">Published</span>
                                : <span className="badge text-bg-warning">Draft</span>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
} 