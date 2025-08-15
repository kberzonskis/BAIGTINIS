import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminProductsTable } from "../../../components/AdminProductsTable";


export function AdminProductsAllPage() {
    return (
        <main>
            <AdminPageTitle title="ALL PRODUCTS" />
            <AdminProductsTable/>
        </main>
    );
}