import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminProductForm } from "../../../components/forms/AdminProductForm";

export function AdminProductNewPage() {
    return (
        <main>
            
             <AdminPageTitle title="NEW PRODUCTS" />
                  <div className="container">
                <div className="row">
                    <AdminProductForm />
                </div>
            </div>
        </main>
    );
}