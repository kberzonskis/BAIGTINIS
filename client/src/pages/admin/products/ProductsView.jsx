import { useParams } from 'react-router';
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { Alert } from "../../../components/Alert";
import { useContext } from 'react';
import { ProductsContext } from '../../../context/products/ProductsContext';
import { AdminViewProductTable } from '../../../components/admin-tables/products/AdminProductViewTable';

export function AdminProductsViewPage() {
    const { getAdminProductByUrlSlug } = useContext(ProductsContext);
    const { product } = useParams();

    const productData = getAdminProductByUrlSlug(product);

    return (
        <main>
            <AdminPageTitle title="View product" />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mt-5">
                        {
                            productData
                                ? <AdminViewProductTable productData={productData} />
                                : <Alert text='Norimas filmas nerastas, todel jo perziureti yra neimanoma.' />
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}