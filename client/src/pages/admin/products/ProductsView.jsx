import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminProductsTable } from "../../../components/AdminProductsTable";


export function AdminProductViewPage() {
    return (
        <main>
             <AdminPageTitle title="View Products" />
             <AdminProductsTable/>
           
        </main>
    );
}

