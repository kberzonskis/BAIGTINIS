import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminProductsTable } from "../../../components/AdminProductsTable";
export function AdminProductsPublishedPage() {
    return (
        <main>
            
            <AdminPageTitle title="PRODUCTS PUBLISHED" />
            <AdminProductsTable/>

        </main>
    );
}