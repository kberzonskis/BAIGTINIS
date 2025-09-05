import { useParams } from "react-router";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { Alert } from "../../../components/Alert";
import { AdminProductForm } from "../../../components/forms/AdminProductForm";
import { useContext } from "react";
import { ProductsContext } from "../../../context/products/ProductsContext";
import { SERVER_ADDRESS } from "../../../env";

export function AdminProductEditPage() {
    const { getAdminProductByUrlSlug } = useContext(ProductsContext);
    const { products } = useParams();

    const productsData = getAdminProductByUrlSlug(products);

    return (
        <main>
            <AdminPageTitle title="Edit products" />

            <div className="container">
                <div className="row">
                    {productsData
                        ? <AdminProductForm
                            api={SERVER_ADDRESS + '/api/admin/products/' + productsData.url_slug}
                            method="PUT"
                            products={productsData} />
                        : (
                            <div className="col-12 col-md-9 mt-5">
                                <Alert text='Norimas filmas nerasta, todel redagavimas yra neimanomas.' />
                            </div>
                        )}
                </div>
            </div>
        </main>
    );
}