import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminProductForm } from "../../../components/forms/AdminProductForm";
import { Alert } from "../../../components/Alert";
export function AdminFoodsEditPage() {

const product = {
        title: 'one',
        url: 'first',
        description: 'Good',
        status: 'published',
    };

    return (
        <main>
            
             <AdminPageTitle title="EDIT PRODUCTS" />
                  <div className="container">
                <div className="row">
                        <div className="col-12 col-md-9 mt-5">
                        <Alert text='Norima Foods sritis nerasta, todel redagavimas yra neimanomas.' />
                    </div>
                    <AdminProductForm product = {product}/>
                </div>
            </div>
        </main>
    );
}