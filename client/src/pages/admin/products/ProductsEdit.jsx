import { useParams } from "react-router";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { Alert } from "../../../components/Alert";
import { AdminProductForm } from "../../../components/forms/AdminProductForm";
import { useContext } from "react";
import { ProductsContext } from "../../../context/products/ProductsContext";
import { SERVER_ADDRESS } from "../../../env";

export function AdminProductEditPage() {
    const { getAdminProductByUrlSlug } = useContext(ProductsContext);
    const { product } = useParams();

    const productData = getAdminProductByUrlSlug(product);

    return (
        <main>
            <AdminPageTitle title="Edit product" />

            <div className="container">
                <div className="row">
                    {productData
                        ? <AdminProductForm
                            api={SERVER_ADDRESS + '/api/admin/products/' + productData.url_slug}
                            method="PUT"
                            product={productData} />
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