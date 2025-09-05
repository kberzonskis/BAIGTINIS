import { useContext } from "react";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminProductsTable } from "../../../components/admin-tables/products/AdminProductsTable";
import { ProductsContext } from "../../../context/products/ProductsContext";


export function AdminProductsPublishedPage() {
    const { adminProducts } = useContext(ProductsContext);
    return (
        <main>
            
            <AdminPageTitle title="PRODUCTS PUBLISHED" />
            <AdminProductsTable products={adminProducts.filter(p => p.status_name === 'published')}   />

        </main>
    );
}