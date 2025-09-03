import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminProductsTable } from "../../../components/AdminProductsTable";
export function AdminProductsDraftPage() {
    return (
        <main>
            <AdminPageTitle title="PRODUCTS  IN PROGRESS" />
            <AdminProductsTable/>
        

        </main>
    );
}