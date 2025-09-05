import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminFoodsTable } from "../../../components/AdminFoodsTable";
import { Alert } from "../../../components/Alert";


export function AdminFoodsViewPage() {
   
   const product = {
        title: 'one',
        url: 'first',
        description: 'Good',
        status: 'published',
    };
   
   
   
   
   
   
    return (
        <main>
             <AdminPageTitle title="View FOODS" />
             <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mt-5">
                        <Alert text='Norimas produktas nerastas...' />
                    </div>
                    <div className="col-12 col-md-9 mt-5">
                        <table className="table table-bordered border-primary">
                            <tbody>
                                <tr className="mb-3">
                                    <td>Title</td>
                                    <td>{product.title}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Url slug</td>
                                    <td>{product.url}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Description</td>
                                    <td>{product.description}</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Status</td>
                                          <td>
                                        {
                                            product.status === 'published'
                                                ? <span className="badge text-bg-success">Published</span>
                                                : <span className="badge text-bg-danger">Draft</span>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
           
        </main>
    );
}

