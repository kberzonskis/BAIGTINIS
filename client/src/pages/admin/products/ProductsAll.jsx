import { useContext } from "react";
import { AdminPageTitle } from "../../../components/AdminPageTitle";
import {AdminProductsTable } from "../../../components/admin-tables/products/AdminProductsTable";
import { ProductsContext } from "../../../context/products/ProductsContext";

export function AdminProductsAllPage() {
   const { adminProducts } = useContext(ProductsContext);
    return (
        <main>
            <AdminPageTitle title="ALL PRODUCTS" />
            <AdminProductsTable products={adminProducts} />
        </main>
    );
}


