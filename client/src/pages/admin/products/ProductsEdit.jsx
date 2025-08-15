import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminProductForm } from "../../../components/forms/AdminProductForm";
export function AdminProductEditPage() {
    return (
        <main>
            
             <AdminPageTitle title="EDIT PRODUCTS" />
                  <div className="container">
                <div className="row">
                    <AdminProductForm />
                </div>
            </div>
        </main>
    );
}