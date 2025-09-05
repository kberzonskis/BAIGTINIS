import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminProductForm } from "../../../components/forms/AdminProductForm";
import { SERVER_ADDRESS } from "../../../env";


export function AdminProductNewPage() {
   return (
        <main>
            <AdminPageTitle title="New Product yes" />

            <div className="container">
                <div className="row">
                    <AdminProductForm
                        api={SERVER_ADDRESS + '/api/admin/products'}
                        method="POST" />
                </div>
            </div>
        </main>
    );
}
