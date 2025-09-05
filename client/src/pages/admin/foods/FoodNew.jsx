import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminFoodForm } from "../../../components/forms/AdminFoodForm";
import { SERVER_ADDRESS } from "../../../env";



export function AdminFoodNewPage() {
    return (
        <main>
            <AdminPageTitle title="New FOODS"/>

            <div className="container">
                <div className="row">
                     <AdminFoodForm
                        api={SERVER_ADDRESS + '/api/admin/foods'}
                        method="POST" />
                </div>
            </div>
        </main>
    );
}