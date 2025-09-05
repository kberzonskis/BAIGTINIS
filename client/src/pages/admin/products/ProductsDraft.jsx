import { ProductsContext } from "../../../context/products/ProductsContext";
import { useContext } from "react";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminProductsTable } from "../../../components/admin-tables/products/AdminProductsTable";
export function AdminProductsDraftPage() {
    const { adminProducts } = useContext(ProductsContext);
    return (
        <main>
            <AdminPageTitle title="PRODUCTS  IN PROGRESS" />
            <AdminProductsTable products={adminProducts.filter(p => p.status_name === 'draft')}/>
        

        </main>
    );
}

