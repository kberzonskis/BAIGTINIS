import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminFoodsTable } from "../../../components/AdminFoodsTable";


export function AdminFoodsAllPage() {
    return (
        <main>
            <AdminPageTitle title="ALL FOODS"/>
            <AdminFoodsTable/>
        </main>
    );
}